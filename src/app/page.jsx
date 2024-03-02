import React from "react";
import { cardData } from "./data";
import Image from "next/image";
import Navbar from "./navbar/page";
import homeImg from "../assets/homeImg.png";
import person2 from "../assets/img02.png";
import Footer from "./footer/page";
import Link from "next/link";
import { getAllUser } from "@/actions/getAllUsers";

const page = async () => {
  const response = await getAllUser();
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center">
        <div className=" w-[1120px] text-start">
          <div className="flex items-center justify-center mt-[24px] relative w-full">
            <Image src={homeImg} alt="" />
            <div
              className=" rounded-[12px] p-[40px] w-[538px] h-[304px] absolute bottom-[-40px] left-[65px] right-0"
              style={{
                background: "rgb(255, 255, 255)",
                boxShadow: "0px 12px 24px -6px rgba(24, 26, 42, 0.12)",
                border: " 1px solid rgb(232, 232, 234)",
              }}
            >
              <div className=" absolute">
                <button
                  className="w-[100px] h-[30px] rounded-[6px] text-white font-[500]"
                  style={{ background: "rgb(75, 107, 251)" }}
                >
                  Technology
                </button>
                <h2
                  className=" mt-[16px] w-[350px] text-[24px] font-[700] text-gray-700 dark:text-gray-400 mb-[30px]"
                  style={{ color: "rgb(24, 26, 42)", lineHeight: "28px" }}
                >
                  The Impact of Technology on the Workplace: How Technology is
                  Changing
                </h2>
                <div className="flex items-center">
                  <div className="flex items-center gap-[12px]">
                    <Image src={person2} alt="" />
                    <p style={{ color: "rgb(151, 152, 159)" }}>
                      Jason Francisco
                    </p>
                  </div>
                  <p
                    className="ms-[20px]"
                    style={{ color: "rgb(151, 152, 159)" }}
                  >
                    August 20, 2022
                  </p>
                </div>
              </div>
            </div>
          </div>
          <p className="font-work font-bold text-[24px] leading-[28px] mb-[32px] mt-[80px]">
            Latest Post
          </p>
          <div className="grid grid-cols-3 gap-[20px] mb-[100px]">
            {response &&
              response?.map((item) => (
                <Link
                  href={`/card-details/${item._id}`}
                  key={item._id}
                  className="p-4  flex flex-col justify-between border-solid border-2 border-inherit w-[360px] rounded-[12px]"
                >
                  <div>
                  <Image
                    className=" rounded-md h-[240px] object-cover"
                    width={360}
                    height={240}
                    src={item.img}
                    alt=""
                  />
                  <p className="pt-7 leading-[20px] font-medium font-work text-blue-600">
                    {item.type}
                  </p>
                  <h2 className="font-work mt-4 font-semibold text-[24px] leading-[28px] mb-[20px]">
                    {item.title}
                  </h2>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex gap-2 items-center">
                      <Image width={40} height={40} className="rounded-full w-10 h-10 object-cover" src={item.avatar} alt="" />
                      <p className="font-work text-slate-500 font-medium">
                        {item.fName}
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
