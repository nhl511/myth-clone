import React, {useEffect, useState} from 'react';
import useSWR from "swr";
import {getRecommended} from "@/services/apis/homePage.service";
import Image from "next/image";
import Card from "@/app/components/bigVideoCard/Card";
import VideoJS from "@/components/VideoJS";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";

const BigVideoCard = () => {
    const {data, isLoading} = useSWR("recommended", getRecommended)
    const [rcmItem, setRcmItem] = useState<mytvRecommendedItem | null>(null)

    const videoJsOptions = {
        preload: "metadata",
        autoplay: true,
        controls: false,
        responsive: true,
        fluid: true,
        muted: true,
        sources: [
            {
                src: rcmItem?.TRAILER_PATH,
                type: "application/x-mpegURL",
            },
        ],

    };
    useEffect(() => {
        if (data) {
            setRcmItem(data[0])
        }
    }, [data]);

    return (
        data?.length > 0 && (
            <div className="flex">
                <div className="[flex:2_2_0%]">
                    <VideoJS options={videoJsOptions} slider={false} position="bottom" playAndPause={true}/>
                </div>
                <div className="flex-1 flex flex-col justify-between bg-[var(--gray)] px-6 py-4">
                    <div>
                        <div className="w-full">
                            <Image src={rcmItem?.CONTENT_NAME_IMAGE} alt="" layout="responsive" width={100}
                                   height={50}/>
                        </div>
                        <div className="text-primary-foreground text-base line-clamp-2 mt-4"
                             dangerouslySetInnerHTML={{__html: rcmItem?.CONTENT_DESC}}/>

                    </div>
                    <Carousel>
                        <CarouselContent>
                            {
                                data.map((item: mytvRecommendedItem) => (
                                    <CarouselItem onClick={() => setRcmItem(item)} className="basis-1/3">
                                        <Card item={item} selectedItem={rcmItem}/>
                                    </CarouselItem>
                                ))
                            }
                        </CarouselContent>

                    </Carousel>


                </div>
            </div>
        )

    );
};

export default BigVideoCard;