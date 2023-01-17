import React, { useState } from 'react';
import "./topbar.css";
import { Phone, Email, FileDownload, LinkedIn, Twitter, GitHub} from '@mui/icons-material';
import { saveAs } from "file-saver";
import LoadingButton from '@mui/lab/LoadingButton';
import { IconButton } from '@mui/material';

const downloadBtn = {
  border: '0.5px solid #DC143C',
  borderRadius: '15px',
  p: 1.2,
  width: '10rem',
  fontWeight: 600,
  cursor: 'pointer',
  fontSize: '12px',
  color: '#DC143C',
  '&:hover': { color: 'white', backgroundColor: '#DC143C', fontWeight: 600 }
};

interface MenuProps {
  menuOpen: any,
  setMenuOpen: any
}

interface State {
  isLoading: boolean
}

export default function Topbar({menuOpen, setMenuOpen}: MenuProps) {
  const [values, setValues] = useState<State>({
    isLoading: false
  });

  const saveFile = () => {
    try {
      setValues({...values, isLoading: true});

      saveAs(
        "assets/cv.pdf",
        "Ayobami's CV"
      );
      setValues({...values, isLoading: false});
    } catch (error) {
      setValues({...values, isLoading: false});
      console.log(error)
    }
  };

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <LoadingButton
            onClick={saveFile}
            sx={downloadBtn}
            endIcon={<FileDownload sx={{display: {xs: 'none'}}}/>}
            loading={values.isLoading}
            loadingIndicator="Sign In..."
          >
            DOWNLOAD CV
          </LoadingButton>
          <div className="itemContainer">
            <Phone className="icon" />
            <span>+234 80 319 57690</span>
          </div>
          <div className="itemContainer">
            <IconButton
              href='#contact'
              sx={{
                color: "#262728",
                borderRadius: "40px",
                display: {lg: 'contents', xs: 'none'},
                '&:hover': {
                  color: '#DC143C'
                }
              }}
            >
              <Email className="icon" />
              <span>ayobamiajibola46@gmail.com</span>
            </IconButton>
          </div>
          <div className="socials">
            <IconButton
              sx={{
                color: "#DC143C",
                '&:hover': {
                  color: '#262728'
                }
              }}
              href='https://www.linkedin.com/in/ayobamiajibola/'
            >
              <LinkedIn
                sx={{
                  fontSize: "22px"
                }}
              />
            </IconButton>
          </div>
          <div className="socials">
            <IconButton
              sx={{
                color: "#DC143C",
                '&:hover': {
                  color: '#262728'
                }
              }}
              href='https://twitter.com/_ayurbami'
            >
              <Twitter
                sx={{
                  fontSize: "22px"
                }}
              />
            </IconButton>
          </div>
          <div className="socials">
            <IconButton
              sx={{
                color: "#DC143C",
                '&:hover': {
                  color: '#262728'
                }
              }}
              href='https://github.com/AyobamiAjibola'
            >
              <GitHub
                sx={{
                  fontSize: "22px"
                }}
              />
            </IconButton>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => {setMenuOpen(!menuOpen)}}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
