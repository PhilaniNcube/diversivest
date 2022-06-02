import React, { useContext } from 'react'
import { PlusIcon } from '@heroicons/react/outline'
import {useRouter} from 'next/router'
import { MenuContext } from './Menu/MenuManager';
import cn from 'classnames'

const ContactButton = () => {

  const router = useRouter()

const {open, setOpen} = useContext(MenuContext)

  return (
    <button onClick={() => router.push('/contact')}  className={cn("bg-sky-500 absolute  right-[10vw] bottom-[10vh] min-w-fit border border-sky-500 hover:bg-white hover:text-blue-500 transition-all duration-500 ease-in-out px-3 py-2 flex justify-center tracking-wider items-center  text-white")}><span className=" whitespace-nowrap text-xs md:text-lg font-medium uppercase">Contact Us</span>  <PlusIcon className=" ml-4 w-10 h-10" /></button>
  )
}

export default ContactButton