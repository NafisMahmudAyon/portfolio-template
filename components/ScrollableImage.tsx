"use client"
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

interface ScrollableImageProps {
  src: string;
  alt: string;
  className?: string;
  containerHeight?: string;
  scrollSpeed?: number; // px per second
  isScroll?: boolean;
}

export function ScrollableImage({
  src,
  alt,
  className = '',
  containerHeight = '400px',
  scrollSpeed = 150, // default: 50px per second
  isScroll = false,
}: ScrollableImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [imageHeight, setImageHeight] = useState(0);
  const [containerHeightPx, setContainerHeightPx] = useState(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateHeights = () => {
      if (imageRef.current) {
        setImageHeight(imageRef.current.getBoundingClientRect().height);
      }
      if (containerRef.current) {
        setContainerHeightPx(containerRef.current.clientHeight);
      }
    };

    updateHeights();
    window.addEventListener('resize', updateHeights);
    return () => window.removeEventListener('resize', updateHeights);
  }, [src]);

  const maxScroll = Math.max(0, imageHeight - containerHeightPx);

  // duration = distance / speed
  const calculatedDuration = maxScroll > 0 ? (maxScroll / scrollSpeed) * 1000 : 0;

  return (
    <div
      ref={containerRef}
      className={`relative z-10 w-full overflow-hidden aspect-[3/2] ${className}`}
      // style={{ height: containerHeight }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isScroll ? 
      
      <img
        ref={imageRef}
        src={src}
        alt={alt}
        className="w-full transition-transform ease-linear absolute top-0 left-0"
        style={{
          transform: isHovered ? `translateY(-${maxScroll}px)` : 'translateY(0)',
          transitionDuration: `${calculatedDuration}ms`,
        }}
        onLoad={() => {
          if (imageRef.current) {
            setImageHeight(imageRef.current.getBoundingClientRect().height);
          }
        }}
      />
        : <Image
          src={src}
          width={600}
          height={400}
          alt={alt}
          className='aspect-[3/2] grid-rows-subgrid w-full object-cover group-hover:scale-110 transition-transform duration-200 ease-in-out'
        />}
    </div>
  );
}
