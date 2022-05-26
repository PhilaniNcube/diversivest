import React, { useState, createContext } from 'react'

interface ContextState {
  open: boolean,
  setOpen: (arg: boolean) => void
}

export const MenuContext = createContext<ContextState>({
  open: false,
  setOpen: () => {}
})

const MenuManager:React.FC<React.ReactNode> = ({children}) => {
  const [open, setOpen] = useState(false)
  return (
    <MenuContext.Provider value={{open, setOpen}}>{children }</MenuContext.Provider>
  )
}

export default MenuManager