import React from "react";
import Link from 'next/link'

function Footer() {

let date = new Date()
let year = date.getFullYear()


    return (
        <>
            <div>
                <div className=" mt-40 bg-sky-700 px-4 lg:px-0 py-10 lg:py-32">
                    <div className="w-full lg:flex justify-between mx-auto max-w-6xl">
                        <div className="lg:w-1/2 justify-between lg:flex">
                            <div className="flex flex-col mt-4 lg:mt-0">
                                <ul>
                                    <li>
                                      <Link href="/">
                                        <a  className="text-lg text-white tracking-wide font-semibold">
                                            Home
                                        </a>
                                      </Link>
                                    </li>
                                    <li className="mt-2">
                                      <Link href="/projects">
                                        <a  className="text-base text-white tracking-wide">
                                            Projects
                                        </a>
                                      </Link>
                                    </li>
                                    <li className="mt-2">
                                      <Link href="/contact">
                                        <a  className="text-base text-white tracking-wide">
                                            Contact
                                        </a>
                                      </Link>
                                    </li>

                                </ul>
                            </div>

                        </div>





                    </div>
                </div>
                <div className="bg-gray-100 py-12">
                    <h1 className="text-base text-gray-700 text-center">©{year} - <span className="font-bold">Athena Media.</span> All right reserved</h1>
                </div>
            </div>
        </>
    );
}

export default Footer;
