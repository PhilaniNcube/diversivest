import React from 'react'

const index = () => {
   return (
     <>
       <div className="py-8 px-6 lg:px-0">
         <div className="flex flex-col-reverse items-start justify-center md:flex-row">
           <div className="w-full md:w-1/2 xl:w-1/3">
             <h2 className="hidden  font-bold  leading-normal text-zinc-700 md:block md:text-4xl xl:text-5xl">
               {' '}
               Case study for Hotwater24
             </h2>
             <div className="mt-10">
               <div className="flex w-full items-center rounded bg-zinc-100 p-8 shadow-md">
                 <p className="ml-4 text-base font-medium leading-6 text-zinc-600 lg:text-2xl">
                   Generate High Quality Leads
                 </p>
               </div>
               <div className="mt-4 flex w-full items-center rounded bg-zinc-100 p-8 shadow-md">
                 <p className="ml-4 text-base font-medium leading-6 text-zinc-600 lg:text-2xl">
                   Robust Website Analytics
                 </p>
               </div>
               <div className="mt-4 flex w-full items-center rounded bg-zinc-100 p-8 text-zinc-800 shadow-md">
                 <p className="ml-4 text-base font-medium leading-6 text-zinc-600 lg:text-2xl">
                   Effective Paid Marketing
                 </p>
               </div>
             </div>
           </div>
           <div className="flex flex-col-reverse items-center justify-between md:ml-8 md:w-1/2 md:flex-col lg:ml-32 xl:w-5/12">
             <p className="mt-4 text-base leading-6 text-zinc-600">
               We created this website in order to generate quality leads for
               our customer that sells and installs Gas Geysers. With the
               website we have built for Hotwater24 they are able to get high
               quality enquiries from potential customers. The website als has a
               custom Ecommorce shop allowing for online purchases. The website
               also comes with the latest implementation of Google Analytics to
               allow fo more accurate reporting on the website traffic as well
               reliably measure th ROI on advertising like
               <span className="font-bold">
                 {' '}
                 Google Ads & Facebook Advertising.
               </span>
             </p>
             <div className="mt-10 w-full 2xl:mt-6 ">
               <h1 className="mb-2 block text-2xl font-bold leading-normal text-gray-700 sm:text-4xl md:hidden">
                 Case study for Hotwater24
               </h1>
               <div className="relative flex items-center justify-center">
                 <img
                   src="/images/hotwater24.png"
                   alt="Hotwater24.com"
                   className="aspect-video w-full object-cover  pb-6"
                 />
               </div>
             </div>
           </div>
         </div>
       </div>
     </>
   )
}

export default index
