import {useRouter} from 'next/router'
import Layout from "../components/Layout"
import styles from "../styles/404.module.scss"
import BackButton from "../components/BackButton"



const Custom404: React.FC = () => {
  return (
      <Layout>
          <main className={styles.Page}>
              <BackButton style={{top: 50, left: 50}}/>
          <h1>OUPSI</h1>
          </main>
      </Layout>
  )
}

export default Custom404
