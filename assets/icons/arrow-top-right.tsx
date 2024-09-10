import { forwardRef } from 'react'

type SVGIconProps = React.SVGProps<SVGSVGElement>

const ArrowTopRight = forwardRef<SVGSVGElement, SVGIconProps>(
  ({ width = 14, height = 14, ...props }: SVGIconProps, ref) => (
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
        d="M1.16663 12.8333L12.8333 1.16663M12.8333 1.16663H1.16663M12.8333 1.16663V12.8333"
        stroke="#444CE7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
)

ArrowTopRight.displayName = 'ArrowTopRight'

export default ArrowTopRight
