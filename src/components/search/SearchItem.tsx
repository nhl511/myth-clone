import React from 'react';
import Image from "next/image";
import {convertSecToMin} from "@/lib/utils";
import LockedLevel from "@/components/lockedLevel/LockedLevel";

const SearchItem = ({item}: { item: searchDataItem }) => {
    return (
        <div className="w-full h-[100px] flex gap-4">
            <div className="w-[30%] h-full overflow-hidden relative">
                <Image src={item.CONTENT_HOR_POSTER} alt="" fill objectFit="cover" className="rounded-md"/>
            </div>
            <div className="w-[70%]">
                <p className="text-primary-foreground text-lg font-bold mb-2">{item.CONTENT_NAME}</p>
                <div className="flex gap-2 text-primary-foreground text-xs">
                    <p>{item.CONTENT_PUBLISH_YEAR}</p>
                    |
                    <p>{item.CONTENT_COUNTRY}</p>
                    |
                    <p> {convertSecToMin(Number(item.CONTENT_DURATION))}p</p>
                    |
                    <LockedLevel lockedLevel={item.LOCKED_LEVEL}/>
                </div>
            </div>
        </div>
    );
};

export default SearchItem;