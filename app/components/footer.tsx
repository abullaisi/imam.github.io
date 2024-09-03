import Image from 'next/image'
import Link from 'next/link'
import type { FC, ReactElement } from 'react'

import Dribble from '@/assets/dribble.png'
import FacebookImage from '@/assets/facebook.png'
import CvIcon from '@/assets/icons/cvIcon'
import MailIcon from '@/assets/icons/mailIcon'
import LinkedInImage from '@/assets/linkedIn.png'
import LogoWhiteImage from '@/assets/Logo-white.png'
import StackImage from '@/assets/stack.png'
import TwitterImage from '@/assets/twitter.png'
import Button from '@/components/global/button'

const Footer: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-16 bg-[#161B26] px-20 py-16">
      <div className="flex flex-col items-center justify-center gap-12">
        <Image src={LogoWhiteImage} width={36} height={36} alt="Logo white" />
        <div className="flex flex-col items-center justify-center gap-4">
          <h6 className="text-center font-krona text-6xl text-[#F5F5F6]">
            Let’s get started on something great
          </h6>
          <span className="text-xl text-[#94969C]">
            For business inquiry please send email to iabullaisi@gmail.com
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 px-8">
        <hr />
        <div className="flex w-full justify-between">
          <div className="flex gap-6">
            <Link href="https://twitter.com/" target="_blank">
              <Image src={TwitterImage} alt="Twitter" />
            </Link>
            <Link href="https://www.linkedin.com/" target="_blank">
              <Image src={LinkedInImage} alt="LinkedIn" />
            </Link>
            <Link href="https://facebook.com/" target="_blank">
              <Image src={FacebookImage} alt="Facebook" />
            </Link>
            <Link href="https://dribbble.com/" target="_blank">
              <Image src={Dribble} alt="Dribble" />
            </Link>
            <Link href="https://dribbble.com/" target="_blank">
              <Image src={StackImage} alt="LinkedIn" />
            </Link>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex items-center gap-1">
              <span>Read CV</span>
              <CvIcon />
            </Button>
            <Button className="flex items-center gap-1">
              <span>Email Me</span>
              <MailIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
