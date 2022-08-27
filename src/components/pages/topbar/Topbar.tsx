import React, { useState } from 'react';
import "./topbar.css";
import { Phone, Email, FileDownload} from '@mui/icons-material';
import { saveAs } from "file-saver";
import LoadingButton from '@mui/lab/LoadingButton';

const downloadBtn = {
  border: '0.5px solid #DC143C',
  borderRadius: '18px',
  p: 1.2,
  fontWeight: 600,
  cursor: 'pointer',
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
            endIcon={<FileDownload />}
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
            <Email className="icon" />
            <span>ayobamiajibola46@gmail.com</span>
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
