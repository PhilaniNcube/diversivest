import React, {Fragment} from 'react'
import Hero from '../components/Hero'
import SectionOne from '../components/SectionOne'
import Featured from '../components/Featured'
import HowWeWork from '../components/HomePage/HowWeWork'

const index = () => {
  return (
    <Fragment>
      <SectionOne />
      <HowWeWork />
      <Featured />
    </Fragment>

  )
}

export default index
