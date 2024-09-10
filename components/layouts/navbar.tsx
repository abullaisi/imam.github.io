'use client'

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

import LogoIcon from '@/assets/icons/logo-icon'
import { scrollToSection } from '@/lib/utils'

import Button from '../global/button'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [navBackground, setNavBackground] = useState('bg-transparent')

  useEffect(() => {
    const handleScroll = (): void => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 50) {
        setNavBackground('bg-white drop-shadow-md')
      } else {
        setNavBackground('bg-transparent')
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav
      className={`sticky top-0 z-10 w-full px-4 py-3 transition-colors duration-300 lg:px-20 lg:py-4 ${navBackground}`}
    >
      <div className="flex flex-wrap items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5">
          <LogoIcon />
          <span
            className="hidden font-krona text-2xl text-gunmetal sm:block"
            style={{
              letterSpacing: '-8%'
            }}
          >
            Imam Abullaisi
          </span>
        </Link>
        <div className="block lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="#444CE7"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isOpen ? 'block' : 'hidden'
          } block w-full justify-end pt-5 transition-all duration-300 ease-in-out lg:flex lg:w-auto lg:items-center lg:pt-0`}
        >
          <div className="flex flex-col gap-3 lg:flex-row">
            <Button
              variant="secondary"
              className="w-full"
              onClick={() => {
                scrollToSection('portfolio', 50)
              }}
            >
              Portfolio
            </Button>
            <Button
              variant="primary"
              className="w-full"
              onClick={() => {
                scrollToSection('footer', 50)
              }}
            >
              Contact
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
