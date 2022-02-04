import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import {AnimatePresence} from 'framer-motion';

const Layout: React.FC = ({children}) => {
  return (
    <>
        <Navbar />
        <AnimatePresence
                exitBeforeEnter
                initial={false}
                onExitComplete={() => window.scrollTo(0, 0)}
            >
        {children}
        </AnimatePresence>
        <Footer/>
    </>
  )
}

export default Layout;