import type { FC, PropsWithChildren, ReactElement } from 'react'

const Badge: FC<
  PropsWithChildren<{
    className?: string
    type?: 'primary' | 'secondary'
  }>
> = ({
  children,
  className,
  type = 'primary'
}: PropsWithChildren<{
  className?: string
  type?: 'primary' | 'secondary'
}>): ReactElement => {
  return (
    <div
      className={`inline rounded-full border border-[#C7D7FE] p-1 text-[#3538CD] ${type === 'primary' ? 'bg-[#EEF4FF]' : 'bg-white'} ${className}`}
    >
      {children}
    </div>
  )
}

export default Badge
