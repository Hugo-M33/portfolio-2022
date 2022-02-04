import '../styles/globals.css'
import WorkInProgress from '../components/WorkInProgress';
import type { AppProps } from 'next/app'
import { motion, AnimatePresence } from "framer-motion"

import type { ReactElement, ReactNode } from 'react'
import type { NextPage } from 'next'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const {MAINTENANCE} = process.env;
function MyApp({ Component, pageProps, router }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <AnimatePresence exitBeforeEnter>
      {MAINTENANCE ?
        <WorkInProgress />
        :

        getLayout(
          <motion.div key={router.route} transition={{ duration: 3 }} initial="pageInitial" animate="pageAnimate" exit="pageExit" variants={{
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
