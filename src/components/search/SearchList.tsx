import React from 'react';
import SearchItem from "@/components/search/SearchItem";

const SearchList = ({search, isOpen}: { search: search, isOpen: boolean }) => {
    return (
        <div
            className={`absolute top-[36px] bg-[#121212] bg-opacity-60 backdrop-blur w-full ${isOpen ? "fadeIn" : "fadeOut"} `}>
            <div className="w-full py-2 px-4">
                <p className="text-primary-foreground text-base">{search?.title}</p>
            </div>
            <div className="h-[600px] custom-scroll hover:overflow-y-scroll overflow-hidden overscroll-contain">
                <div className="flex flex-col gap-4 p-4">
                    {
                        search?.data.map((item, index) => (<SearchItem key={index} item={item}/>))
                    }
                </div>
            </div>
        </div>
    );
};

export default SearchList;