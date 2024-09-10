import {
  faXTwitter,
  faLinkedin,
  faMedium,
  faDribbble,
  faUpwork,
  faBehance
} from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import type { FC, ReactElement } from 'react'

import LogoIcon from '@/assets/icons/logo-icon'
import Button from '@/components/global/button'
import { handleOpenCV } from '@/lib/utils'

const Footer: FC = (): ReactElement => {
  const handleMail = (): void => {
    window.location.href = 'mailto:iabullaisi@gmail.com'
  }

  return (
    <div
      id="footer"
      className="flex flex-col gap-16 bg-[#161B26] px-4 py-16 lg:px-20"
    >
      <div className="flex flex-col justify-start gap-12 lg:items-center lg:justify-center">
        <LogoIcon fill="#85888E" />
        <div className="flex flex-col items-center justify-center gap-4">
          <h6
            className="text-start font-krona text-4xl text-[#F5F5F6] lg:text-center lg:text-6xl"
            style={{
              letterSpacing: '-8%'
            }}
          >
            Let’s get started on something great
          </h6>
          <span className="text-start text-base text-[#94969C] lg:text-center lg:text-xl">
            For business inquiry please send email to iabullaisi@gmail.com
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-0 lg:px-8">
        <hr />
        <div className="flex w-full flex-col justify-between gap-y-8 lg:flex-row">
          <div className="flex flex-wrap gap-6">
            <Link
              href="https://www.upwork.com/freelancers/~018bcc6270715b3e74"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faUpwork}
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#85888E'
                }}
              />
            </Link>
            <Link href="https://dribbble.com/abullaisi" target="_blank">
              <FontAwesomeIcon
                icon={faDribbble}
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#85888E'
                }}
              />
            </Link>
            <Link href="https://behance.net/abullaisi" target="_blank">
              <FontAwesomeIcon
                icon={faBehance}
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#85888E'
                }}
              />
            </Link>
            <Link href="https://abullaisi.medium.com" target="_blank">
              <FontAwesomeIcon
                icon={faMedium}
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#85888E'
                }}
              />
            </Link>
            <Link href="https://www.linkedin.com/in/abullaisi/" target="_blank">
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#85888E'
                }}
              />
            </Link>
            <Link href="x.com/abullaisi" target="_blank">
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{
                  width: '30px',
                  height: '30px',
                  color: '#85888E'
                }}
              />
            </Link>
          </div>
          <div className="flex flex-col gap-3 lg:flex-row">
            <Button
              variant="outline"
              className="flex w-full items-center justify-center gap-1 lg:w-fit"
              onClick={() => {
                handleOpenCV()
              }}
            >
              <span>Read CV</span>
              <FontAwesomeIcon
                icon={faFileLines}
                style={{
                  width: '20px',
                  height: '20px',
                  color: '#85888E'
                }}
              />
            </Button>
            <Button
              className="flex w-full items-center justify-center gap-1 lg:w-fit"
              onClick={() => {
                handleMail()
              }}
            >
              <span>Email Me</span>
              <FontAwesomeIcon
                icon={faEnvelope}
                style={{
                  width: '20px',
                  height: '20px',
                  color: '#FFFFFF'
                }}
              />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
