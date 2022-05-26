import React from 'react'
import {PlusIcon} from '@heroicons/react/outline'

const ContactButton = () => {
  return (
    <button className="bg-zinc-800 absolute  right-[10vw] bottom-[10vh] min-w-fit  border border-zinc-800 px-3 py-2 flex justify-center tracking-wider items-center  text-white"><span className="whitespace-nowrap text-xs uppercase">Contact Us</span>  <PlusIcon className="ml-4 w-10 h-10" /></button>
  )
}

export default ContactButton