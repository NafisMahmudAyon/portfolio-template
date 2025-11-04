'use client'
import { Tooltip, TooltipAction, TooltipContent } from '@/components/aspect-ui';
import data from '@/data/project-data.json';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

const BlogNav = ({ id }: { id: number }) => {
  const currentBlogId = id - 1;
  const isNext = currentBlogId < data.length - 1;
  const isPrev = currentBlogId > 0;
  const getSlug = (id: number) => {
    let slug = "";
    if (data[id].slug) {
      slug = data[id].slug;
    }
    return slug;
  }
  const nextLink = isNext ? `/projects/${getSlug(currentBlogId + 1)}` : '/projects';
  const prevLink = isPrev ? `/projects/${getSlug(currentBlogId - 1)}` : '/projects';
  return (
    <div className='flex gap-3 my-4'>
      {isPrev && <Tooltip>
        <TooltipAction outline className='p-0'>
          <Link href={prevLink} className='flex items-center gap-2 text-text px-4 py-2'><ChevronLeft className='size-5' /> <span>Previous Project</span></Link>
        </TooltipAction>
        <TooltipContent side="top" className=''>
          <p>
            {data[currentBlogId - 1]?.title}
          </p>
        </TooltipContent>
      </Tooltip>}
      {isNext && <Tooltip>
        <TooltipAction outline className='p-0'>
          <Link href={nextLink} className='flex items-center gap-2 text-text px-4 py-2'><span>Next Project</span> <ChevronRight className='size-5' /></Link>
        </TooltipAction>
        <TooltipContent side="top" className=''>
          <p>
            {data[currentBlogId + 1]?.title}
          </p>
        </TooltipContent>
      </Tooltip>}
    </div>
  )
}

export default BlogNav
