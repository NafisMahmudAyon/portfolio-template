'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'
import { useSidebar } from './SidebarContext'

interface SidebarProps {
  children: ReactNode
  className?: string
  breakPoint?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none'
}

export const Sidebar: React.FC<SidebarProps> = ({
  children,
  className = '',
  breakPoint = 'md',
  ...rest
}) => {
  const { isOpen } = useSidebar()

  const breakpointStyle = (breakPoint: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'none') => {
    switch (breakPoint) {
      case 'sm':
        return 'md:flex md:translate-x-0 md:relative md:z-40'
      case 'md':
        return 'lg:flex lg:translate-x-0 lg:relative lg:z-40'
      case 'lg':
        return 'xl:flex xl:translate-x-0 xl:relative xl:z-40'
      case 'xl':
        return '2xl:flex 2xl:translate-x-0 2xl:relative 2xl:z-40'
      case '2xl':
        return ''
      case 'none':
        return 'flex !translate-x-0 relative z-40'
      default:
        return 'lg:flex lg:translate-x-0 lg:relative lg:z-40'
    }
  }

  return (
    <aside
      className={cn(
        'bg-bg fixed top-0 left-0 h-screen w-64 flex-col p-5 transition-all duration-300 ease-in-out',
        breakpointStyle(breakPoint),
        isOpen ? 'translate-x-0' : '-translate-x-full',
        className
      )}
      {...rest}
    >
      {children}
    </aside>
  )
}
