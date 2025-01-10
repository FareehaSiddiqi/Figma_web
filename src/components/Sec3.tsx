import React from "react";
import Image from "next/image";

const Sec3 = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-full h-screen bg-[#043873] ">
        <div className="relative flex flex-col md:flex-row justify-evenly items-center w-[95%] ">
          <div className="relative flex md:flex-none flex-col justify-center items-center md:items-start text-center md:text-left">
            <h1 className="relative font-bold md:text-[64px] text-[36px] z-20 ">
              Discover the world of{" "}
              <span className="relative z-30 text-wrap">
                "Whispers in the Shadows"
              </span>
              <Image
                src="/whis.jpg"
                alt=""
                width={250}
                height={250}
                className="absolute left-[50%]   z-30"
              />
            </h1>
            <p className="text-[18px] font-normal md:w-[600px] mt-3">
              Immerse yourself in the dramatic world of hidden truths and
              mysterious characters. Feel the tension, the suspense, and the
              unexpected twists that will leave you breathless.
            </p>
            <button className="flex gap-2 items-center font-medium px-[40px] py-[20px] rounded-lg bg-[#f94f74] text-white mt-12 md:mt-10">
              Dive into the drama
              <Image alt="vector" src="/VectorR.svg" width={7} height={7} />
            </button>
          </div>
          <div className="bg-[#C4DEFD] md:w-[520px] md:h-[350px] w-[350px] h-[200px] mt-20 md:mt-0"></div>
        </div>
      </div>
    </div>
  );
};

export default Sec3;
