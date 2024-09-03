'use client'

import type { FC, ReactElement } from 'react'

import Footer from './components/footer'
import Highlight from './components/highlight'
import Jumbotron from './components/jumbotron'
import Portfolio from './components/portfolio'

const HomePage: FC = (): ReactElement => {
  return (
    <div className="rounded-10 min-h-screen">
      <Jumbotron />
      <Highlight />
      <Portfolio />
      <Footer />
    </div>
  )
}

export default HomePage
