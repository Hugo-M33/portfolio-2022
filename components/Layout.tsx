import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import {AnimatePresence} from 'framer-motion';

const MAINTENANCE = process.env.MAINTENANCE === "true";
const Layout: React.FC = ({children}) => {
  return (
    <>
        {MAINTENANCE ? <></> : <Navbar />}
        <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
        {children}
        </AnimatePresence>
        {/* {MAINTENANCE ? <></> : <Footer/>} */}
    </>
  )
}

export default Layout;