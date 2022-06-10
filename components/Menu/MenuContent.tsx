import React, { useContext } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";
import { MenuContext } from './MenuManager';
import styles from './Menu.module.css';

const internalLinks = [
  {
    url: "/",
    component: <span>Home</span>,
    img:
      "/images/dev.jpeg",
  },
  {
    url: "/projects",
    component: <span>Projects</span>,
    img:
      "/images/projects.jpeg",
  },
  {
    url: "/team",
    component: <span>Team</span>,
    img:
      "/images/team.jpeg",
  },
  {
    url: "/contact",
    component: <span>Contact</span>,
    img:
      "/images/contact.jpeg",
  },

];

const externalLinks = [
  {
    url: "www.facebook.com",
    component: <Facebook />,
  },
  {
    url: "www.instagram.com",
    component: <Instagram />,
  },
  {
    url: "www.youtube.com",
    component: <Youtube />,
  },
  {
    url: "www.dribbble.com",
    component: <Dribbble />,
  },
  {
    url: "www.twitch.com",
    component: <Twitch />,
  },
];


const MenuContent = () => {

const {open, setOpen} = useContext(MenuContext)

  return (

      <div className={cn(`${styles.menuInside} w-full h-screen border-r border-zinc-900 z-10 duration-500 transition-transform text-white  ${open ? 'translate-x-0' : 'translate-x-[-100%]'}`) }>
        <div className={`${styles.menuContainer} w-[90%]`}>

          <ul className={styles.internalLinks}>

            {internalLinks.map((link, i) => (
              <Link key={link.url} href={link.url}>
                <li onClick={() => setOpen(false)} className={`${styles.link} relative ${open ? ` translate-x-0 ease-in-out` : '-translate-x-full'}`}>
                  <a className={`${styles.links} transition-all`}>
                    {link.component}
                  </a>
                  <img className="pointer-events-none aspect-video block w-[30vw] absolute top-[60%] -translate-x-[30px] translate-y-[-50%] right-[20%] object-cover transition-transform ease-in-out duration-500 filter brightness-75 opacity-0" src={link.img} />
                </li>
              </Link>
            ))}

          </ul>


           <ul className="external-nav-links mt-[100px] flex flex-wrap z-30">

            {externalLinks.map((link) => (
              <Link key={link.url} href={link.url}>
                <li className="mr-4 md:mr-8 text-zinc-800 z-20">
                  <a className="-translate-x-[100%] text-white delay-100  transition-all last-of-type:mr-0">
                    {link.component}
                  </a>

                </li>
              </Link>
            ))}

          </ul>

      </div>
      </div>

  )
}

export default MenuContent
