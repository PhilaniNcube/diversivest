import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import ContactButton from '../components/ContactButton';

const Home: NextPage = () => {
  return (
    <div className="h-[100vh] flex items-center relative w-[calc(100vw-126px)] ml-[70px] pl-16 border-l border-zinc-800 mx-auto">
      <h1 className="font-bold text-4xl leading-7 md:text-3xl lg:text-[100px]  mb-[10vh] max-w-[70vw] lg:max-w-[80vw] uppercase text-zinc-800">Athena Media <br /> Web Development</h1>
      <ContactButton />
    </div>
  )
}

export default Home
