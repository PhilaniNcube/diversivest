import React, { Fragment } from 'react'

const Team = () => {
  return (
      <Fragment>
           <div>
            <div className="container flex justify-center mx-auto pt-16">
                <div>
                    <p className="text-gray-500 text-lg text-center font-normal pb-3">OUR TEAM</p>
                    <h1 className="xl:text-4xl text-3xl text-center text-gray-700 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">The Talented People Behind the Scenes of the Organization</h1>
                </div>
            </div>
            <div className="w-full px-10 pt-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div className="xl:w-1/3 sm:w-2/5 mx-auto sm:max-w-xs relative mb-16 xl:max-w-sm lg:w-1/2">
                            <div className="bg-top bg-cover bg-no-repeat h-64">
                                <img src="https://cdn.tuk.dev/assets/photo-1564061170517-d3907caa96ea.jfif" alt="Team" className="h-full w-full overflow-hidden object-cover rounded-tl rounded-tr" />
                            </div>
                            <div className="py-4 bg-sky-600 flex flex-col justify-center rounded-br rounded-bl">
                                <p className="text-2xl text-center font-semibold text-white pb-1">
                                    Tongi <span className="font-light">Chikwanha</span>
                                </p>
                                <p className="text-center text-white font-bold">Graphic Designer</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-2/5 mx-auto sm:max-w-xs relative mb-16 xl:max-w-sm lg:w-1/2">
                            <div className="bg-top bg-cover bg-no-repeat h-64">
                                <img src="https://cdn.tuk.dev/assets/photo-1530577197743-7adf14294584.jfif" alt="Team" className="h-full w-full overflow-hidden object-cover rounded-tl rounded-tr" />
                            </div>
                            <div className="py-4 bg-sky-600 flex flex-col justify-center rounded-br rounded-bl">
                                <p className="text-2xl text-center font-semibold text-white pb-1">
                                    Vusa
                                    <span className="font-light"> Ncube</span>
                                </p>
                                <p className="text-center text-white font-bold">Business Development</p>
                            </div>
                        </div>
                        <div className="xl:w-1/3 sm:w-2/5 mx-auto sm:max-w-xs relative mb-16 xl:max-w-sm lg:w-1/2">
                            <div className="bg-top bg-cover bg-no-repeat h-64">
                                <img src="https://cdn.tuk.dev/assets/photo-1566753323558-f4e0952af115.jfif" alt="Team" className="h-full w-full overflow-hidden object-cover rounded-tl rounded-tr" />
                            </div>
                            <div className="py-4 bg-sky-600 flex flex-col justify-center rounded-br rounded-bl">
                                <p className="text-2xl text-center font-semibold text-white pb-1">
                                    Philani
                                    <span className="font-light"> Ncube</span>
                                </p>
                                <p className="text-center text-white font-bold">Web Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Team