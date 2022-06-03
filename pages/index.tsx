import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Fragment } from 'react';
import ContactButton from '../components/ContactButton';
import Hero from '../components/Hero';
import SectionOne from '../components/SectionOne';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Hero />
      <SectionOne />
    </Fragment>
  )
}

export default Home
