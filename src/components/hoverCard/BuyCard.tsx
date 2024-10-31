import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const BuyCard = () => {
  const items = [
    {
      icon: "/images/noads.svg",
      title: "Trải nghiệm không gián đoạn",
    },
    {
      icon: "/images/galaxy-play.svg",
      title: "Kho nội dung Galaxy Play độc quyền",
    },
    {
      icon: "/images/k+.svg",
      title: "Sở hữu chùm 4 kênh K+ thể thao",
    },
    {
      icon: "/images/hbo-go.svg",
      title: "Tận hưởng phim bom tấn cùng HBO GO",
    },
  ];
  return (
    <div className="p-4 flex flex-col gap-5 rounded-md bg-background text-foreground">
      <p className="text-[#fabd80] text-lg font-bold text-center">
        Nâng cấp gói cước để tận hưởng những ưu đãi độc quyền
      </p>
      <hr className="border border-foreground" />
      <div className="flex flex-col gap-4 mt-3">
        {items.map((item) => (
          <div className="flex items-center text-sm gap-2">
            <Image src={item.icon} alt="" width={24} height={24} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div>
        <Button className="bg-[#fabd80] w-full text-black mt-4">
          Nâng cấp ngay
        </Button>
      </div>
    </div>
  );
};

export default BuyCard;
