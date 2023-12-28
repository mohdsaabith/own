import React from "react";
import { Button, Space } from "antd";
import Completion from "../../public/images/services/Completion.svg";
import Downhole from "../../public/images/services/Downhole 1.svg";
import Industrial from "../../public/images/services/Industrial 1.svg";
import Manpower from "../../public/images/services/Manpower 1.svg";
import PowerRental from "../../public/images/services/Power Rental.svg";
import WallHead from "../../public/images/services/Wall Head.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function OurServices() {
  const router = useRouter();
  const serviceList = [
    {
      key: 1,
      label: "Wallhead Equipments and Services",
      text: "we specialize in supplying and servicing wellhead equipment and spare parts. Main products include wellhead equipment and Christmas trees, valves, flanges, pipe fittings, etc.",
      icon: <Image src={WallHead} className="w-[150px]" alt="" />,
    },
    {
      key: 2,
      label: "Completion Equipments and Services",
      text: "This facility will handle sub-assembly creation, testing, wellhead assembly, and customer-owned inventory management.",
      icon: <Image src={Completion} className="w-[110px]" alt="" />,
    },
    {
      key: 3,
      label: "Consultancy and Specialist Manpower Supply",
      text: "Supplies adaptable, highly skilled professionals for diverse consultancy and technical services to meet client needs.",
      icon: <Image src={Manpower} className="w-[110px]" alt="" />,
    },
    {
      key: 4,
      label: "Power Rental Tools",
      text: "The list of power generators in our workshop in Jiffneen (Muscat area) includes a variety of brand-new sets with different power sizes ranging from 30 Kva to 1000 Kva (16 sets).",
      icon: <Image src={PowerRental} className="w-[140px]" alt="" />,
    },
    {
      key: 5,
      label: "Industrial Supplies",
      text: "MANAFE offers industrial supplies products in ranges like industry uniforms, Janitorial and cleaning, hand protection, safety footwear, respiratory, eye protection, etc…",
      icon: <Image src={Industrial} className="w-[140px]" alt="" />,
    },
    {
      key: 6,
      label: "Down-hole Tools Rental",
      text: "MANAFE provides high-quality specialized drilling tools. All the tools are API certified and sourced from reputable foreign providers like NOV & TERCEL. ",
      icon: <Image src={Downhole} className="w-[140px]" alt="" />,
    },
  ];

  return (
    <div>
      <div className="bg-[#fafbfe]" id="services">
        <div className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  py-[5rem]">
          <div className="text-center">
            <div className="text-3xl font-semibold">OUR SERVICES</div>

            <div className="mt-[25px] border border-[#1bbc9d] w-[60px]  flex justify-center items-center mx-auto"></div>
            <div className="text-[#858d96] mt-[30px]">
              All the services that MANAFE provides are built based on the
              essential concept of well-built management and <br />
              highly standard quality system with the strive for HSE and
              Operational excellence.
            </div>
          </div>
          <div className="grid md:grid-cols-3 sm:grid-cols-1 grid-cols-1 gap-5 mt-[5rem]">
            {serviceList?.map((item: any) => {
              return (
                <div className="flex gap-6 p-[20px]" key={item?.key}>
                  <div className=" text-[#1bbc9d] mt-[7px]">{item?.icon}</div>
                  <div>
                    <div className="font-semibold mb-5  text-lg">
                      {item?.label}
                    </div>
                    <div className="text-[#858d96]">{item?.text}</div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex justify-center items-center mt-[2rem]">
            {" "}
            <Button
              type="primary"
              className="bg-[#1bbc9d] text-white hover:text-white hover:bg-[#1bbc9d] transition  hover:-translate-y-1 flex justify-center items-center gap-2"
              size={"large"}
              onClick={() => router.push("/services")}
            >
              Show more <AiOutlineArrowRight />
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <div className="bg-gradient-to-r from-[#363795]  to-[#005C97] h-full opacity-90">
          <div className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  py-[5rem]">
            <div className="">
              <div className="text-center text-white text-3xl font-semibold">
                Driving Oil Field Excellence
              </div>
              <div className="text-center text-white mt-[20px]">
                MANAFE is owned and managed by highly experienced personnel who
                possess over
                <br /> two decades of industry experience.
              </div>
              <div className="flex justify-center items-center mt-[50px]">
                <Button
                  className="bg-white hover:bg-white transition  hover:-translate-y-1"
                  size={"large"}
                  onClick={() => router.push("#contact")}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
