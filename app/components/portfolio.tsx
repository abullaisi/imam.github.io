'use client'

import { faCircleCheck } from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import type { FC, ReactElement } from 'react'

import AvatarImage from '@/assets/Avatar.png'
import Avatar1Image from '@/assets/Avatar1.png'
import ArrowTopRight from '@/assets/icons/arrow-top-right'
import MockupIosImage from '@/assets/images/MockupIos.png'
import MockupCascadeImage from '@/assets/MockupCascade.png'
import Badge from '@/components/global/badge'

const Portfolio: FC = (): ReactElement => {
  return (
    <div id="portfolio" className="flex flex-col gap-12 bg-white py-24 pt-12">
      <div className="flex flex-col items-center justify-center gap-3 px-4">
        <Badge className="flex items-center gap-1.5 px-2.5 py-1 text-sm font-medium text-[#3538CD]">
          <div className="h-2 w-2 rounded-full bg-[#6172F3]"></div>
          Featured
        </Badge>
        <h4
          className="font-krona text-4xl font-normal text-[#101828]"
          style={{
            letterSpacing: '-0.1em'
          }}
        >
          Portfolio
        </h4>
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <Image
          src={MockupCascadeImage}
          className="h-full w-full lg:order-last"
          alt="Mock up project"
        />
        <div className="flex flex-col gap-8 px-4 lg:py-8 lg:pl-28">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h5 className="flex items-center text-2xl font-semibold text-[#101828] lg:text-4xl">
              <span className="pr-2.5">Cascade Debt Dashboard Design</span>
              <Link href="https://www.cascadedebt.com/" target="_blank">
                <ArrowTopRight />
              </Link>
            </h5>
            <p className="text-base text-[#475467]">
              A venture capital backed US fintech startup.
            </p>
          </div>
          <div className="flex flex-col gap-4 pl-2">
            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  width: '25px',
                  height: '25px',
                  color: '#444CE7'
                }}
              />
              <div className="text-base text-[#475467]">
                Wireframe, design system, high-fidelity UI design, and clickable
                prototype
              </div>
            </div>
            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  width: '25px',
                  height: '25px',
                  color: '#444CE7'
                }}
              />
              <div className="text-base text-[#475467]">
                Collaborated with the early-stage product team that improve user
                experience
              </div>
            </div>
            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  width: '25px',
                  height: '25px',
                  color: '#444CE7'
                }}
              />
              <div className="text-base text-[#475467]">
                Increasing more conversions
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 self-stretch px-4 lg:flex-row">
            <div className="w-full flex-wrap break-all text-lg font-medium text-[#101828] lg:order-last">
              &quot;Imam was amazing - he went above and beyond to make sure the
              project was a success.&quot;
            </div>
            <div className="flex w-full items-center gap-4 lg:w-[300px]">
              <Image src={AvatarImage} className="h-14 w-14" alt="Client" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(item => (
                    <FontAwesomeIcon
                      key={item}
                      icon={faStar}
                      style={{
                        width: '20px',
                        height: '20px',
                        color: '#FDB022'
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#101828]">
                    Kyle Meade
                  </p>
                  <span className="text-base text-[#475467]">COO</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-8 pt-24 lg:grid-cols-2">
        <Image src={MockupIosImage} alt="mockup project" />
        <div className="flex flex-col gap-8 px-4 lg:py-8 lg:pr-28">
          <div className="flex flex-col gap-2 lg:gap-4">
            <h5 className="flex items-center text-2xl font-semibold text-[#101828] lg:text-4xl">
              <span className="pr-2.5">ARK Builders Apps Design</span>
              <Link href="https://ark-builders.dev/" target="_blank">
                <ArrowTopRight />
              </Link>
            </h5>
            <p className="text-base text-[#475467]">
              Privacy-focused cross-device productivity apps.
            </p>
          </div>
          <div className="flex flex-col gap-4 pl-2">
            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  width: '25px',
                  height: '25px',
                  color: '#444CE7'
                }}
              />
              <div className="text-base text-[#475467]">
                Design research, wireframe, high-fidelity UI design, and content
                creation
              </div>
            </div>
            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  width: '25px',
                  height: '25px',
                  color: '#444CE7'
                }}
              />
              <div className="text-base text-[#475467]">
                Collaborated with the product, media, and led the design team
              </div>
            </div>
            <div className="flex gap-3">
              <FontAwesomeIcon
                icon={faCircleCheck}
                style={{
                  width: '25px',
                  height: '25px',
                  color: '#444CE7'
                }}
              />
              <div className="text-base text-[#475467]">
                Collaborated with the product, media, and led the design team
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-5 px-4 lg:flex-row">
            <div className="w-full grow flex-wrap text-lg font-medium text-[#101828] lg:order-last">
              &quot;Amazing, Imam can solve any task. His designs are
              attractive, ergonomic and efficient. Will hire again for
              sure.&quot;
            </div>
            <div className="flex w-full items-center gap-4 lg:w-[300px]">
              <Image src={Avatar1Image} className="h-14 w-14" alt="Client" />
              <div className="flex flex-col gap-1">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(item => (
                    <FontAwesomeIcon
                      key={item}
                      icon={faStar}
                      style={{
                        width: '20px',
                        height: '20px',
                        color: '#FDB022'
                      }}
                    />
                  ))}
                </div>
                <div>
                  <p className="text-lg font-semibold text-[#101828]">
                    Kirill Taran
                  </p>
                  <span className="text-base text-[#475467]">Founder</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
