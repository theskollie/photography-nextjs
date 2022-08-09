import React from "react";
import Image from "next/image";
import { BsInstagram } from "react-icons/bs";

const InstagramImg = ({ image }: { image: string }) => {
  return (
    <div className="relative">
      <Image
        src={image}
        width="1400"
        height="1400"
        objectFit="cover"
        alt="instaImage"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full flex items-center justify-center hover:bg-black/70 group">
        <BsInstagram
          size={40}
          className="text-white hidden group-hover:block"
        />
      </div>
    </div>
  );
};

export default InstagramImg;
