import React from 'react';
import Image from "next/image";

const Card = ({item, selectedItem}: {
    item: mytvRecommendedItem,
    selectedItem: mytvRecommendedItem | null,
}) => {
    return (
        <div className="w-full h-full relative rounded-md">
            <Image
                src={item.CONTENT_VER_POSTER}
                alt=""
                width={0}
                height={0}
                sizes="100vw"
                style={{width: '100%', height: '100%'}}

            />
            <div
                className={`absolute w-full h-full bg-black/45 top-0 ${selectedItem?.CONTENT_ID === item.CONTENT_ID ? "hidden" : "visible"}`}></div>
        </div>
    );
};

export default Card;