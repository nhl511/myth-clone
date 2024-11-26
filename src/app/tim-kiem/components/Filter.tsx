import React from 'react';
import {Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {contentTypeItem, countryItem} from "@/types";

const Filter = ({countryData, contentTypeData}: { countryData: countryItem[], contentTypeData: contentTypeItem[] }) => {
    const yearNow = new Date().getFullYear();
    return (
        <div className="flex gap-4 mt-8">
            <Select>
                <SelectTrigger className="bg-[var(--select)] border-none">
                    <SelectValue placeholder="Quốc gia"/>
                </SelectTrigger>
                <SelectContent className="bg-[var(--select)] text-primary-foreground border-none">
                    <SelectGroup>
                        {
                            countryData.map((item: countryItem) => (
                                <SelectItem key={item.C_ID} value={item.C_ID.toString()}>{item.C_NAME_VN}</SelectItem>
                            ))
                        }

                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="bg-[var(--select)] border-none">
                    <SelectValue placeholder="Thể loại"/>
                </SelectTrigger>
                <SelectContent className="bg-[var(--select)] text-primary-foreground border-none">
                    <SelectGroup>
                        {
                            contentTypeData.map((item: contentTypeItem) => (
                                <SelectItem key={item.TYPE_ID}
                                            value={item.TYPE_ID.toString()}>{item.TYPE_NAME}</SelectItem>
                            ))
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="bg-[var(--select)] border-none">
                    <SelectValue placeholder="Năm sản xuất"/>
                </SelectTrigger>
                <SelectContent className="bg-[var(--select)] text-primary-foreground border-none">
                    <SelectGroup>
                        {
                            Array.from({length: yearNow - 2006 + 1}, (_, i) =>
                                <SelectItem key={i} value={i.toString()}>
                                    {2024 - i}
                                </SelectItem>
                            )
                        }
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="bg-[var(--select)] border-none">
                    <SelectValue placeholder="Sắp xếp"/>
                </SelectTrigger>
                <SelectContent className="bg-[var(--select)] text-primary-foreground border-none">
                    <SelectGroup>
                        <SelectItem value="apple">Mới nhất</SelectItem>
                        <SelectItem value="banana">Xem nhiều nhất</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className="bg-[var(--select)] border-none">
                    <SelectValue placeholder="Tình trạng"/>
                </SelectTrigger>
                <SelectContent className="bg-[var(--select)] text-primary-foreground border-none">
                    <SelectGroup>
                        <SelectItem value="apple">Ẩn</SelectItem>
                        <SelectItem value="banana">Hiện</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
};

export default Filter;