import React from 'react'

const MenuButton = () => {
  return (
      <div className="fixed left-[11px] top-[100px] z-20">
          <button className="cursor-pointer w-12 h-12 " onClick={() => { }}>
              <span className="before:content-[''] after:content-[''] before:w-[2px] after:w-[2px] before:h-[48px] after:h-[48px] before:absolute after:absolute before:bg-zinc-800 after:bg-zinc-900 before:left-[30%] after:left-[50%] before:top-[50%] after:top-[50%] before:block after:block before:translate-x-5 after:translate-x-5 before:scale-75 after:scale-75 before:rotate-180 after:rotate-180 before:transition-all after:transition-all "></span>
          </button>
      </div>
  )
}

export default MenuButton