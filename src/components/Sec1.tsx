import React from "react";
import Image from "next/image";

const Sec1 = () => {
  return (
    <div>
      <div className="w-full h-screen flex items-center justify-center bg-[#e0425d]">
        <div className="w-[100%] bg-[url(/curlly.png)] bg-no-repeat flex justify-center">
          <div className="w-[90%] flex flex-col md:flex-row items-center justify-between">
            <div className='flex md:flex-none flex-col justify-center items-center md:items-start text-center md:text-left'>
              <h1 className="md:text-[72px] text-[36px] mb-4 text-black font-bold justify-evenly">
                Welcome to <br /> In the World of Imagination
              </h1>
              <p className="text-black mb-7 text-[18px] w-[400px]">
                A world filled with captivating tales and unforgettable characters.
                Dive into a collection of stories that will ignite your imagination and take you on unforgettable journeys.
              </p>
              <button className="flex gap-2 items-center font-medium px-[40px] py-[20px] md:mt-0 mt-10 rounded-lg bg-[#f94f90] text-white">
                Start Reading
                <Image
                  alt="Arrow"
                  src="/mem.jpg"
                  width={7}
                  height={7}
                />
              </button>
            </div>
            <div className="md:w-[500px] md:h-[350px] w-[350px] h-[200px] mt-20 md:mt-0 bg-[#C4DEFD]">
              <Image
                src="/sooth.jp" // Update with the actual cover of your book
                alt="In the World of Imagination Cover"
                layout="fill"
                objectFit="cover"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sec1;
