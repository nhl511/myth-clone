"use client"
import React from 'react';
import useSWR from "swr";
import {search} from "@/services/apis/search.service";
import {useSearchParams} from "next/navigation";
import {searchItem, suggestionItem} from "@/types";
import ListItem from "@/app/tim-kiem/components/ListItem";

const List = () => {
    const searchParams = useSearchParams();
    const queryParam = searchParams.get("k");
    const {data, isLoading} = useSWR(`search?keyword=${queryParam}`, () => search(queryParam))
    if (isLoading) return <p>loading</p>
    return (
        <div className="grid grid-cols-10 mt-8 gap-4">
            {
                data.search_result.length > 0 &&
                data.search_result.map((item: searchItem, i: number) => (
                    <div key={i} className="col-span-2">
                        <ListItem item={item}/>
                    </div>
                ))
            }
        </div>
    );
};

export default List;