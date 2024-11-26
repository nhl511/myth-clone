"use client";

import Image from "next/image";
import React from "react";
import {Button} from "@/components/ui/button";
import {convertSecToMin} from "@/lib/utils";
import BigCarousel from "@/app/components/bigCarousel/BigCarousel";
import {Play, Plus} from "lucide-react";
import LockedLevel from "@/components/lockedLevel/LockedLevel";

const Trailer = ({trailer}: { trailer: trailerItem[] }) => {

    const [slide, setSlide] = React.useState(0);
    const [directionAnimating, setDirectionAnimating] = React.useState<string>("left");

    if (!trailer) return null;

    return (
        <div className="">
            <BigCarousel slide={slide} setSlide={setSlide} dataLength={trailer?.length}
                         setDirectionAnimating={setDirectionAnimating}>
                {
                    trailer?.map((trailerItem: trailerItem, i) => (
                        <div
                            key={i}
                            className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-500 ${
                                slide === i ? "animate-fade-in opacity-100" : "animate-fade-out opacity-0"
                            }`}
                            style={{backgroundImage: `url(${trailerItem.WEBAPP_BACKGROUND_IMAGE})`}}
                        >
                            <div className="absolute left-1/2 bottom-0 right-[9%] ">
                                {trailerItem.WEBAPP_MAIN_IMAGE && (
                                    <Image
                                        src={trailerItem.WEBAPP_MAIN_IMAGE}
                                        alt={trailerItem.CONTENT_NAME}
                                        layout="responsive"
                                        width={100}
                                        height={50}
                                        className={`${
                                            directionAnimating === "left" ?
                                                slide === i ? "fadeInRight" : "fadeOutLeft"
                                                :
                                                slide === i ? "fadeInLeft" : "fadeOutRight"


                                        }`}
                                    />
                                )}
                            </div>
                        </div>

                    ))
                }
                {
                    trailer?.map((trailerItem: trailerItem, i) => (
                        <div key={i}
                             className={`absolute z-40 left-12 top-[calc(50% - 315.09px)] w-1/2 text-primary-foreground transition-opacity duration-500 ${slide === i ? "animate-fade-in opacity-100" : "animate-fade-out opacity-0"}`}>
                            <div className="w-2/3">
                                {trailerItem.CONTENT_NAME_IMAGE && (
                                    <Image
                                        src={trailerItem.CONTENT_NAME_IMAGE}
                                        alt={trailerItem.CONTENT_NAME}
                                        layout="responsive"
                                        width={100}
                                        height={50}
                                        quality={100}
                                        priority
                                    />
                                )}
                            </div>

                            <div className="flex flex-col gap-3 mt-5 w-2/3">
                                <div className="flex items-center gap-2 text-sm font-bold">
                                    <p>2024</p>|<p>{trailer[slide].CONTENT_COUNTRY}</p>|
                                    <p>
                                        {convertSecToMin(
                                            Number(trailerItem.CONTENT_DURATION)
                                        )}p
                                    </p>|
                                    <LockedLevel lockedLevel="P"/>
                                </div>
                                <div>
                                    <p className="leading-[1.3] text-base line-clamp-2">
                                        {trailerItem.CONTENT_DESC}
                                    </p>
                                </div>
                                <div className="flex gap-4 mt-4">
                                    <Button
                                        className="bg-primary text-xl font-bold hover:bg-primary-hover"
                                        size="lg"
                                    >
                                        <Play fill="white"/>
                                        Xem ngay
                                    </Button>
                                    <Button
                                        className="bg-white bg-opacity-15 text-xl font-bold hover:bg-opacity-20"
                                        size="lg"
                                    >
                                        <Plus/>
                                        Thêm vào DS
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </BigCarousel>
        </div>
    );
};

export default Trailer;
