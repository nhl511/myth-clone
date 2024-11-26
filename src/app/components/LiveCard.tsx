import VideoJS from "@/components/VideoJS";
import moment from "moment";
import Image from "next/image";
import React, {useEffect, useRef, useState} from "react";
import {homeDataItem} from "@/types";

enum status {
    isLive = 1,
    upComming = 2
}

const LiveCard = ({homeDataItem}: { homeDataItem: homeDataItem }) => {
    const [isHoverd, setIsHovered] = useState(false);
    const playerRef = useRef(null);
    let timerId = useRef<any>(null);

    const videoJsOptions = {
        preload: "metadata",
        autoplay: true,
        controls: false,
        responsive: true,
        fluid: true,
        muted: true,
        sources: [
            {
                src: homeDataItem.TRAILER_PATH,
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

    const handleMouseEnter = () => {
        timerId.current = setTimeout(() => {
            setIsHovered(true);
        }, 1000);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
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
            className=""
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className="w-full h-[150px] relative">

                {isHoverd ? (
                    <VideoJS options={videoJsOptions} onReady={handlePlayerReady} slider={true} position="top"
                             playAndPause={false}/>
                ) : (
                    <Image
                        src={homeDataItem.CONTENT_HOR_POSTER}
                        alt=""
                        fill
                        objectFit="cover"
                    />
                )}
            </div>


            <div className="bg-gray-800 py-2 px-4 text-white ">
                <p className="text-lg mt-2 truncate font-bold">
                    {homeDataItem.CONTENT_NAME}
                </p>
                <div className="mt-2 flex justify-between text-sm">
                    <p className="text-gray-400">
                        {moment(homeDataItem.START_TIME).format("HH:mm - DD/MM/YYYY")}
                    </p>
                    {homeDataItem.IS_LIVE === status.isLive ? (
                        <p className="text-red-500">Đang diễn ra</p>
                    ) : (
                        <p className="text-orange-400">Sắp diễn ra</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LiveCard;
