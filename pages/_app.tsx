import '../styles/globals.css'
import WorkInProgress from '../components/WorkInProgress';
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from "framer-motion"

import type { ReactElement, ReactNode } from 'react'
import type { GetServerSidePropsContext, NextPage } from 'next'
import React from 'react';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode,
  data?: {}
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout,
}

export const ProjectsContext = React.createContext({});

const EXISTING_PROJECTS = {
  Juanitor: {
    name: "Juanitor"
  },
  MA: {
    name: "Marianne Alliot"
  },
  Symfony: {
    name: "Paquito"
  }
}

const MAINTENANCE = process.env.MAINTENANCE === "true";
function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    
      <AnimatePresence>
          {getLayout(
            <motion.div key={router.route} transition={{ duration: .5 }} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
              pageInitial: {
                opacity: 0,
                x: -100
              },
              pageAnimate: {
                opacity: 1,
                x: 0
              },
              pageExit: {
                opacity: 0,
                x: 100,
              }
            }}>
              <Component {...pageProps} />
            </motion.div>
          )}
      </AnimatePresence>
  )

}

export default MyApp
