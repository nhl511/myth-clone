import {ListVideo} from "lucide-react";
import Image from "next/image";
import React, {useEffect} from "react";
import {withData} from "@/hoc";
import {homeDataItem} from "@/types";

const AlbumCard = ({homeDataItem, sendData, inView}: {
    homeDataItem: homeDataItem,
    sendData: any,
    inView: boolean
}) => {
    const [hasLoaded, setHasLoaded] = React.useState(false)
    const setLoaded = React.useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])
    useEffect(() => {
        if (homeDataItem) sendData(homeDataItem);
    }, [homeDataItem]);

    return (
        <div className="w-full relative">
            <Image
                src={inView ? homeDataItem.CONTENT_HOR_POSTER : ""}
                alt=""
                layout="responsive"
                width={100}
                height={50}
                className="rounded-md z-30 relative"
                onLoad={setLoaded}
            />
            <div
                className="absolute bottom-2 right-2 bg-black text-white z-40 text-sm flex gap-1 items-center py-1 px-2 rounded-sm">
                <ListVideo size={16}/>
                {homeDataItem.TOTAL_EPISODE}
            </div>
            <div
                className="w-[90%] rounded-lg h-full bg-gray-500 absolute top-[-10px] left-[50%] translate-x-[-50%] z-20 bg-opacity-90"></div>
        </div>
    );
};

export default withData(AlbumCard);