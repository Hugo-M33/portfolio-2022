import '../styles/globals.css'
import WorkInProgress from '../components/WorkInProgress';
import type { AppProps } from 'next/app'

const MAINTENANCE = true;
function MyApp({ Component, pageProps }: AppProps) {
  return MAINTENANCE ? <WorkInProgress /> : <Component {...pageProps} />;
}

export default MyApp
