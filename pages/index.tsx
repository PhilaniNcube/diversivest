import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ContactButton from '../components/ContactButton';

const Home: NextPage = () => {
  return (
    <div className="h-[100vh] flex items-end relative w-[calc(100vw-126px)] ml-[70px] pl-16 border-l border-zinc-800 mx-auto">
      <h1 className="font-bold text-[100px] md:text-[10vw]  mb-[10vh] max-w-[70vw] uppercase text-zinc-800">Athena <br /> Media </h1>
      <ContactButton />
    </div>
  )
}

export default Home
