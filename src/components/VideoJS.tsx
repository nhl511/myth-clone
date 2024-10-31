import React, { useState } from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import { Slider } from "./ui/slider";
import { cn } from "@/lib/utils";
import { VolumeX } from "lucide-react";

const VideoJS = (props: any) => {
  const videoRef = React.useRef<any>(null);
  const playerRef = React.useRef<any>(null);
  const { options, onReady } = props;
  const [isHovered, setIsHovered] = useState(false);
  const [duration, setDuration] = useState<number | undefined>(0);
  const [currentTime, setCurrentTime] = useState<number | undefined>(0);
  const [isOpenTooltip, setIsOpenTooltip] = useState(false);

  const handleSliderChange = (value: number[]) => {
    const newTime = value[0];
    setCurrentTime(newTime);
    if (playerRef.current) {
      playerRef.current.currentTime(newTime);
    }
    setIsOpenTooltip(true);
  };

  React.useEffect(() => {
    // Make sure Video.js player is only initialized once
    if (!playerRef.current) {
      // The Video.js player needs to be _inside_ the component el for React 18 Strict Mode.
      const videoElement = document.createElement("video-js");

      videoElement.classList.add("vjs-big-play-centered");
      videoRef.current.appendChild(videoElement);

      const player = (playerRef.current = videojs(videoElement, options, () => {
        videojs.log("player is ready");
        setDuration(player.duration());

        onReady && onReady(player);
      }));

      player.on("loadedmetadata", () => {
        setDuration(player.duration());
      });
      player.on("timeupdate", () => {
        setCurrentTime(player.currentTime());
      });

      // You could update an existing player in the `else` block here
      // on prop change, for example:
    } else {
      const player = playerRef.current;

      player.autoplay(options.autoplay);
      player.src(options.sources);
    }
  }, [options, videoRef, onReady]);

  // Dispose the Video.js player when the functional component unmounts
  React.useEffect(() => {
    const player = playerRef.current;

    return () => {
      if (player && !player.isDisposed()) {
        player.dispose();
        playerRef.current = null;
      }
    };
  }, [playerRef]);

  return (
    <div data-vjs-player className="relative">
      <div ref={videoRef} />
      <div className="absolute top-2 right-2 w-[40px] h-[40px] bg-gray-800 flex justify-center items-center rounded-full">
        <VolumeX strokeWidth={1.5} />
      </div>
      <div
        className="absolute bottom-0 w-full h-[10%]"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Slider
          isHovered={isHovered}
          defaultValue={[0]}
          value={[currentTime]}
          max={duration}
          currentTime={currentTime}
          step={1}
          className={cn("w-full absolute bottom-0")}
          onValueChange={handleSliderChange}
          isOpenTooltip={isOpenTooltip}
          setIsOpenTooltip={setIsOpenTooltip}
          {...props}
        />
      </div>
    </div>
  );
};

export default VideoJS;
