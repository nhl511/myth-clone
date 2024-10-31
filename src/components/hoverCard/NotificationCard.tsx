import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const NotificationCard = () => {
  return (
    <div className="bg-[#121212] p-4 flex flex-col gap-4 bg-opacity-70 backdrop-blur-sm">
      <div className="flex justify-center">
        <Image
          src="https://webappstage.mytv.vn/img/notify-empty.png"
          alt=""
          width={74}
          height={74}
        />
      </div>
      <div className="flex flex-col items-center text-primary-foreground gap-1">
        <p>Bạn không có thông báo nào.</p>
        <p>Vui lòng đăng nhập để nhận thông báo!</p>
      </div>
      <div>
        <Button className="w-full bg-primary font-bold hover:bg-primary-hover">
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default NotificationCard;
