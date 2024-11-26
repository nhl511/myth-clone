"use client";

import {Eye} from "lucide-react";
import Image from "next/image";
import React, {useEffect} from "react";
import {withData} from "@/hoc";
import {homeDataItem} from "@/types";

const CardHasView = ({homeDataItem, sendData, inView}: {
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
        <div className="w-full h-full relative">
            <Image
                src={inView ? homeDataItem.CONTENT_HOR_POSTER : ""}
                alt=""
                layout="responsive"
                width={100}
                height={50}
                className="rounded-md"
                onLoad={setLoaded}

            />
            <div
                className="w-full h-full top-0 absolute bg-gradient-to-t from-[#121212]/100 to-transparent via-[#121212]/5"></div>
            <div className="absolute left-2 bottom-1 text-white flex gap-2 text-xs font-bold">
                <Eye size={16}/>
                {homeDataItem.VIEW_COUNT}
            </div>
        </div>
    );
};

export default withData(CardHasView);