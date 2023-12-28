import React from "react";
import Layout from "../../../components/Layout";
import { Link } from "react-scroll";

export default function Index() {
  const comapanyNames = [
    { name: "North Land Oil Services" },
    { name: "Qawafil Al Dhahira" },
    { name: "Arabian Gulf Pioneering Projects" },
    { name: "Al Noor for Safety and Security" },
  ];

  return (
    <Layout>
      <div className="">
        <div className="">
          <div className="bg-gradient-to-r from-[#363795]  to-[#005C97] h-full opacity-90">
            <div className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  pt-[9rem] pb-[5rem]">
              <div className="">
                <div className="text-start text-white text-3xl font-semibold">
                  About Us
                </div>
                <div className="md:text-start sm:text-justify text-justify text-white mt-[20px] ">
                  An Omani National Company established with the intention to
                  provide superior services. MANAFE International has a
                  long-term perspective to invade the Oilfield Market in Oman
                  and expand its operations to the MENA Market.
                </div>
              </div>
            </div>
          </div>
          <div className="md:mx-[7rem] sm:mx-[1rem] mx-[1rem]  py-[5rem] md:flex justify-between">
            <div className="md:w-[20%]  md:pb-0 sm:pb-[3rem] pb-[3rem]">
              <div className="sticky top-28 border-l-2 h-[7.5rem] border-[#1bbc9d] ">
                <Link
                  activeClass=" text-[#1bbc9d]"
                  className=" active:text-[#1bbc9d] hover:text-[#1bbc9d]"
                  to={"overView"}
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  <p className="pl-[2rem] cursor-pointer font-semibold text-xl">
                    Overview
                  </p>
                </Link>
                <Link
                  activeClass=" text-[#1bbc9d]"
                  className="hover:text-[#1bbc9d]"
                  to={"vision"}
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  <p className="pl-[2rem] cursor-pointer font-semibold text-xl pt-[1rem]">
                    Our vision
                  </p>
                </Link>
                <Link
                  activeClass=" text-[#1bbc9d]"
                  className="hover:text-[#1bbc9d]"
                  to={"firm"}
                  spy={true}
                  smooth={true}
                  offset={-75}
                  duration={500}
                >
                  <p className="pl-[2rem] cursor-pointer font-semibold text-xl pt-[1rem]">
                    Our other firms
                  </p>
                </Link>
              </div>
            </div>
            <div className="md:w-[80%]">
              <section id="overView">
                <div className="font-normal text-4xl pb-[1rem]">Overview</div>
                <div className="text-base text-slate-600  pb-[16px] text-justify">
                  MANAFE is headquartered in Muscat, Sultanate of Oman. MANAFE
                  is owned and managed by highly experienced personnel who
                  possess over two decades of industry experience.
                </div>
                <div className="text-base text-slate-600 pb-[16px] text-justify">
                  MANFE is a 100% Omani enterprise that targets to lead the Oil
                  field service scheme utilizing integrating personnel skills,
                  asset quality, and new technologies to help in accomplishing
                  its client&apos;s goals and objectives.
                </div>
                <div className="text-base text-slate-600 pb-[16px] text-justify">
                  MANAFE&apos;s vision is to use indoor experienced technical
                  knowledge and incorporate it with the technical support of
                  foreign expertise to provide the customer with sustainable
                  operational excellence and enhanced solutions.
                </div>
                <div className="text-base text-slate-600 pb-[50px] text-justify">
                  MANAFE is initially focused on providing services such as;
                  Consultancy Well Engineering Services including Contractual
                  Support, Completion and Wellhead services with workshop
                  support, and assistance to foreign principals to establish
                  in-country service support.
                </div>
              </section>
              <section id="vision">
                <div className="font-normal text-4xl pb-[1rem]">Our vision</div>
                <div className="text-base text-slate-600 pb-[16px] text-justify">
                  Striving to become a local and internationally recognized
                  Service Provider, to be the Primary Oil Field Service Provider
                  for all Operators and Contractors, and to become the most
                  favored Omani Employer in the Sultanate of Oman
                </div>
                <div>
                  <li className="text-base text-slate-600 pb-[16px] text-justify">
                    With the Highly skilled personnel and the New Technology
                    that MANAFE owns, MANAFE intends to provide the best quality
                    service to continuously and consistently accomplish and
                    fulfill the oil field demands.
                  </li>
                  <li className="text-base text-slate-600 pb-[16px] text-justify">
                    All the services that MANAFE provides are built based on the
                    essential concept of well-built management and a highly
                    standard quality system with the strive for HSE and
                    Operational excellence.
                  </li>
                  <li className="text-base text-slate-600 pb-[16px] text-justify">
                    MANAFE&apos;s objective is to build its own facility in the
                    Sultanate of Oman where most of the equipment will be
                    serviced and manufactured to maximize in-country value.
                  </li>
                </div>
              </section>
              <section className="pt-[16px] " id="firm">
                <div className="font-normal text-4xl pb-[1.5rem]">
                  Our other firms
                </div>
                <div className="grid md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-5">
                  {comapanyNames?.map((item: any, index: number) => {
                    return (
                      <div
                        key={index}
                        className="shadow-lg h-[6rem] flex justify-center items-center text-center p-[7px] text-lg font-medium bg-[#1bbc9d] text-white rounded-md"
                      >
                        {item?.name}
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
