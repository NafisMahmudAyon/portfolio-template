// ./app/src/components/Navbar/NavbarItem.tsx
'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface NavbarItemProps {
  children: ReactNode
  className?: string
}

export const NavbarItem: React.FC<NavbarItemProps> = ({
  children,
  className = '',
  ...rest
}) => {
  return (
    <button
      className={cn(
        'text-text hover:bg-transparent focus-visible:bg-bg-light inline-flex rounded-md px-2 py-1 transition-colors ease-in-out',
        className
      )}
      {...rest}
    >
      {children}
    </button>
  )
}
