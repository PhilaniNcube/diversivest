import React from 'react'
import projects from '../data/projects'
import Link from 'next/link'

const SectionOne = () => {



  return (
      <section className="min-h-[70vh] flex items-center justify-center">
          <div className="container mx-auto px-4 md:px-0  ">
             <div className="bg-gradient-to-r from-sky-100 to-blue-200 rounded-lg shadow-xl">
                    <div className="container mx-auto flex flex-col items-center py-12 sm:py-24">
                        <div className="w-11/12 sm:w-2/3 lg:flex justify-center items-center flex-col  mb-5 sm:mb-10">
                            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-center text-zinc-700 font-black leading-7 md:leading-10">
                                Get a handcrafted
                                <span className="text-sky-500"> Website{' '}</span>
                                tailormade for your business
                            </h1>
                            <p className="mt-5 sm:mt-10 lg:w-10/12 text-gray-700 font-medium text-center text-sm sm:text-lg">A professonal website drives sales. Let us help your create a beautiful website to impress and engage new customers and establish your business online </p>
                        </div>
                        <div className="flex justify-center items-center">
                          <Link href="/projects" passHref>
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 bg-sky-500 transition duration-150 ease-in-out hover:bg-sky-600 lg:text-xl lg:font-bold  rounded text-white px-4 sm:px-10 border border-sky-500 py-2 sm:py-4 text-sm">Our Work</button>
                          </Link>
                          <Link href="/contact" passHref>
                            <button className="ml-4 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 bg-transparent transition duration-150 ease-in-out hover:border-sky-600 lg:text-xl lg:font-bold  hover:text-sky-600 rounded border border-sky-500 text-sky-500 px-4 sm:px-10 py-2 sm:py-4 text-sm">Contact</button>
                          </Link>
                        </div>
                    </div>
          </div>
        </div>
    </section>
  )
}

export default SectionOne
