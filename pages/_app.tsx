import '../styles/globals.css'
import { Fragment } from "react";
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import MenuManager from '../components/Menu/MenuManager';
import Footer from '../components/Footer';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Fragment>
        <MenuManager >
            <Header  />
            <Component {...pageProps} />
            <Footer />
        </MenuManager>
    </Fragment>
  )
}



export default MyApp
