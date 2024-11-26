import Image from "next/image";
import React from "react";
import {Button} from "../ui/button";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import LoginDialog from "@/components/loginDialog/LoginDialog";

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

                <DialogTrigger asChild>
                    <Button className="w-full bg-primary font-bold hover:bg-primary-hover">
                        Đăng nhập
                    </Button>
                </DialogTrigger>


            </div>
        </div>
    );
};

export default NotificationCard;
