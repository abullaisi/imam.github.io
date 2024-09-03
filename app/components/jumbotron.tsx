import Image from 'next/image'
import type { FC, ReactElement } from 'react'

import Content from '@/assets/Content.png'
import Badge from '@/components/global/badge'
import Button from '@/components/global/button'

const Jumbotron: FC = (): ReactElement => {
  return (
    <div
      className="grid grid-cols-1 items-center justify-center gap-10 bg-gray-50 px-0 lg:grid-cols-2 lg:px-20"
      // style={{ height: 'calc(100vh - 44px)' }}
    >
      <div className="px-4 py-5 lg:px-8">
        <Badge type="primary">
          <Badge type="secondary">Hello!</Badge> I`m Imam
        </Badge>
        <div className="mt-4 font-krona text-3xl leading-[70px] lg:text-6xl">
          <span className="">A Passionate</span>
          {/* <br /> */}
          <div className="">
            UI/UX{' '}
            <span className="relative w-full text-nowrap border-2 border-[#947EFB]">
              <div
                className="absolute h-4 w-4 border-2 border-[#947EFB] bg-white"
                style={{ top: '-10px', left: '-10px' }}
              ></div>
              <div
                className="absolute h-4 w-4 border-2 border-[#947EFB] bg-white"
                style={{ top: '-10px', right: '-10px' }}
              ></div>
              <div
                className="absolute h-4 w-4 border-2 border-[#947EFB] bg-white"
                style={{ bottom: '-10px', left: '-10px' }}
              ></div>
              <div
                className="absolute h-4 w-4 border-2 border-[#947EFB] bg-white"
                style={{ bottom: '-10px', right: '-10px' }}
              ></div>
              Designer
            </span>
          </div>
        </div>
        <div className="mt-6 text-xl text-[#475467]">
          Coming from Indonesia, with a solid 4 years+ of multi-design
          experience in web design, mobile app design, graphic design, and
          content creation. (Design hobbyist since junior high school).
        </div>
        <div className="mt-12 flex justify-start gap-3">
          <Button variant="secondary">Read CV</Button>
          <Button variant="primary">Let`s Talk</Button>
        </div>
      </div>
      <div className="flex w-full justify-end bg-[#FEF0C7]">
        <Image src={Content} alt="Image Profile" />
      </div>
    </div>
  )
}

export default Jumbotron
