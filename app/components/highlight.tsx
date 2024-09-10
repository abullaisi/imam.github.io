import type { FC, ReactElement } from 'react'

const Highlight: FC = (): ReactElement => {
  const highlights: Array<{
    title: string
    subtitle: string
  }> = [
    {
      title: '4 yrs+',
      subtitle: 'Of experience'
    },
    {
      title: '20+',
      subtitle: 'Overseas clients'
    },
    {
      title: '10%',
      subtitle: 'Top Upwork Talent'
    },
    {
      title: '4.9',
      subtitle: 'Average Rating'
    }
  ]

  return (
    <div className="grid grid-cols-1 items-center justify-between gap-4 bg-white px-4 py-16 lg:grid-cols-4 lg:px-20 lg:py-24">
      {highlights.map(({ subtitle, title }) => (
        <div
          key={title}
          className="flex flex-col items-center justify-center gap-8 lg:gap-3"
        >
          <div className="text-5xl font-bold text-[#3538CD] lg:text-6xl">
            {title}
          </div>
          <div className="text-lg font-semibold text-[#101828]">{subtitle}</div>
        </div>
      ))}
    </div>
  )
}

export default Highlight
