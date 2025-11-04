'use client'

import React, { ReactNode } from 'react'
import { cn } from '../../utils/cn'

interface TableCaptionProps {
  children: ReactNode
  className?: string
  position?: 'top' | 'bottom'
}

export const TableCaption: React.FC<TableCaptionProps> = ({
  children,
  className = '',
  position = 'bottom',
  ...rest
}) => {
  return (
    <caption
      className={cn(
        'text-text-muted mb-2 mt-4 text-sm',
        position === 'top' ? 'caption-top' : 'caption-bottom',
        className
      )}
      {...rest}
    >
      {children}
    </caption>
  )
}
