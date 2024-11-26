"use client";
import VideoJS from "@/components/VideoJS";
import LockedLevel from "@/components/lockedLevel/LockedLevel";
import {Button} from "@/components/ui/button";
import {useStore} from "@/zustand/store";
import {Bell, Play, Plus} from "lucide-react";
import React, {useEffect, useRef, useState} from "react";
import Image from "next/image";
import {hoverCardTypes} from "@/types";
import {Rect} from "@floating-ui/utils";

const MyHoverCard = () => {
    const {
        coordinate,
        setCoordinate,
        isShowHover,
        setIsShowHover,
        hoverData,
        setHoverData,
        hoverCardType,
    } = useStore();
    const playerRef = React.useRef(null);
    const [isZoomIn, setIsZoomIn] = React.useState(true);
    const elementRef = useRef<any>(null);
    let timerId = useRef<any>(null);
    const [parentRect, setParentRect] = useState({})

    const videoJsOptions = {
        preload: "metadata",
        autoplay: true,
        controls: false,
        responsive: true,
        fluid: true,
        muted: true,
        sources: [
            {
                src: hoverData?.TRAILER_PATH,
                type: "application/x-mpegURL",
            },
        ],
    };

    const handlePlayerReady = (player: any) => {
        playerRef.current = player;

        // You can handle player events here, for example:

        player.on("waiting", () => {
            console.log("player is waiting");
        });

        player.on("dispose", () => {
            console.log("player will dispose");
        });
    };

    useEffect(() => {
        if (isShowHover) {
            document.body.style.overflow = "hidden";
            timerId = setTimeout(() => {
                const rect = elementRef.current.getBoundingClientRect()
                setParentRect(rect)
            }, 350)

        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isShowHover]);


    const handleMouseLeave = () => {
        clearTimeout(timerId)
        setIsZoomIn(false);
        setTimeout(() => {
            setCoordinate(undefined, undefined);
            setIsShowHover(false);
            setHoverData(null);
            setIsZoomIn(true);
        }, 300)
    };


    if (!isShowHover) return null;


    return (

        <div
            ref={elementRef}
            className={`w-[300px] bg-[var(--gray)] fixed z-40 text-white ${
                isZoomIn ? "zoomIn" : "zoomOut"
            }`}
            style={{
                left: coordinate.x + "px",
                top: coordinate.y + "px",
            }}
            onMouseLeave={handleMouseLeave}
        >
            <div className="relative w-full h-[170px] bg-black">

                {
                    hoverData?.TRAILER_PATH ? (
                        <VideoJS options={videoJsOptions} onReady={handlePlayerReady} slider={true} position="top"
                                 playAndPause={false}
                                 parentRect={parentRect}
                        />

                    ) : (
                        <Image
                            src={hoverData?.CONTENT_HOR_POSTER}
                            alt=""
                            fill
                            className="rounded-tl-md rounded-tr-md"
                        />
                    )
                }
            </div>

            <div className="p-2">
                <h3 className="font-bold text-lg truncate">{hoverData?.CONTENT_NAME}</h3>
                <div className="flex gap-2 items-center text-sm text-gray-300">
                    <p>{hoverData?.CONTENT_PUBLISH_YEAR}</p>

                    {
                        hoverData?.CONTENT_COUNTRY && (
                            <div className="flex gap-2 items-center">
                                <p>|</p>
                                <p>{hoverData?.CONTENT_COUNTRY}</p>
                            </div>


                        )
                    }
                    {
                        hoverData?.LOCKED_LEVEL && (
                            <div className="flex gap-2 items-center">
                                <p>|</p>
                                <LockedLevel lockedLevel={hoverData.LOCKED_LEVEL}/>
                            </div>

                        )

                    }
                </div>
                <div className="flex gap-2 mt-4 font-bold">
                    <Button className="bg-primary flex-1 font-bold hover:bg-primary-hover">
                        <Play fill="white" strokeWidth={3.5} size={32}/>
                        Xem ngay
                    </Button>

                    {
                        hoverCardType === hoverCardTypes.addToList ? (
                            <Button
                                variant="outline"
                                className="flex-1 bg-transparent hover:bg-transparent hover:text-primary-foreground"
                            >
                                <Plus strokeWidth={3.5} size={32}/>
                                Thêm vào DS
                            </Button>
                        ) : (
                            <Button
                                variant="outline"
                                className="flex-1 bg-transparent hover:bg-transparent hover:text-primary-foreground"
                            >
                                <Bell strokeWidth={3.5} size={32}/>
                                Đặt lịch
                            </Button>
                        )
                    }

                </div>
            </div>
        </div>
    )
};

export default MyHoverCard;
