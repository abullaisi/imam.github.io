'use client'

import type { FC, ReactElement } from 'react'

import Highlight from './components/highlight'
import Jumbotron from './components/jumbotron'

const HomePage: FC = (): ReactElement => {
  return (
    <div className="min-h-screen">
      <Jumbotron />
      <Highlight />
    </div>
  )
}

export default HomePage
