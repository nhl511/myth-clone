"use client";
import React from 'react';
import {useSearchParams} from "next/navigation";
import {suggestionItem} from "@/types";
import useSWR from "swr";
import {search} from "@/services/apis/search.service";
import Link from "next/link";
import Image from "next/image";

const Keyword = () => {
    const searchParams = useSearchParams();
    const queryParam = searchParams.get("k");
    const {data, isLoading} = useSWR(`search?keyword=${queryParam}`, () => search(queryParam))
    if (isLoading) return <p>loading</p>
    return (
        <div className="flex gap-5">
            {
                data?.search_result.length > 0 ? (
                    <>
                        <p className="text-nowrap">{data.suggestions.title}:</p>
                        <div className="text-primary-foreground text-base">
                            <div className="flex flex-wrap">
                                {data?.suggestions?.data?.map((item: suggestionItem, i: number) => (
                                    <div key={i} className="flex">
                                        <Link href={`/tim-kiem?k=${(item.term)}`}>
                                            <p className="cursor-pointer hover:underline">{item.term}</p>
                                        </Link>
                                        <p className={`${i + 1 === data.suggestions.data.length && "hidden"}`}>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;</p>
                                    </div>

                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex flex-col items-center gap-5">
                        <div className="w-[200px]">
                            <Image src="/images/search-not-found.png" alt="" layout="responsive" width={100}
                                   height={50}/>

                        </div>
                        <p className="text-lg">Hiện tại chúng tôi chưa cung cấp nội dung này</p>
                    </div>
                )
            }

        </div>
    );
};

export default Keyword;