import React from 'react';
import { cn } from './utils/cn';
interface PageTitleProps {
  title: string;
  className?: string;
}
const PageTitle: React.FC<PageTitleProps> = ({ title, className = "" }) => {
  return (
    <h1 className={cn("mt-20 text-4xl mx-auto max-w-max text-headingText dark:text-headingDarkText font-bold mb-12", className)}>{title}</h1>
  )
}

export default PageTitle
