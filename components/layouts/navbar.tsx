import Image from 'next/image'
import type { FC, ReactElement } from 'react'

const Navbar: FC = (): ReactElement => {
  return (
    <nav className="flex w-full items-center justify-between bg-red-500 px-20 py-4">
      <div className="flex items-center gap-2.5">
        <Image src={''} className="h-9 w-9 bg-indigo-600" alt="Logo" />
      </div>
      <div>
        <button>Profile</button>
      </div>
    </nav>
  )
}

export default Navbar
