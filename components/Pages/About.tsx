import React from "react";
import img1 from "../../public/images/OurClient/Foxdrill.png";
import img2 from "../../public/images/OurClient/KCA-Deutag-White.svg";
import img3 from "../../public/images/OurClient/National Oilwell varco muscat.svg";
import img4 from "../../public/images/OurClient/Valiant_web.png";
import img5 from "../../public/images/OurClient/airswift.svg";
import img6 from "../../public/images/OurClient/bakerhughes.png";
import img7 from "../../public/images/OurClient/worley-svg-logo.svg";
import img8 from "../../public/images/OurClient/ooredoo_logo.svg";
import img9 from "../../public/images/OurClient/petroplan.svg";
import img10 from "../../public/images/OurClient/schlumberger.svg";

import Image from "next/image";

export default function About() {
  const teamList = [
    {
      image: img1,
    },
    {
      image: img2,
    },
    {
      image: img3,
    },
    {
      image: img4,
    },
    {
      image: img5,
    },
    {
      image: img6,
    },
    {
      image: img7,
    },
    {
      image: img8,
    },
    {
      image: img9,
    },
    {
      image: img10,
    },
  ];

  return (
    <div
      className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  py-[5rem]"
      id="clients"
    >
      <div>
        <div className="text-center text-3xl font-semibold">Our Clients</div>
        <div className="text-center text-[#858d96] text-base mt-[30px]">
          We are honored to partner with diverse organizations, big and small,
          across various industries.
          <br /> Our commitment to excellence and collaborative approach has
          earned the trust of clients worldwide.
        </div>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-1 grid-cols-1 gap-7 mt-[60px]">
        {teamList?.map((item: any, index: number) => {
          return (
            <div
              className="shadow-[0_1px_6px_-1px_rgb(0,0,0,0.1)] flex justify-center items-center p-[16px] h-[7rem]"
              key={index}
            >
              <Image src={item?.image} className="w-[10rem] " alt="" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
