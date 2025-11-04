'use client'

import { useEffect } from 'react';
import { LinkIcon } from './Icons';

const Cursor = () => {
  useEffect(() => {
    if (typeof document !== "undefined") {
      const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement;
      const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement;

      const updateCursor = (e: MouseEvent) => {
        const posX = e.clientX;
        const posY = e.clientY;

        if (cursorDot !== null) {
          cursorDot.style.left = `${posX}px`;
          cursorDot.style.top = `${posY}px`;
        }

        cursorOutline?.animate(
          {
            left: `${posX}px`,
            top: `${posY}px`,
          },
          { duration: 500, fill: "forwards" }
        );
      };

      const addHoverEffect = () => {
        cursorDot?.classList.add("hover-effect");
        cursorOutline?.classList.add("hover-effect");
      };

      const removeHoverEffect = () => {
        cursorDot?.classList.remove("hover-effect");
        cursorOutline?.classList.remove("hover-effect");
      };

      window.addEventListener("mousemove", updateCursor);
      document.querySelectorAll("a, button").forEach((el) => {
        el.addEventListener("mouseenter", addHoverEffect);
        el.addEventListener("mouseleave", removeHoverEffect);
      });

      return () => {
        window.removeEventListener("mousemove", updateCursor);
        document.querySelectorAll("a, button").forEach((el) => {
          el.removeEventListener("mouseenter", addHoverEffect);
          el.removeEventListener("mouseleave", removeHoverEffect);
        });
      };
    }
  }, []);

  

  return (
    <>
      <div
        className="cursor-dot hidden lg:inline size-1 bg-primaryColor rounded-full fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[51] pointer-events-none "
        data-cursor-dot
      >
        <LinkIcon className="w-3 hidden lg:inline top-0 left-0 -translate-x-1/2 -translate-y-1/2 text-primaryColor" />
      </div>
      <div
        className="cursor-outline hidden lg:inline size-8 rounded-full border-2 border-primaryColor fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 z-[51] pointer-events-none"
        data-cursor-outline
      ></div>
    </>
  );
};

export default Cursor;
