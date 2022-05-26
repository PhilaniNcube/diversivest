import React, { useContext } from 'react'
import Link from 'next/Link'
import { Facebook, Instagram, Youtube, Dribbble, Twitch } from "react-feather";
import cn from "classnames";
import { MenuContext } from './MenuManager';
import styles from './Menu.module.css';

const internalLinks = [
  {
    url: "#1",
    component: <span>Projects</span>,
    img:
      "https://images.unsplash.com/photo-1615713170963-2595d2c721bb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80",
  },
  {
    url: "#2",
    component: <span>Recognition</span>,
    img:
      "https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2148&q=80",
  },
  {
    url: "#3",
    component: <span>Studio</span>,
    img:
      "https://images.unsplash.com/photo-1554941829-202a0b2403b8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
  },
  {
    url: "#4",
    component: <span>Contribution</span>,
    img:
      "https://images.unsplash.com/photo-1593697821028-7cc59cfd7399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2100&q=80",
  },
  {
    url: "#5",
    component: <span>Career</span>,
    img:
      "https://images.unsplash.com/photo-1588200618450-3a5b1d3b9aa5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80",
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

const {open} = useContext(MenuContext)

  return (
    <div className="menu-holder ">
      <div className={cn(`${styles.menuInside} z-10 duration-500 transition-transform text-white  ${open ? 'translate-x-0' : 'translate-x-[-100%]'}`) }>
        <div className={styles.menuContainer}>
          
          <ul className={styles.internalLinks}>

            {internalLinks.map((link, i) => (
              <Link key={link.url} href={link.url}>
                <li className={`${styles.link} ${open ? ` translate-x-0 ease-in-out` : '-translate-x-full'}`}>
                  <a className={`${styles.links} transition-all`}>
                    {link.component}
                  </a>
                  <img className="pointer-events-none aspect-video block w-[30vw] absolute top-[50%] -translate-x-[30px] translate-y-[-50%] right-[10%] object-cover transition-transform ease-in-out duration-500 filter brightness-75 opacity-0" src={link.img} />
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
    </div>
  )
}

export default MenuContent