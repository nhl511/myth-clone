import Image from "next/image";
import React from "react";
import {homeDataItem} from "@/types";

const Top10Card = ({
                       homeDataItem,
                       index,
                       inView
                   }: {
    homeDataItem: homeDataItem;
    index: number;
    inView: boolean;
}) => {
    const [hasLoaded, setHasLoaded] = React.useState(false)
    const setLoaded = React.useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])
    return (
        <div className="w-full h-full relative flex justify-end">
            <div className="w-[90%]">
                <Image
                    src={inView ? homeDataItem.CONTENT_VER_POSTER : ""}
                    alt=""
                    layout="responsive"
                    width={100}
                    height={50}
                    className="rounded-md"
                    onLoad={setLoaded}
                />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-[49%]">
                <Image
                    src={`/images/${index}.png`}
                    fill
                    alt=""
                    objectFit="contain"
                    objectPosition="left"
                />
            </div>
        </div>
    );
};

export default Top10Card;
