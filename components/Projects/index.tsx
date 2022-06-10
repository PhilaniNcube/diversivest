import Link from 'next/link'
import React, { Fragment } from 'react'
import projects from '../../data/projects'


interface ProjectType {
  name: string
  url: string
  image: string
  subtitle: string
}


const Projects = () => {

  return (
    <Fragment>
      <div className="w-full min-h-[70vh] bg-projects bg-center bg-cover bg-no-repeat bg-zinc-800 bg-blend-multiply flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-zinc-50">Recent Website Projects</h1>
        <p className="text-base mt-8 font-medium text-white">Take a look some of our completed projects. We are ready to help you join this list.</p>

      </div>
      <section className="max-w-7xl mx-auto px-6 py-12 lg:px-0">

        <div className="w-full mt-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project: ProjectType , index: number) => (
          <Link key={index} href={project.url}>
          <div className="w-full shadow-lg overflow-hidden group rounded-md cursor-pointer"  >
            <div className="aspec-video w-full h-[66%] group-hover:opacity-90 shadow-md">
              <img src={project.image} alt={project.url} className="aspec-video w-full h-full object-top object-cover" />
            </div>
               <div className="px-4 py-2 group-hover:opacity-90">

               <p className="text-sm md:text-lg text-zinc-700 font-bold">{project.name}</p>
               <Link href={project.url}><a className="text-zinc-700 font-medium">{project.url}</a></Link>
               <p className="text-xs md:text-sm text-zinc-700">{project.subtitle}</p>
               </div>
          </div>
          </Link>
        ))}
        </div>
      </section>
    </Fragment>
  )
}

export default Projects
