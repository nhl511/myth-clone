import React from 'react';

import {getContentType, getCountry} from "@/services/apis/general.service";
import Keyword from "@/app/tim-kiem/components/Keyword";
import Filter from "@/app/tim-kiem/components/Filter";
import List from "@/app/tim-kiem/components/List";

const SearchPage = async () => {
    const countryData = await getCountry()
    const contentTypeData = await getContentType()
    return (
        <div className="mt-24 xl:container mx-auto">
            <Keyword/>
            <Filter countryData={countryData} contentTypeData={contentTypeData}/>
            <List/>
        </div>
    );
};
export default SearchPage;