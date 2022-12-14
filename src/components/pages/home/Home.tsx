import React from 'react';
import { useState } from 'react'
import About from "../about/About";
import Project from "../project/Project";
import Topbar from "../topbar/Topbar";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import Menu from "../menu/Menu";
import "./home.css";
import Skill from '../skill/Skill';

export default function Home() {
    const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
          <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
            <About />
            <Project />
            <Skill />
            <Contact />
            <Footer />
          </div>
        </div>
  )
}
