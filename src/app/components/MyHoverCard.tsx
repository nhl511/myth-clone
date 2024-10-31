"use client";
import VideoJS from "@/components/VideoJS";
import LockedLevel from "@/components/lockedLevel/LockedLevel";
import { Button } from "@/components/ui/button";
import { useStore } from "@/zustand/store";
import { Divide, Play, Plus } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const MyHoverCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    coordinate,
    setCoordinate,
    isShowHover,
    setIsShowHover,
    hoverData,
    setHoverData,
  } = useStore();
  const playerRef = React.useRef(null);

  const videoJsOptions = {
    preload: "metadata",
    autoplay: true,
    controls: false,
    // responsive: true,
    // fluid: true,
    width: 300,
    height: 170,
    muted: true,
    sources: [
      {
        src: "https://demo.unified-streaming.com/k8s/features/stable/video/tears-of-steel/tears-of-steel.ism/.m3u8",
        type: "application/x-mpegURL",
      },
    ],
  };

  const handlePlayerReady = (player: any) => {
    playerRef.current = player;

    // You can handle player events here, for example:

    player.on("waiting", () => {
      setIsLoading(false);
      console.log("player is waiting");
    });

    player.on("dispose", () => {
      setIsLoading(false);

      console.log("player will dispose");
    });
  };

  useEffect(() => {
    if (isShowHover) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isShowHover]);

  const handleMouseLeave = () => {
    setCoordinate(undefined, undefined);
    setIsShowHover(false);
    setHoverData(null);
  };

  return isShowHover ? (
    <div
      className={`w-[300px] h-[290px] bg-gray-800 fixed z-40 text-white ${
        isShowHover ? "fadeIn" : "fadeOut"
      }`}
      style={{
        left: coordinate.x + "px",
        top: coordinate.y + "px",
      }}
      onMouseLeave={handleMouseLeave}
    >
      <div className="relative w-full h-[170px]">
        {/* <Image
          src={hoverData.CONTENT_HOR_POSTER}
          alt=""
          fill
          className="rounded-tl-md rounded-tr-md"
        /> */}
        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
      </div>

      <div className="py-2 px-4">
        <h3 className="font-bold text-lg truncate">{hoverData.CONTENT_NAME}</h3>
        <div className="flex gap-2 items-center text-sm text-gray-300">
          <p className="">{hoverData.CONTENT_PUBLISH_YEAR}</p>
          |
          <LockedLevel lockedLevel={hoverData.LOCKED_LEVEL} />
        </div>
        <div className="flex gap-2 mt-4 font-bold">
          <Button className="bg-primary flex-1 font-bold hover:bg-primary-hover">
            <Play strokeWidth={3.5} size={32} />
            Xem ngay
          </Button>

          <Button
            variant="outline"
            className="flex-1 bg-transparent hover:bg-transparent hover:text-primary-foreground"
          >
            <Plus strokeWidth={3.5} size={32} />
            Thêm vào DS
          </Button>
        </div>
      </div>
    </div>
  ) : null;
};

export default MyHoverCard;
