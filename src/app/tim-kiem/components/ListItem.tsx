import React from 'react';
import {searchItem} from "@/types";
import Image from "next/image";

const ListItem = ({item}: { item: searchItem }) => {
    return (
        <div className="w-full">
            <Image src={item.CONTENT_HOR_POSTER} alt="" layout="responsive" width={100} height={50}/>
        </div>
    );
};

export default ListItem;