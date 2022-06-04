import React from 'react'

const index = () => {
   return (
        <>
            <div className="py-8 px-6 lg:px-0">
                <div className="flex md:flex-row flex-col-reverse items-start justify-center">
                    <div className="xl:w-1/3 md:w-1/2 w-full">
                        <h2 className="xl:text-5xl  md:text-4xl  md:block hidden font-bold leading-normal text-zinc-700">  Case study for Hotwater24</h2>
                        <div className="mt-10">
                            <div className="bg-zinc-100 shadow-md rounded w-full p-8 flex items-center">
                                <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-zinc-600">Generate High Quality Leads</p>
                            </div>
                            <div className="bg-zinc-100 shadow-md mt-4 rounded w-full p-8 flex items-center">
                                <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-zinc-600">Robust Website Analytics</p>
                            </div>
                            <div className="bg-zinc-100 shadow-md mt-4 rounded w-full p-8 flex items-center text-zinc-800">
                                <p className="lg:text-2xl text-base font-medium leading-6 ml-4 text-zinc-600">Effective Paid Marketing</p>
                            </div>
                        </div>
                    </div>
                    <div className="xl:w-5/12 md:w-1/2 lg:ml-32 md:ml-8 flex md:flex-col flex-col-reverse items-center justify-between">
                        <p className="text-base leading-6 text-zinc-600 mt-4">We created this website in order to generate quality leads for our customer that sells and installs Gas Geysers. With the website we have built for Hotwater24 they are able to get high quality enquiries from potential customers. The website als has a custom Ecommorce shop allowing for online purchases. The website also comes with the latest implementation of Google Analytics to allow fo more accurate reporting on the website traffic as well reliably measure th ROI on advertising like<span className="font-bold"> Google Ads & Facebook Advertising.</span></p>
                        <div className="2xl:mt-6 mt-10 w-full ">
                            <h1 className="sm:text-4xl mb-2 text-2xl md:hidden block font-bold leading-normal text-zinc-800">The Best Awsome Feature Section</h1>
                            <div className="relative flex items-center justify-center">

                                <img src="/images/hotwater24.png" alt="Hotwater24.com" className="w-full object-cover aspect-video  pb-6" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default index
