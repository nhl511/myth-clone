import Image from "next/image";
import React from "react";

const Top10Card = ({
  homeDataItem,
  index,
}: {
  homeDataItem: homeDataItem;
  index: number;
}) => {
  return (
    <div className="w-full h-full relative flex justify-end">
      <div className="w-[90%]">
        <Image
          src={homeDataItem.CONTENT_VER_POSTER}
          alt=""
          layout="responsive"
          width={100}
          height={50}
          className="rounded-md"
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[49%]">
        <Image
          src={`/images/${index}.png`}
          fill
          alt=""
          objectFit="contain"
          objectPosition="left"
        />
      </div>
    </div>
  );
};

export default Top10Card;
