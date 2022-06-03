import React from 'react'
import ContactButton from './ContactButton';

const Hero = () => {
  return (
   <div className="min-h-screen flex items-center relative min-w-screen pl-16 mx-auto">
      <ContactButton />
      
      <h1 className="font-bold text-2xl md:text-4xl lg:text-8xl  mb-[10vh] max-w-[70vw] lg:max-w-[80vw] uppercase text-zinc-800">We Help Build <br /> <span className="text-sky-500">Your Online</span> <br />Presence</h1>
      </div>
  )
}

export default Hero