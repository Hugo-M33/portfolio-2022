import React from 'react'
import styles from '../styles/Navbar.module.css'

const Navbar: React.FC = () => {
    return (
        <nav className={styles.navbar}>
          <h1>HM</h1>
          <h2>À Propos</h2>
          <h2>Projets</h2>
          <h2>CV</h2>
          <h2>Contact</h2>
        </nav>
      )
}

export default Navbar;