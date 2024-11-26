import React from 'react';
import Image from "next/image";
import {vnd} from "@/lib/utils";

const BuyDialogItem = ({item}: { item: productItem }) => {
    return (
        <div className="relative">
            <Image src={item.BANNER} alt="" layout="responsive" width={100} height={50}/>
            <div
                className="absolute bottom-[-18px] right-0 text-lg font-bold py-1 px-14 bg-[#fcd4a1] text-[#865118] rounded-md">
                Từ {vnd(item.PRICE)}/tháng
            </div>
        </div>
    );
};

export default BuyDialogItem;