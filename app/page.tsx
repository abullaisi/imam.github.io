'use client'

import type { FC, ReactElement } from 'react'

import Highlight from './components/highlight'
import Jumbotron from './components/jumbotron'
import Portfolio from './components/portfolio'

const HomePage: FC = (): ReactElement => {
  return (
    <div className="rounded-10 min-h-screen px-2.5">
      <Jumbotron />
      <Highlight />
      <Portfolio />
    </div>
  )
}

export default HomePage
