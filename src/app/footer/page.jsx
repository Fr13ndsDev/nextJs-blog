import React from "react";

const page = () => {
  return (
    <div className=" bg-slate-100 py-[64px]">
      <div className=" flex flex-col items-center">
        <div className="w-[1216px]">
          <div className="flex justify-between">
            <ul className="w-[289px] ">
              <h2 className="font-work font-semibold text-[18px] leading-[28px] mb-[12px]">
                About
              </h2>
              <p className=" text-[16px] font-normal leading-[24px] font-work text-stone-500 mb-[24px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </p>
              <p className=" text-base font-normal mb-1">
                <span className="font-semibold">Email:</span>{" "}
                info@jstemplate.net
              </p>
              <p className=" text-base font-normal">
                <span className="font-semibold">Phone:</span> 880 123 456 789
              </p>
            </ul>
            <ul>
              <h2 className="font-work font-semibold text-[18px] leading-[28px] mb-[24px]">
                Quick Link
              </h2>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Home
              </li>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                About
              </li>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Blog
              </li>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Archived
              </li>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Author
              </li>
              <li className="text-base font-normal font-work text-stone-700 cursor-pointer">
                Contact
              </li>
            </ul>
            <ul>
              <h2 className="font-work font-semibold text-[18px] leading-[28px] mb-[24px]">
                Quick Link
              </h2>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Lifestyle
              </li>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Technology
              </li>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Travel
              </li>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Business
              </li>
              <li className="text-base font-normal font-work text-stone-700 mb-2 cursor-pointer">
                Economy
              </li>
              <li className="text-base font-normal font-work text-stone-700 cursor-pointer">
                Sports
              </li>
            </ul>
            <div className=" rounded-xl bg-white p-[32px] ">
              <h2 className="text-[20px] font-work leading-[24px] text-center font-semibold mb-2">
                Weekly Newsletter
              </h2>
              <p className=" text-base text-work text-stone-500 mb-[30px]">
                Get blog articles and offers via email
              </p>
              <div className="rounded-md py-3 px-4 border  mb-4">
                <input
                  className="outline-none"
                  type="text"
                  placeholder="Your Email"
                />
              </div>
              <button className=" font-work rounded-md bg-blue-600 py-3 px-[20] text-center w-[280px] text-white font-medium">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
