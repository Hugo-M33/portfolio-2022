import '../styles/globals.css'
import type { AppProps } from 'next/app'
import SocialsBar from "../components/SocialsBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Component {...pageProps} />
        <SocialsBar/>
      </>

)
}
export default MyApp
