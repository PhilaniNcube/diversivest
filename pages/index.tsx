import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react';
import ContactButton from '../components/ContactButton';

const Home: NextPage = () => {
  return (
    <Fragment>
    <div className="min-h-screen flex items-center relative min-w-screen pl-16 mx-auto">
      <ContactButton />
      
      <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl  mb-[10vh] max-w-[70vw] lg:max-w-[80vw] uppercase text-zinc-800">We Help Build <br /> <span className="text-sky-500">Your Online</span> <br />Presence</h1>
      </div>
      <div className="min-h-screen bg-zinc-800">
        <div className="max-w-7xl mx-auto py-12">
          
        </div>
      </div>
    </Fragment>
  )
}

export default Home
