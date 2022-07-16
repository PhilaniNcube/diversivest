/* This example requires Tailwind CSS v2.0+ */
import { forwardRef, Fragment } from 'react'
import { Menu, Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  ChevronDoubleDownIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import Link from 'next/link'
import MenuButton from '../Menu/MenuButton'
import { useRouter } from 'next/router'

interface LinkTypes {
  url:string,
  link:string
}

const links: LinkTypes[] = [
  {
    url: '/',
    link: 'Home',
  },
  {
    url: '/contact',
    link: 'Contact',
  },
  {
    url: '/projects',
    link: 'Projects',
  },
]




function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Navbar() {

  const router = useRouter()

  return (
    <nav className="right-0 h-16 bg-sky-500 text-white">
      {/**Desktop Nav**/}
      <div className="container mx-auto hidden  h-full items-center md:flex md:justify-between">
        <Link href="/">
          <a className="text-2xl font-bold text-white">Athena Media</a>
        </Link>

        <ul className="flex h-full items-center space-x-4 text-white">
          {links.map((link, i) => (
            <li key={i} className="text-lg">
              <Link href={link.url}>{link.link}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/**Mobile Nav**/}
      <div className="container mx-auto flex h-full items-center justify-between px-4 md:hidden">
        <Link href="/">
          <a className="text-lg font-bold text-white">Athena Media</a>
        </Link>

        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
              Menu
              <ChevronDownIcon
                className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute z-10 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="px-1 py-1 ">
                {links.map((link, i) => (
                  <Menu.Item key={i}>
                    {({ active }) => (

                      <button
                        onClick={() => router.push(`${link.url}`) }
                        className={`${
                          active ? 'bg-violet-500 text-white' : 'text-gray-900'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                        {link.link}
                      </button>

                    )}
                  </Menu.Item>
                ))}
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </nav>
  )
}
