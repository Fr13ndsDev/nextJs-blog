import React from "react";
import { cardData } from "../data";
import Image from "next/image";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import broImg from "../../assets/broImg.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className=" w-[1120px] text-start">
          <div className=" mt-6 p-12 rounded-xl bg-slate-100 mb-12">
            <div className=" flex items-center justify-center gap-4 mb-[24px]">
              <Image src={broImg} alt="" />
              <div>
                <h2 className="font-work font-medium leading-[28px] text-[20px]">
                  Jonathan Doe
                </h2>
                <p className="font-work text-stone-500">
                  Collaborator & Editor
                </p>
              </div>
            </div>
            <p className="font-work w-[668px] mx-auto text-center text-[18px] leading-[26px] text-stone-500">
              Meet Jonathan Doe, a passionate writer and blogger with a love for
              technology and travel. Jonathan holds a degree in Computer Science
              and has spent years working in the tech industry, gaining a deep
              understanding of the impact technology has on our lives.
            </p>
            <div className="flex justify-center gap-2 mt-[24px]">
              <div className="p-2 w-[32px] h-[32px] rounded-[6px] bg-slate-500 cursor-pointer"></div>
              <div className="p-2 w-[32px] h-[32px] rounded-[6px] bg-slate-500 cursor-pointer"></div>
              <div className="p-2 w-[32px] h-[32px] rounded-[6px] bg-slate-500 cursor-pointer"></div>
              <div className="p-2 w-[32px] h-[32px] rounded-[6px] bg-slate-500 cursor-pointer"></div>
            </div>
          </div>
          <p className="font-work font-bold text-[24px] leading-[28px] mb-[32px]">
            Latest Post
          </p>
          <div className="grid grid-cols-3 gap-[20px] mb-[100px]">
            {cardData.map((item) => (
              <Link
                href={`/card-details/${item.id}`}
                key={item.id}
                className="p-4 border-solid border-2 border-inherit w-[360px] rounded-[12px]"
              >
                <Image src={item.image} alt="" />
                <p className="pt-7 leading-[20px] font-medium font-work text-blue-600">
                  {item.type}
                </p>
                <h2 className="font-work mt-4 font-semibold text-[24px] leading-[28px] mb-[20px]">
                  {item.title}
                </h2>
                <div className="flex items-center gap-[20px]">
                  <div className="flex gap-2 items-center">
                    <Image src={item.ava} alt="" />
                    <p className="font-work text-slate-500 font-medium">
                      {item.name}
                    </p>
                  </div>
                  <p className="font-work text-slate-500 ">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
