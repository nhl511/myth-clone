import Image from "next/image";
import React from "react";

const CardHasTitle = ({ homeDataItem }: { homeDataItem: homeDataItem }) => {
  return (
    <div className="">
      <Image
        src={homeDataItem.CONTENT_HOR_POSTER}
        alt=""
        layout="responsive"
        width={100}
        height={50}
        className="rounded-md"
      />
      <p className="text-white text-lg mt-2 truncate">
        {homeDataItem.CONTENT_NAME}
      </p>
    </div>
  );
};

export default CardHasTitle;
