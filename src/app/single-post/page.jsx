import React from "react";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
import Image from "next/image";
import icon from "../../assets/icon.svg";
import bgImg from "../../assets/Image1.jpeg";
import bgImg2 from "../../assets/Image2.jpeg";

const page = () => {
  return (
    <>
      <Navbar />

      <div className="flex flex-col items-center">
        <div className=" w-[800px] text-start ">
          <p className=" w-[110px] font-work text-white rounded-md py-2 px-[12px] bg-blue-700">
            Technology
          </p>
          <h2 className="font-work mt-[16px] text-[36px] font-semibold">
            The Impact of Technology on the Workplace: How Technology is
            Changing
          </h2>
          <div className=" mt-[20px] flex gap-[24px] text-slate-500 font-work">
            <div className=" flex gap-[8px] items-center">
              <Image src={icon} alt="Person logo" />
              <p>Tracey Wilson</p>
            </div>
            <p>August 20, 2022</p>
          </div>
          <Image className="py-[32px] " src={bgImg} alt="" />
          <p className=" mb-[37px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
            One of the most rewarding aspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
          <div>
            <h2 className="font-work text-[24px] font-semibold leading-[28px] mb-[16px]">
              Research Your Destination
            </h2>
            <p className=" mb-[37px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              Before embarking on your journey, take the time to research your
              destination. This includes understanding the local culture,
              customs, and laws, as well as identifying top attractions,
              restaurants, and accommodations. Doing so will help you navigate
              your destination with confidence and avoid any cultural faux pas.
            </p>
            <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. In
              hendrerit gravida rutrum quisque non tellus orci ac auctor. Mi
              ipsum faucibus vitae aliquet nec ullamcorper sit amet. Aenean
              euismod elementum nisi quis eleifend quam adipiscing vitae.
              Viverra adipiscing at in tellus.
            </p>
          </div>
          <div>
            <h2 className="font-work text-[24px] font-semibold leading-[28px] mb-[16px]">
              Plan Your Itinerary
            </h2>
            <p className=" mb-[37px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              While it's essential to leave room for spontaneity and unexpected
              adventures, having a rough itinerary can help you make the most of
              your time and budget. Identify the must-see sights and experiences
              and prioritize them according to your interests and preferences.
              This will help you avoid overscheduling and ensure that you have
              time to relax and enjoy your journey.
            </p>
            <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              Vitae sapien pellentesque habitant morbi tristique. Luctus
              venenatis lectus magna fringilla. Nec ullamcorper sit amet risus
              nullam eget felis. Tincidunt arcu non sodales neque sodales ut
              etiam sit amet.
            </p>
          </div>
          <p className=" font-text rounded-[12px] px-[32px] py-[32px] mb-[32px] bg-slate-200 italic text-[24px] font-normal leading-[32px]">
            “ Traveling can expose you to new environments and potential health
            risks, so it's crucial to take precautions to stay safe and healthy.
            ”
          </p>
          <Image src={bgImg2} alt="" />
          <div className=" text-slate-500 font-work my-[32px] w-full rounded-[12px] py-[20px] bg-slate-200 flex flex-col items-center">
            <p className=" text-[14px] font-normal leading-[20px]">
              Advertisement
            </p>
            <h2 className="text-[20px] py-1 font-semibold leading-[24px]">
              You can place ads
            </h2>
            <span className="text-[18px] font-normal leading-[26px]">
              750x100
            </span>
          </div>
          <div>
            <h2 className="font-work text-[24px] font-semibold leading-[28px] mb-[16px]">
              Pack Lightly and Smartly
            </h2>
            <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              Packing can be a daunting task, but with some careful planning and
              smart choices, you can pack light and efficiently. Start by making
              a packing list and sticking to it, focusing on versatile and
              comfortable clothing that can be mixed and matched. Invest in
              quality luggage and packing organizers to maximize space and
              minimize wrinkles.
            </p>
          </div>
          <div>
            <h2 className="font-work text-[24px] font-semibold leading-[28px] mb-[16px]">
              Stay Safe and Healthy
            </h2>
            <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              Traveling can expose you to new environments and potential health
              risks, so it's crucial to take precautions to stay safe and
              healthy. This includes researching any required vaccinations or
              medications, staying hydrated, washing your hands frequently, and
              using sunscreen and insect repellent. It's also essential to keep
              your valuables safe and secure and to be aware of your
              surroundings at all times.
            </p>
          </div>
          <div>
            <h2 className="font-work text-[24px] font-semibold leading-[28px] mb-[16px]">
              Immerse Yourself in the Local Culture
            </h2>
            <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              One of the most rewarding aspects of traveling is immersing
              yourself in the local culture and customs. This includes trying
              local cuisine, attending cultural events and festivals, and
              interacting with locals. Learning a few phrases in the local
              language can also go a long way in making connections and showing
              respect.
            </p>
          </div>
          <div>
            <h2 className="font-work text-[24px] font-semibold leading-[28px] mb-[16px]">
              Capture Memories
            </h2>
            <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              Finally, don't forget to capture memories of your journey. Whether
              it's through photographs, journaling, or souvenirs, preserving the
              moments and experiences of your travels can bring joy and
              nostalgia for years to come. However, it's also essential to be
              present in the moment and not let technology distract you from the
              beauty of your surroundings.
            </p>
          </div>
          <div>
            <h2 className="font-work text-[24px] font-semibold leading-[28px] mb-[16px]">
              Conclusion:
            </h2>
            <p className=" mb-[32px] font-text tracking-wider font-medium leading-[32px] text-[20px]">
              Traveling is an art form that requires a blend of planning,
              preparation, and spontaneity. By following these tips and tricks,
              you can make the most of your journey and create memories that
              last a lifetime. So pack your bags, embrace the adventure, and
              enjoy the ride.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default page;
