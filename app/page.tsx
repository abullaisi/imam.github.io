'use client'

import type { FC, ReactElement } from 'react'

import Jumbotron from './components/jumbotron'

const HomePage: FC = (): ReactElement => {
  return (
    <div className="min-h-screen">
      <Jumbotron />
    </div>
  )
}

export default HomePage
