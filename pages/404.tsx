import {useRouter} from 'next/router'
import Layout from "../components/Layout"
import styles from "../styles/404.module.scss"
import BackButton from "../components/BackButton"
import type { ReactElement } from 'react'
import type {NextPageWithLayout} from "./_app"



const Custom404: NextPageWithLayout = () => {
  return (
          <main className={styles.Page}>
              <BackButton style={{top: 50, left: 50}}/>
          <h1>OUPSI</h1>
          </main>

  )
}

Custom404.getLayout = (page: ReactElement) => (
    <Layout>
      {page}
    </Layout>
  )

export default Custom404
