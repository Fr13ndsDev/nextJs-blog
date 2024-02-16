import Image from "next/image";
import React from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import { cardData } from "../data";
import homeImg from "../../assets/homeImg.png";
import person2 from "../../assets/img02.png";
import Link from "next/link";
const page = () => {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className=" w-[1120px] text-start">
          <div className="flex items-center justify-center mt-[40px] mb-[64px]">
            <div>
              <h1
                className="text-[30px] font-[600]"
                style={{
                  color: "rgb(24, 26, 42)",
                }}
              >
                Page Title
              </h1>
              <p className="font-[400]" style={{ color: "rgb(59, 60, 74)" }}>
                Home |{" "}
                <span
                  className="ms-[6px]"
                  style={{ color: "rgb(105, 106, 117)" }}
                >
                  Link One
                </span>
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center relative w-full mb-12">
              <Image src={homeImg} alt="" />
              <div className=" bottom-12 left-8 absolute font-work ">
                <button
                  className="w-[100px] h-[30px] rounded-[6px] text-white font-[500]"
                  style={{ background: "rgb(75, 107, 251)" }}
                >
                  Technology
                </button>
                <h2
                  className=" mt-[16px] w-[480px] text-[24px] font-[700] text-gray-700 dark:text-gray-400 mb-[30px]"
                  style={{ color: "#FFF", lineHeight: "28px" }}
                >
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </h2>
                <div className="flex items-center">
                  <div className="flex items-center gap-[12px]">
                    <Image src={person2} alt="" />
                    <p className=" text-white">Tracey Wilson</p>
                  </div>
                  <p className="text-white">August 20, 2022</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
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
