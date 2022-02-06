import React from 'react'
import styles from '../styles/Navbar.module.css'
import {Link} from "react-scroll"

const linkClassList = "select-none text-white mx-3 font-bold opacity-50 group-hover:opacity-100 transition-opacity duration-300 delay-100 scale-1.25 cursor-pointer"
const scrOpts = {smooth: "easeInOutQuad", duration:1500, containerId: "HomeScrollContainer"}

const Navbar: React.FC = () => {

    return (
        <nav className="fixed top-0 left-0 right-0 h-16 z-10 w-screen flex justify-center items-center group hover:scale-125 transition-transform duration-500">
          <h1 className={`${linkClassList}`}><Link to="top" {...scrOpts}>HM</Link></h1>
          <h2 className={`${linkClassList}`}><Link to="about" {...scrOpts}>À Propos</Link></h2>
          <h2 className={`${linkClassList}`}><Link to="projects" {...scrOpts}>Projets</Link></h2>
          <h2 className={`${linkClassList}`}><Link to="cv" {...scrOpts}>CV</Link></h2>
          <h2 className={`${linkClassList}`}><Link to="contact" {...scrOpts}>Contact</Link></h2>
        </nav>
      )
}

export default Navbar;