"use client";
import Image from "next/image";
import { useRef } from "react";

interface ScrollImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  mode?: "normal" | "scroll"; // default normal
}

export default function ScrollImage({
  src,
  alt,
  width = 600,
  height = 400,
  mode = "normal",
}: ScrollImageProps) {
  console.log(mode)
  const imgRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (mode === "scroll" && imgRef.current) {
      const img = imgRef.current.querySelector("img");
      if (img) {
        const diff = img.clientHeight - imgRef.current.clientHeight;
        img.style.transform = `translateY(-${diff}px)`;
        img.style.transition = `transform ${diff / 100}s linear`; // speed scales with height
      }
    }
  };

  const handleMouseLeave = () => {
    if (mode === "scroll" && imgRef.current) {
      const img = imgRef.current.querySelector("img");
      if (img) {
        img.style.transform = `translateY(0)`;
        img.style.transition = `transform 1.5s ease-in-out`;
      }
    }
  };

  return (
    <div
      ref={imgRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-lg"
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        // height={height}
        className={`w-full ${mode === "scroll" ? "will-change-transform" : ""
          }`}
      />
    </div>
  );
}
