import React from 'react'
import styles from './SectionHeader.module.css'

type PropType = {
  title: string
}

const SectionHeader = ({title}:PropType) => {
  return (
    <h6 className="text-4xl md:text-6xl lg:text-7xl uppercase font-extrabold tracking-wide text-zinc-800">{title}</h6>
  )
}

export default SectionHeader
