import '../styles/globals.css'
import { Fragment } from "react";
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import MenuManager from '../components/Menu/MenuManager';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <Fragment>
            <Navbar />
            <Component {...pageProps} />
            <Footer />

    </Fragment>
  )
}



export default MyApp
