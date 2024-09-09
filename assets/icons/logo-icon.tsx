import { forwardRef } from 'react'

type SVGIconProps = React.SVGProps<SVGSVGElement>

const LogoIcon = forwardRef<SVGSVGElement, SVGIconProps>(
  (
    { fill = '#444CE7', width = 36, height = 36, ...props }: SVGIconProps,
    ref
  ) => (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      ref={ref}
      {...props}
    >
      <path
        d="M0 0C10.1433 9.44041 25.8567 9.44041 36 0C26.5596 10.1433 26.5596 25.8567 36 36C25.8567 26.5596 10.1433 26.5596 0 36C9.44041 25.8567 9.44041 10.1433 0 0Z"
        fill={fill}
      />
    </svg>
  )
)

LogoIcon.displayName = 'LogoIcon'

export default LogoIcon
