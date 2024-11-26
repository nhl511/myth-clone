"use client"
import React from 'react';
import {CircleUserRound} from "lucide-react";
import {Button} from "@/components/ui/button";
import BuyDialogItem from "@/components/buyDialog/BuyDialogItem";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import LoginDialog from "@/components/loginDialog/LoginDialog";

const BuyDialog = ({product, setIsNestedDialogOpen, setIsDialogOpen}: {
    product: any,
    setIsNestedDialogOpen: any,
    setIsDialogOpen: any
}) => {
    const [selectedGroup, setSelectedGroup] = React.useState(1);

    return (

        <div className="">
            <div className="flex justify-between bg-[#fdefdd] rounded-t-3xl px-5 py-4">
                <div className="flex items-center gap-2 text-black">
                    <CircleUserRound size={40}/>
                    <div>
                        <p className="text-black font-bold text-base">Vui lòng đăng nhập để mua gói</p>
                        <p className="text-sm ">Tận hưởng kho nội dung khổng lồ hằng ngày</p>
                    </div>
                </div>
                <div>
                    <Button className="w-full bg-primary font-bold hover:bg-primary-hover"
                            onClick={() => {
                                setIsDialogOpen(false)
                                setIsNestedDialogOpen(true)

                            }}
                    >Đăng nhập</Button>
                </div>
            </div>
            <div className="flex bg-[#ffe7c9] text-[#865118] font-bold text-sm">
                {
                    product.map((item: product, index) => (
                        <div
                            className={`w-[250px] text-center py-4 ${selectedGroup === item.group_id && index === 0 ? "bg-white clip-custom-1" : selectedGroup === item.group_id && index === 1 ? "bg-white clip-custom-2" : ""}`}
                            onClick={() => setSelectedGroup(item.group_id)}>{item.group_name}</div>
                    ))
                }

            </div>
            <div className="bg-white rounded-b-3xl px-4 h-[65vh] flex flex-col gap-8">
                {
                    product.filter((item: product) => (item.group_id === selectedGroup)).map((item, index) => (
                        item.products.map((item) => (
                            <BuyDialogItem item={item}/>
                        ))
                    ))
                }
            </div>
        </div>
    );
};

export default BuyDialog;