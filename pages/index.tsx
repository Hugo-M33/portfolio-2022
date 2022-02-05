import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import React, { ReactElement } from 'react'
import CSS from 'csstype';
import About from '../components/index/About';
import Projects from '../components/index/Projects';
import CurriculumVitae from '../components/index/CurriculumVitae';
import Contact from '../components/index/Contact';
import IndexCard from '../components/index/IndexCard';
import ReactTypingEffect from "react-typing-effect";
import { Transition } from '@headlessui/react'
import MaintenanceCard from '../components/index/MaintenanceCard';

interface StarSettings {
  x: Number,
  y: Number,
  rotation: Number,
  size: Number
}
const MAINTENANCE = process.env.MAINTENANCE === "true";
const Home: NextPageWithLayout = () => {
  return (
    <main className="snap-y h-screen overflow-y-scroll snap-mandatory">
      <div className={`snap-start h-screen bg-gradient-to-r from-emerald-600 to-emerald-900 relative`} >
        <div className={`w-1/8 absolute top-48 transform -translate-x-1/2 left-1/2 flex flex-col`}>

          <Transition
            appear={true}
            show={true}
            enter="transition duration-300 delay-300 ease-out"
            enterFrom="transform -translate-y-1/2 opacity-0"
            enterTo="transform  translate-y-0 opacity-75"
            entered="transform translate-y-0 opacity-75"
            className={` self-start text-white text-6xl  font-light select-none`}
            as="h1">Hey


          </Transition>
          <Transition
            appear={true}
            show={true}
            enter="transition duration-500 delay-500 ease-out"
            enterFrom="transform translate-x-1/8 opacity-0"
            enterTo="transform translate-x-0 opacity-100"
            entered="transform translate-x-0 opacity-100"
            className={` self-start text-white text-6xl  font-normal select-none`}
            as="h1">I&apos;m Hugo


          </Transition>
        </div>
        {MAINTENANCE ? <MaintenanceCard/> : <IndexCard />}
      </div>
      {MAINTENANCE ? <></> : <>
      <About />
      <Projects />
      <CurriculumVitae />
      <Contact /></>}
    </main>
  )
}

Home.getLayout = (page: ReactElement) => {
  return (
    <Layout>
      {page}
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
