import React from "react";
import user1 from "../../public/images/testimonials/user-1.jpg";
import user2 from "../../public/images/testimonials/user-2.jpg";
import user3 from "../../public/images/testimonials/user-3.jpg";
import Image from "next/image";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Button } from "antd";
import { useRouter } from "next/router";

export default function Testimonial() {
  const router = useRouter();

  const testimonialData = [
    {
      profile: user1,
      description:
        "I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I ultricies enim at malesuada nibh diam on tortor neaded to throw curve balls.",
      name: "Dennis Williams - ",
      text: "Charleston",
    },
    {
      profile: user2,
      description:
        "Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of quis consectetur nunc sit amet semper justo.nature and its beauty.",
      name: "Laurie Bell - ",
      text: "Worcester",
    },
    {
      profile: user3,
      description:
        "I've learned that people will forget what you said, people will forget what you did,but people will never forget how donec in efficitur lectus, nec lobortis metus you made them feel.",
      name: "Howard Kelley - ",
      text: "Lynchburg",
    },
  ];

  return (
    <div>
      <div className="bg-[#fafbfe]" id="about">
        <div className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  py-[5rem]">
          <div>
            <div className="text-center text-3xl font-semibold">
              WHAT THEY&apos;VE SAID
            </div>
            <div className="mt-[25px] border border-[#1bbc9d] w-[60px]  flex justify-center items-center mx-auto"></div>
            <div className="text-[#858d96] mt-[30px] text-center">
              The Big Oxmox advised her not to do so, because there were
              thousands of bad Commas, wild Question
              <br /> Marks and devious Semikoli.
            </div>
          </div>

          <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5 mt-[5rem]">
            {testimonialData?.map((item: any, index: number) => {
              return (
                <div
                  className="shadow-[0_1px_6px_-1px_rgb(0,0,0,0.1)] p-[16px]"
                  key={index}
                >
                  <div className="mr-0 flex items-end justify-end">
                    <BiSolidQuoteLeft
                      size="3rem"
                      style={{ color: "#f4f4f4" }}
                    />
                  </div>
                  <div className="mt-[-35px]">
                    <div className="flex items-center justify-center">
                      <Image
                        src={item?.profile}
                        alt=""
                        className="w-[70px]  rounded-full border p-1 "
                      />
                    </div>

                    <div className="flex justify-center items-center mt-5">
                      <div className="font-semibold">{item?.name} </div>
                      <div className="text-[#858d96]"> {item?.text}</div>
                    </div>
                    <div className="text-center px-[25px] text-[#858d96] mt-5 italic">
                      {item?.description}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-gradient-to-r from-[#363795]  to-[#005C97] h-full opacity-90">
          <div className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  py-[5rem]">
            <div className="">
              <div className="text-center text-white text-3xl font-semibold">
                Quality-Driven Services for Safety and Excellence
              </div>
              <div className="mt-[25px] border border-[#1bbc9d] w-[60px]  flex justify-center items-center mx-auto"></div>
              <div className="text-center text-white mt-[20px]">
                We are an Omani National Company established with the intention
                to provide superior services.We leverage skilled professionals,
                premium assets,
                <br /> and state-of-the-art technology to attain
                shared objectives
              </div>
              <div className="flex justify-center items-center mt-[50px]">
                <Button
                  onClick={() => router.push("/aboutUs")}
                  className="bg-white hover:bg-white flex justify-center items-center gap-2 hover:text-black transition  hover:-translate-y-1"
                  size={"large"}
                >
                  About Us
                  <AiOutlineArrowRight />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
