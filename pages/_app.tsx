import '../styles/globals.css'
import type {AppContext, AppProps} from 'next/app'
import App from "next/app";

const MAINTENANCE = process.env.MAINTENANCE === "true";
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp

