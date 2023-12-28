import React from "react";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons/lib/icons";
import AboutUsImg from "../../public/images/growth-analytics.svg";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Features() {
  const router = useRouter();
  return (
    <div
      className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  py-[5rem] relative"
      id="features"
    >
      <div className="grid md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-5">
        <div className="features-box mt-5 mt-lg-0">
          <h3 className="font-semibold text-2xl ">
            Service Excellence Through Strong Management <br />
            and Quality Systems
          </h3>
          <p className="text-[#858d96] pt-[15px]">
            MANAFE is initially focusing on providing services such as:
          </p>
          <div className="pt-[15px]">
            <li className="text-[#858d96]">
              Consultancy Well Engineering Services including Contractual
              Support.
            </li>

            <li className="text-[#858d96]">
              Assistance to foreign principals to establish in-country service
              support.
            </li>

            <li className="text-[#858d96]">
              Completion and Wellhead services with workshop support.
            </li>
          </div>
          <div className="pt-[40px]">
            <Button
              type="primary"
              size="large"
              className=" bg-[#1bbc9d] flex justify-center items-center transition  hover:-translate-y-1"
              onClick={() => router.push("/services")}
            >
              Learn More
              <ArrowRightOutlined />
            </Button>
          </div>
        </div>
        <div className="flex justify-center items-center text-center">
          <Image
            src={AboutUsImg}
            width={400}
            height={400}
            alt="Picture of the author"
          />
        </div>
      </div>
    </div>
  );
}
