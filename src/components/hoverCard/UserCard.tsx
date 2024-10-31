import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const UserCard = () => {
  const items = [
    {
      icon: "/images/hd.svg",
      title: "Hàng nghìn bộ phim bom tấn độc quyền chất lượng cao",
    },
    { icon: "/images/film.svg", title: "Kho phim chiếu rạp cập nhật liên tục" },
    { icon: "/images/film2.svg", title: "Nội dung phim bộ, phim lẻ đặc sắc" },
    { icon: "/images/ball.svg", title: "Những trận cầu đỉnh cao hấp dẫn" },
  ];

  return (
    <div className="p-3 bg-background text-foreground flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <div>
          <CircleUserRound size={36} className="text-primary-foreground" />
        </div>
        <div>
          <p className="text-xl font-bold text-white">
            Đăng nhập để có trải nghiệm tốt hơn
          </p>
          <p>Tận hưởng hàng nghìn nội dung đỉnh cao bom tấn</p>
        </div>
      </div>
      <hr className="border border-[var(--gray-color)]" />
      <div className="flex flex-col gap-4">
        {items.map((item) => (
          <div className="flex items-center gap-4">
            <Image src={item.icon} alt="" width={24} height={24} />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <div>
        <Button className="bg-primary w-full font-bold hover:bg-primary-hover">
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default UserCard;
