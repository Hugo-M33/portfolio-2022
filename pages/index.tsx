import type { NextPageWithLayout } from './_app'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import React, { ReactElement, useEffect, useState } from 'react'
import CSS from 'csstype';
import About from '../components/index/About';
import Projects from '../components/index/Projects';
import CurriculumVitae from '../components/index/CurriculumVitae';
import Contact from '../components/index/Contact';
import IndexCard from '../components/index/IndexCard';
import ReactTypingEffect from "react-typing-effect";
import { Transition } from '@headlessui/react'
import MaintenanceCard from '../components/index/MaintenanceCard';
import Scroller from "react-scroll";

export const ScrollingContext = React.createContext(false);



const MAINTENANCE = process.env.MAINTENANCE === "true";
const Home: NextPageWithLayout = ({data, children} : {data: {}, children: any})  => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  
  

  useEffect(() => {
    Scroller.Events.scrollEvent.register('begin', function(to, element) {
      setScrolling(true);
    });
  
    Scroller.Events.scrollEvent.register('end', function(to, element) {
      setScrolling(false);
    });
  
    return () => {
      Scroller.Events.scrollEvent.remove('begin');
      Scroller.Events.scrollEvent.remove('end');
    };
  }, []);
  

  return (
    <main className={`snap-y h-screen overflow-y-scroll ${!scrolling && "snap-mandatory"}`} id="HomeScrollContainer">
      <ScrollingContext.Provider value={scrolling}>
      <div className={`${!scrolling && "snap-start"} h-screen bg-gradient-to-r from-emerald-600 to-emerald-900 relative`} id="top">
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
      <Projects projects={data.projects}/>
      <CurriculumVitae />
      <Contact /></>}
      </ScrollingContext.Provider>
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

export default Home


export async function getServerSideProps(context: GetServerSidePropsContext) {
  const res = await fetch(`http://localhost:3000/api/projects`)
  const projects = await res.json();
  let data = {projects}
  if (res.status === 200) {
      return {
          props: {
              data,
          },
      }

  } else {
      console.log
      return {
          props: {
              data,
          },
      }
  }
}
