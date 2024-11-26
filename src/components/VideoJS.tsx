import React, {useEffect, useRef, useState} from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import {Slider} from "./ui/slider";
import {cn} from "@/lib/utils";
import {Pause, Play, Volume2, VolumeX} from "lucide-react";

const VideoJS = (props: any) => {
    const videoRef = React.useRef<any>(null);
    const playerRef = React.useRef<any>(null);
    const {options, onReady} = props;
    const [isHovered, setIsHovered] = useState(false);
    const [duration, setDuration] = useState<number | undefined>(0);
    const [currentTime, setCurrentTime] = useState<number | undefined>(0);
    const [isOpenTooltip, setIsOpenTooltip] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [isPlay, setIsPlay] = useState(true);
    const [isHoverVideo, setIsHoverVideo] = useState(false);
    const tooltipRef = useRef<any>(null);

    const handleSliderChange = (value: number[]) => {
        playerRef.current.pause()
        const newTime = value[0];
        setCurrentTime(newTime);
        if (playerRef.current) {
            playerRef.current.currentTime(newTime);

        }
        setIsOpenTooltip(true);
    };


    const handlePlay = () => {
        playerRef.current.play();
    }

    const toggleMute = () => {
        if (playerRef.current) {
            const currentMutedState = playerRef.current.muted();
            playerRef.current.muted(!currentMutedState);
            setIsMuted(!currentMutedState);
        }
    };

    const togglePlay = () => {
        if (playerRef.current) {
            if (playerRef.current.paused()) {
                playerRef.current.play();
                setIsPlay(true);
            } else {
                playerRef.current.pause();
                setIsPlay(false);
            }
        }
    };

    useEffect(() => {
        if (isOpenTooltip) {
            const childRect = tooltipRef?.current?.getBoundingClientRect();

            if (childRect?.right >= props?.parentRect?.right) {
                tooltipRef.current.style.right = "0px"
            }
        }
    }, [currentTime, isOpenTooltip]);

    React.useEffect(() => {
        if (!playerRef.current) {
            const videoElement = document.createElement("video-js");

            videoElement.classList.add("vjs-big-play-centered");
            videoRef.current.appendChild(videoElement);

            const player = (playerRef.current = videojs(videoElement, options, () => {
                setDuration(player.duration());
                onReady && onReady(player);
            }));
            player.on("loadedmetadata", () => {
                setDuration(player.duration());
            });
            player.on("timeupdate", () => {
                setCurrentTime(player.currentTime());
            });
            setIsPlay(true)


        } else {
            const player = playerRef.current;
            player.autoplay(options.autoplay);
            player.src(options.sources);
            setIsPlay(true)
        }


    }, [options, videoRef, onReady]);

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
        <div data-vjs-player className="relative w-full h-full"
             onMouseEnter={() => setIsHoverVideo(true)}
             onMouseLeave={() => setIsHoverVideo(false)}
        >
            <div ref={videoRef}/>
            {
                isHoverVideo &&
                (props.position === "top" ? (
                    <div
                        onClick={toggleMute}
                        className="absolute top-2 right-2 w-[40px] h-[40px] bg-gray-800 flex justify-center items-center rounded-full text-primary-foreground">
                        {
                            isMuted ? <VolumeX strokeWidth={1.5}/> : <Volume2 strokeWidth={1.5}/>
                        }
                    </div>
                ) : (
                    <div
                        onClick={toggleMute}
                        className="absolute bottom-2 right-2 w-[40px] h-[40px] bg-gray-800 flex justify-center items-center rounded-full text-primary-foreground">
                        {
                            isMuted ? <VolumeX strokeWidth={1.5}/> : <Volume2 strokeWidth={1.5}/>
                        }
                    </div>
                ))
            }
            {
                isHoverVideo && props.playAndPause && (
                    <div className="absolute bottom-4 left-4 text-primary-foreground" onClick={togglePlay}>
                        {
                            isPlay ? (
                                <Pause fill="#ffffff" size={32}/>

                            ) : (
                                <Play fill="#ffffff" size={32}/>
                            )
                        }
                    </div>
                )
            }

            {
                props.slider && (
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
                            handlePlay={handlePlay}
                            tooltipRef={tooltipRef}
                        />

                    </div>
                )
            }

        </div>
    );
};

export default VideoJS;
