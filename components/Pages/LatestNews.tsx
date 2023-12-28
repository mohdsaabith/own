import React from "react";
import img1 from "../../public/images/blog/img-1.jpg";
import img2 from "../../public/images/blog/img-2.jpg";
import img3 from "../../public/images/blog/img-3.jpg";
import Image from "next/image";

export default function LatestNews() {
  const blogData = [
    {
      image: img1,
      text: "UI & UX Design",
      title: "Doing a cross country road trip",
      subtext:
        "She packed her seven versalia, put her initial into the belt and made herself on the way..",
    },
    {
      image: img2,
      text: "Digital Marketing",
      title: "New exhibition at our Museum",
      subtext:
        "Pityful a rethoric question ran over her cheek, then she continued her way.",
    },
    {
      image: img3,
      text: "Travelling",
      title: "Why are so many people..",
      subtext:
        "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
  ];

  return (
    <div className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  py-[5rem]" id="blog">
      <div>
        <div className="text-center text-3xl font-semibold">LATEST NEWS</div>
        <div className="mt-[25px] border border-[#1bbc9d] w-[60px]  flex justify-center items-center mx-auto"></div>
        <div className="text-[#858d96] mt-[30px] text-center">
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean class
          <br /> at a euismod mus luctus quam.
        </div>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-7 mt-[4rem]">
        {blogData?.map((item: any, index: number) => {
          return (
            <div className="transition  hover:-translate-y-4" key={index}>
              <Image src={item?.image} className="" alt="" />
              <div className="mt-[20px] font-semibold text-[#858d96] ">
                {item?.text}
              </div>
              <div className="mt-[10px]">
                <a href="" className="font-semibold">
                  {item?.title}
                </a>
              </div>
              <div className="mt-[5px] font-medium text-[#858d96]">
                {item?.subtext}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
