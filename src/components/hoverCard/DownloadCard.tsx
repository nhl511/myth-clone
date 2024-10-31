import Image from "next/image";
import React from "react";

const DownloadCard = () => {
  return (
    <div className="bg-background text-foreground p-4 flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <Image src="/images/mytv-small.svg" alt="" width={48} height={48} />
        <div className="flex flex-col">
          <h4 className="text-white text-xl font-bold">MyTV For SmartPhone</h4>
          <p className="">Top Giải trí số 1 Việt Nam</p>
        </div>
      </div>
      <div className="flex border-t border-b border-foreground">
        <div className="flex-1 flex flex-col gap-1 border-r border-foreground p-2">
          <p className="text-primary-foreground text-center">500N</p>
          <p className="text-center text-xs">Lượt tải xuống</p>
        </div>
        <div className="flex-1 flex flex-col gap-1 border-r border-foreground p-2">
          <p className="text-primary-foreground text-center">170+</p>
          <p className="text-center text-xs">Kênh truyền hình</p>
        </div>
        <div className="flex-1 flex flex-col gap-1 p-2">
          <p className="text-primary-foreground text-center">4K, HD</p>
          <p className="text-center text-xs">Chất lượng</p>
        </div>
      </div>
      <div className="flex justify-center">
        <Image src="/images/qr-download.svg" alt="" width={200} height={200} />
      </div>
      <div className="flex justify-center items-center gap-2">
        <div>
          <Image src="/images/appstore.svg" alt="" width={155} height={40} />
        </div>
        <div>
          <Image src="/images/chplay.svg" alt="" width={155} height={40} />
        </div>
      </div>
      <div className="flex gap-1 mt-5">
        <p className="text-sm">Hoặc sao chép liên kết gửi đến điện thoại</p>
        <p className="text-primary text-sm">Sao chép</p>
      </div>
    </div>
  );
};

export default DownloadCard;
