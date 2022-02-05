import {useRouter} from 'next/router'
import Layout from "../components/Layout"
import BackButton from "../components/BackButton"
import type { ReactElement } from 'react'
import type {NextPageWithLayout} from "./_app"



const Custom404: NextPageWithLayout = () => {
  return (
          <main className="w-screen h-screen bg-gradient-to-r from-blue-700 to-violet-700 grid place-items-center">
          <div className="w-1/2  grid grid-rows-3 px-8 justify-center">
            <h1 className="rotate-90 text-8xl w-fit px-6 text-white self-end">:(</h1>
            <h2 className="text-white text-xl">Sadly, this page doesn&apos;t exists</h2>
              <BackButton additionalClasses="ml-auto self-start"/>
          </div>
          </main>

  )
}

Custom404.getLayout = (page: ReactElement) => (
    <Layout>
      {page}
    </Layout>
  )

export default Custom404
