import React from "react";
import Navbar from "../../navbar/page";
import Footer from "../../footer/page";
import Image from "next/image";
import icon from "../../../assets/icon.svg";
import bgImg from "../../../assets/Image1.jpeg";
import { getSinglePost } from "@/actions/getAllUsers";

const page = async ({ params }) => {
  const { id } = params;
  const post = await getSinglePost(id);
  console.log(post);
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center">
        <div className=" w-[800px] text-start ">
          <p className=" w-[110px] font-work text-white rounded-md py-2 px-[12px] bg-blue-700">
            {post.type}
          </p>
          <h2 className="font-work mt-[16px] text-[36px] font-semibold">
            {post.title}
          </h2>
          <div className=" mt-[20px] flex items-center gap-[24px] text-slate-500 font-work">
            <div className=" flex gap-[8px] items-center">
              <Image
                width={32}
                height={32}
                className=" h-[32px] rounded-full"
                src={post.avatar}
                alt="Person logo"
              />
              <p>{post.fName}</p>
            </div>
            <p>{post.date}</p>
          </div>
          <Image
            className="py-[32px] w-[400px] h-[400px] object-cover"
            width={300}
            height={200}
            src={post.img}
            alt=""
          />
          <p className=" mb-[37px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you dont plan and prepare adequately. In this blog
            article, well explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
