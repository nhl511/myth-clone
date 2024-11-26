import React, {useEffect} from 'react';
import Image from "next/image";
import moment from "moment";
import {Button} from "@/components/ui/button";
import {BellRing} from "lucide-react";
import {withData} from "@/hoc";
import {upCommingItem} from "@/types";

const Card = ({item, sendData}: { item: upCommingItem, sendData: any }) => {
    const date = moment(item.START_TIME).format("DD/MM");
    const time24Hour = moment(item.START_TIME).format("HH:mm");

    useEffect(() => {
        if (item) sendData(item);
    }, [item]);

    return (
        <div>
            <div className="flex flex-col items-center">
                <div className="relative bg-background px-4 flex flex-col items-center">
                    <p className="text-base font-black text-primary-foreground">{date}</p>
                    <p className="text-sm text-gray-300">{time24Hour}</p>
                </div>
            </div>
            <div className="w-full h-[280px] relative mt-4">
                <Image src={item.CONTENT_VER_POSTER} alt="" fill
                       className="rounded-md" objectFit="cover"/>
            </div>
            <div className="w-full relative mt-4">
                <Button variant="secondary" className="w-full bg-[var(--gray)] text-primary">
                    <BellRing/>
                    Đặt trước
                </Button>
            </div>

        </div>
    )

};

export default withData(Card);