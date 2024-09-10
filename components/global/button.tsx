import type { PropsWithChildren } from 'react'
import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
}

const Button = React.forwardRef<
  PropsWithChildren<HTMLButtonElement>,
  ButtonProps
>(
  (
    { variant = 'primary', className, children, ...props }: ButtonProps,
    ref
  ) => {
    const baseStyles =
      'h-11 rounded-lg px-4 py-2.5 transition duration-300 font-jakarta text-base font-semibold'

    const variantStyles = {
      primary: 'text-white bg-primary hover:bg-primary/90 focus:ring-primary',
      secondary:
        'bg-white text-storm-gray hover:bg-gray-100 focus:ring-storm-gray border border-[#D0D5DD]',
      outline:
        'border border-gray-500 text-gray-500 hover:bg-gray-100 focus:ring-gray-500'
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variantStyles[variant]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button' // Tambahkan displayName untuk debugging

export default Button
