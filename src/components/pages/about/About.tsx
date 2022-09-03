import React from 'react';
import "./about.css";
import Typewriter from "typewriter-effect";
import { Box, Button, IconButton } from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowRight } from '@mui/icons-material';

const contact = {
  border: '1px solid #676768',
  borderRadius: '18px',
  p: 1,
  fontWeight: 600,
  fontSize: 14,
  cursor: 'pointer',
  color: '#3B3C3D',
  '&:hover': { color: '#DC143C', fontWeight: 700, borderColor: '#DC143C' }
};

export default function About() {

  return (
    <div className="about" id="about">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <div className="wrap">
            <h3 style={{marginTop: "5px"}}>Ayobami</h3>
            <h3> Ajibola</h3>
            <h6>
              <Typewriter
                onInit={(typewriter)=> {
                typewriter
                .typeString("Programmer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Full Stack Web Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("NodeJS, ReactJS, Typescript")
                .pauseFor(1000)
                .start();
                }}
                options={{
                  loop: true,
                }}
              />
            </h6>
            <p>Hello! I am a Nigerian-based Full Stack web developer. I use ReactJS and NodeJS to create both
                frontend and backend web-based solutions. My work is guided by developing solutions that
                make use of the best technologies to produce improved user experiences.
            </p>
            <div className='contact-me'>
              <Button
                href="#contact"
                sx={contact}
                endIcon={<KeyboardArrowRight/>}
              >
                Contact me
              </Button>
            </div>
          </div>
        </div>
        <IconButton
          className='arrow'
          href="#project"
        >
          <KeyboardArrowDown
            className='effect'
            sx={{fontSize: '40px', '&:hover': {color: 'crimson'}}}
          />
        </IconButton>
      </div>
    </div>
  )
}
