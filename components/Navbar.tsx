import React from 'react'
import styles from '../styles/Navbar.module.css'
import {Link} from "react-scroll"

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
          <h1>HM</h1>
          <h2><Link to="about" smooth="easeOutQuint" offset={-125} duration={100}>À Propos</Link></h2>
          <h2><Link to="projects" smooth="easeOutQuint" offset={-125} duration={100}>Projets</Link></h2>
          <h2><Link to="cv" smooth="easeOutQuint" offset={-125} duration={100}>CV</Link></h2>
          <h2><Link to="contact" smooth="easeOutQuint" offset={-125} duration={100}>Contact</Link></h2>
        </nav>
      )
}

export default Navbar;