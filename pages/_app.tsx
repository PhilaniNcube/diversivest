import '../styles/globals.css'
import { Fragment } from "react";
import type { AppProps } from 'next/app'
import Header from '../components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (<Fragment>
            <Header />
            <Component {...pageProps} />
         </Fragment>)
  
}

export default MyApp
