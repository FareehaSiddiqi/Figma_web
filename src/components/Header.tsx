import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div>
      <div className="w-full md:h-[92px] h-[62px] flex justify-between items-center bg-red-400">
        <div className="ml-3">
          <Image
            alt="In the Realm of Stories Logo"
            src="/cata.jpg" // Make sure to update this with your logo file if needed
            width={100}
            height={100}
            className="md:w-[100px] md:h-[100px]"
          />
        </div>
        <div className="flex gap-5 items-center mr-3">
          <button className="md:px-7 hidden md:flex md:py-3 bg-[#a7841e] md:rounded-[8px] text-black">
            Read it
          </button>
          <button className="md:px-7 hidden md:flex md:py-3 bg-[#db285e] rounded-[8px] text-white  items-center gap-2">
            Buy It
            
          </button>
          
        </div>
      </div>
    </div>
  );
};

export default Header;
