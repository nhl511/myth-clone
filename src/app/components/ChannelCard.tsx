import Image from "next/image";
import React from "react";

const ChannelCard = ({ homeDataItem }: { homeDataItem: homeDataItem }) => {
  return (
    <div className="bg-gray-800 rounded-md">
      <Image
        src={homeDataItem.CONTENT_HOR_POSTER}
        alt=""
        layout="responsive"
        width={100}
        height={50}
      />
    </div>
  );
};

export default ChannelCard;
