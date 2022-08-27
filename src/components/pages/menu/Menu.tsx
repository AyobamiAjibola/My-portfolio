import React from 'react';
import "./menu.css";

interface MenuProps {
  menuOpen: any,
  setMenuOpen: any
}

export default function Menu({menuOpen, setMenuOpen}: MenuProps) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#about">About</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#project">Projects</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#payment">Packages</a>
          </li>
          <li onClick={()=>setMenuOpen(false)}>
              <a href="#contact">Contact</a>
          </li>
        </ul>
    </div>
  )
}
