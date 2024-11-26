import React from 'react';
import useSWR from "swr";
import {getUpcomming} from "@/services/apis/content.service";
import Card from "@/app/components/cardWithTimeline/Card";
import MyHoverCardTrigger from "@/components/myHoverCardTrigger/MyHoverCardTrigger";
import {hoverCardTypes, upCommingItem} from "@/types";

const CardsWithTimelines = () => {


    const {data} = useSWR(`getUpcomming`, () => getUpcomming({typeId: 79, cateId: 0}))
    return (
        <div className="relative h-full">
            <hr className="absolute top-4 w-full border border-primary"/>
            <div className="grid grid-cols-12 space-x-4">
                {
                    data?.map((item: upCommingItem, i: number) => (
                        <div key={i} className="col-span-2">
                            <MyHoverCardTrigger type={hoverCardTypes.booking}>
                                <Card item={item}/>
                            </MyHoverCardTrigger>
                        </div>
                    ))
                }
            </div>

        </div>

    );
};

export default CardsWithTimelines;