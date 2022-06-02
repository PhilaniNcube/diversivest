import React, { useContext } from 'react'
import { MenuContext } from './MenuManager';

const MenuButton = () => {

const {open, setOpen} = useContext(MenuContext)

  return (
      <div className={`fixed left-[11px] top-[100px] z-20 transition-all duration-700 ${open ? 'delay-300' : ''}`}>
          <button className={`cursor-pointer w-12 h-12 transition-all duration-700 ${open ? 'translate-x-20 rotate-90 delay-300' : ''}`} onClick={() => setOpen(!open)}>
              <span className={`${open ? '' : ''}`}>

                <svg xmlns="http://www.w3.org/2000/svg" className={`h-12 w-12 ${open ? 'text-white' : 'text-zinc-800'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>

              </span>
          </button>
      </div>
  )
}

export default MenuButton