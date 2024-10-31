"use client";

import { Eye } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useStore } from "@/zustand/store";

const CardHasView = ({ homeDataItem }: { homeDataItem: homeDataItem }) => {
  const elementRef = useRef<any>(null);
  const { setCoordinate, setIsShowHover, setHoverData } = useStore();
  let timerId = useRef<any>(null);

  const handleMouseEnter = () => {
    timerId.current = setTimeout(() => {
      setHoverData(homeDataItem);
      const rect = elementRef.current.getBoundingClientRect();
      const centerX = rect.x + (rect.width - 300) / 2;
      const centerY = rect.y + (rect.height - 290) / 2;
      setCoordinate(centerX, centerY);
      setIsShowHover(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerId.current);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMouseLeave);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className="w-full h-full relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        src={homeDataItem.CONTENT_HOR_POSTER}
        alt=""
        layout="responsive"
        width={100}
        height={50}
        className="rounded-md"
      />
      <div className="w-full h-full top-0 absolute bg-gradient-to-t from-[#121212]/100 to-transparent via-[#121212]/5"></div>
      <div className="absolute left-2 bottom-1 text-white flex gap-2 text-xs font-bold">
        <Eye size={16} />
        {homeDataItem.VIEW_COUNT}
      </div>
    </div>
  );
};

export default CardHasView;
