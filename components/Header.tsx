import React from 'react'
import Menu from './Menu';

const Header = () => {
  return (
    <header className="">
             <p className="fixed z-10 top-[100px] right-[10vw] max-w-[120px] text-sky-500 uppercase text-[12px] text-right">Fullstack Web Development</p>
             <Menu />
    </header>
  )
}

export default Header