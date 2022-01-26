import type { NextPage } from 'next'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import React from 'react'
import CSS from 'csstype';
import About from '../components/index/About';
import Projects from '../components/index/Projects';
import CurriculumVitae from '../components/index/CurriculumVitae';
import Contact from '../components/index/Contact';

interface StarSettings {
  x: Number,
  y: Number,
  rotation: Number,
  size: Number
}

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.blurryGlass} ><h1>Photo du bg (moi)</h1></div>
      <div className={styles.skyBg}>
        {[...Array(100)].map((x, i) =>
          <Star key={`star_${i}`} />
        )}
      </div>
      <About/>
      <Projects/>
      <CurriculumVitae/>
      <Contact/>
    </Layout>
  )
}

const Star: React.FC = () => {
  const [settings] = React.useState<StarSettings>({
    x: Math.random() * 100,
    y: Math.random() * 100,
    rotation: Math.random() * 360,
    size: 5 + Math.random() * 15
  });

  const starStyle: CSS.Properties = {
    backgroundColor: '#FFFFFF',
    position: 'absolute',
    top: `${settings.y}%`,
    left: `${settings.x}%`,
    transform: `rotate(${settings.rotation}deg)`,
    width: `${settings.size}px`,
    height: `${settings.size}px`,
    zIndex: 2
  }
  return (
    <div style={starStyle} />
  )
}

export default Home
