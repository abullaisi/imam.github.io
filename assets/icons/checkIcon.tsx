import React from 'react'

type SVGProps = React.SVGProps<SVGSVGElement>

const CheckIcon: React.ForwardRefExoticComponent<
  Omit<SVGProps, 'ref'> & React.RefAttributes<SVGSVGElement>
> = React.forwardRef<SVGSVGElement, SVGProps>((props, ref) => (
  <svg
    width="28"
    height="29"
    viewBox="0 0 28 29"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    ref={ref}
    {...props}
  >
    <path
      d="M8.75004 14.7143L12.25 18.2143L19.25 11.2143M25.6667 14.7143C25.6667 21.1576 20.4434 26.3809 14 26.3809C7.55672 26.3809 2.33337 21.1576 2.33337 14.7143C2.33337 8.27095 7.55672 3.04761 14 3.04761C20.4434 3.04761 25.6667 8.27095 25.6667 14.7143Z"
      stroke="#444CE7"
      strokeWidth="2.33333"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
))

CheckIcon.displayName = 'CheckIcon'

export default CheckIcon
