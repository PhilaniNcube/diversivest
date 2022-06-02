import '../styles/globals.css'
import { Fragment } from "react";
import type { AppProps } from 'next/app'
import Header from '../components/Header';
import MenuManager from '../components/Menu/MenuManager';

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
    <Fragment>
        <MenuManager >
            <Header  />
            <Component {...pageProps} />
        </MenuManager>
    </Fragment>
  )
}
      
  

export default MyApp
