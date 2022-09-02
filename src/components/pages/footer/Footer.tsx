import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import React from 'react';
import "./footer.css"

export default function Footer() {
  return (
    <div className='footer'>
      <div className="container">
        <div>
          <IconButton
            sx={{
              color: "#DC143C",
              marginRight: "40px",
              '&:hover': {
                color: '#262728'
              }
            }}
            href='https://twitter.com/_ayurbami'
          >
            <Twitter
              sx={{
                fontSize: "25px"
              }}
            />
          </IconButton>
          <IconButton
            sx={{
              color: "#DC143C",
              marginRight: "40px",
              '&:hover': {
                color: '#262728'
              }
            }}
            href='https://www.linkedin.com/in/ayobamiajibola/'
          >
            <LinkedIn
              sx={{
                fontSize: "25px"
              }}
            />
          </IconButton>
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
                fontSize: "25px"
              }}
            />
          </IconButton>
        </div>
        <p>©{new Date().getFullYear()} ayobami ajibola</p>
      </div>
    </div>
  )
}
