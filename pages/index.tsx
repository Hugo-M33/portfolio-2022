import type { NextPage } from 'next'
import Typography from "../components/Typography";
import HeroImage from "../components/HeroImage";
import Head from "next/head";

const Home: NextPage = () => {
  return (
      <main className={`bg-light-shades w-screen max-h-screen w-screen`}>
          <Head>
              <meta name="viewport" content="width=device-width, initial-scale=1"/>
              <title>Hugo Martin - Développeur Web</title>
          </Head>
          <section className={`grid grid-rows-2 lg:grid-cols-2 lg:grid-rows-1 place-items-center h-screen overflow-hidden`}>
              <div className={`flex flex-col align-center px-12 md:px-24 gap-8`}>
                  <Typography as={"h1"} className={`font-bold transition-transform group animate-fade-in-up`}>Hugo Martin<span className={`animate-bounce inline-block`}>.</span></Typography>
                  <Typography className={`animate-fade-in-2 delay-500`}>Développement Web, React, Next, Express...</Typography>
              </div>
              <HeroImage/>
          </section>
      </main>
  )

}

export default Home
