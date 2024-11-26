import Image from "next/image";
import React, {useEffect} from "react";
import {withData} from "@/hoc";
import {homeDataItem} from "@/types";

const CardHasTitle = ({homeDataItem, sendData, inView}: {
    homeDataItem: homeDataItem,
    sendData: any,
    inView: boolean
}) => {
    const [hasLoaded, setHasLoaded] = React.useState(false)
    const setLoaded = React.useCallback(() => {
        if (inView) setHasLoaded(true)
    }, [inView, setHasLoaded])
    useEffect(() => {
        if (homeDataItem) sendData(homeDataItem)
    }, [homeDataItem]);
    return (
        <div>
            <Image
                src={inView ? homeDataItem.CONTENT_HOR_POSTER : ""}
                alt=""
                layout="responsive"
                width={100}
                height={50}
                className="rounded-md"
                onLoad={setLoaded}
            />
            <p className="text-white text-lg mt-2 truncate">
                {homeDataItem.CONTENT_NAME}
            </p>
        </div>
    );
};

export default withData(CardHasTitle);