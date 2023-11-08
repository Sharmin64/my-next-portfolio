import Image from "next/image";
import React from "react";

const TopLeftImg = () => {
  return (
    <div className="absolute">
      <Image src="/top-left-img.png" width={400} height={400} alt="" />
    </div>
  );
};

export default TopLeftImg;
