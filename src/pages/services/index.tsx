import React from "react";
import Layout from "../../../components/Layout";
import { Link } from "react-scroll";
import Completion from "../../../public/images/services/Completion.svg";
import Downhole from "../../../public/images/services/Downhole 1.svg";
import Industrial from "../../../public/images/services/Industrial 1.svg";
import Manpower from "../../../public/images/services/Manpower 1.svg";
import PowerRental from "../../../public/images/services/Power Rental.svg";
import WallHead from "../../../public/images/services/Wall Head.svg";
import Image from "next/image";

export default function Index() {
  const section = [
    {
      sectiontitle: "Down-hole Tools Rental",
      link: "downHole",
      icon: <Image src={Downhole} className="w-[30px]" alt="" />,
    },
    {
      sectiontitle: "Power Rental Tools",
      link: "powerRental",
      icon: <Image src={PowerRental} className="w-[30px]" alt="" />,
    },
    {
      sectiontitle: "Wellhead Equipment's and Services",
      link: "wellhead",
      icon: <Image src={WallHead} className="w-[35px]" alt="" />,
    },
    {
      sectiontitle: "Completion Equipment's and Services",
      link: "completion",
      icon: <Image src={Completion} className="w-[50px]" alt="" />,
    },
    {
      sectiontitle: "Consultancy and Specialist Manpower Supply",
      link: "consultancy",
      icon: <Image src={Manpower} className="w-[50px]" alt="" />,
    },
    {
      sectiontitle: "Industrial Supplies",
      link: "industrial",
      icon: <Image src={Industrial} className="w-[30px]" alt="" />,
    },
    {
      sectiontitle: "Principal Engagement",
      link: "principal",
      icon: <Image src={WallHead} className="w-[30px]" alt="" />,
    },
  ];

  const liStyle = { listStylePosition: "outside" };

  return (
    <Layout>
      <div className="">
        <div className="bg-gradient-to-r from-[#363795]  to-[#005C97] h-full opacity-90">
          <div className="md:mx-[10rem] sm:mx-[1rem] mx-[1rem]  pt-[9rem] pb-[5rem]">
            <div className="">
              <div className="text-start text-white text-3xl font-semibold">
                Services
              </div>
              <div className="md:text-start sm:text-justify text-justify text-white mt-[20px] ">
                All the services that MANAFE provided are built based on
                essential concept of well-built management and highly standard
                quality system with the strive for HSE and Operational
                excellence.
              </div>
            </div>
          </div>
        </div>
        <div className="md:mx-[5rem] sm:mx-[1rem] mx-[1rem] py-[5rem]">
          <div className="md:flex justify-between">
            <div className="md:sticky top-28 md:w-[20%] md:mb-0 sm:mb-[3rem] mb-[3rem] border-l-2 h-full border-[#1bbc9d] flex flex-col">
              {section?.map((item: any, index) => {
                return (
                  <Link
                    key={index}
                    activeClass="text-[#1bbc9d]"
                    className="hover:text-[#1bbc9d] pl-4"
                    to={item?.link}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                  >
                    <button className=" my-4 text-left">
                      <div className="flex justify-start items-center gap-2 font-medium">
                        {/* <div>{item?.icon}</div> */}
                        <div className="">{item?.sectiontitle}</div>
                      </div>
                    </button>
                  </Link>
                );
              })}
            </div>
            <div className="md:w-[75%]">
              <div id="downHole">
                <div className="font-normal text-4xl pb-[1rem] text-[#1bbc9d]">
                  Down-hole Tools Rental
                </div>
                <div className="text-base  text-slate-600  pb-[16px] text-justify">
                  MANAFE provides high quality specialized drilling tools. All
                  the tools are API Certified and sourced from reputable foreign
                  providers like NOV & TERCEL. The list below is showing some of
                  the tools supplied through MANAFE.
                </div>
                <div className="md:flex justify-between text-base text-slate-600 w-full">
                  <div className="md:w-[50%]  mx-[1rem]">
                    <ul
                      className="text-base text-slate-600 list-outside"
                      style={{ listStyleType: "disc" }}
                    >
                      <li>Drilling Jars.</li>
                      <li>Shock Subs.</li>
                      <li>Circulating Subs.</li>
                      <li>Standard Fixed Blade Reamers.</li>
                      <li>Versatile Drilling Reamer.</li>
                      <li>Lower Versatile Drilling Head.</li>
                      <li>Roller Reamers.</li>
                      <li>
                        Upper Versatile Drilling Head (Back reaming Application)
                      </li>
                    </ul>
                  </div>
                  <div className="md:w-[50%]  mx-[1rem]">
                    <ul
                      className="text-base text-slate-600  list-outside"
                      style={{ listStyleType: "disc" }}
                    >
                      <li>Standard Integral Blade Stabilizers.</li>
                      <li>Integral Blade Water Melon Stabilizers.</li>
                      <li>On Bit Integral Blade Stabilizers.</li>
                      <li>
                        Compact On Bit Integral Blade Stabilizers (Motor
                        Applications).
                      </li>
                      <li>Soft-Blade integral Blade Stabilizer.</li>
                      <li>BOP’s</li>
                      <li>Drill Pipes & Drill Collars</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="powerRental" className="mt-[2.5rem]">
                <div className="font-normal text-4xl pb-[1rem] text-[#1bbc9d]">
                  Power Rental Tools
                </div>
                <div className="mx-[1rem]">
                  <ul
                    className="text-base text-slate-600  list-outside"
                    style={{ listStyleType: "disc" }}
                  >
                    <li className="list-outside">
                      The list of power generators in our workshop in Jiffneen
                      (Muscat area) includes a variety of brand new sets with
                      different power sizes ranging from 30 Kva to 1000 Kva (16
                      sets).
                    </li>
                    <li>
                      We also have a stock of air compressors for rental with a
                      range of capacities from 175 CFM/100psi to 900 CFM/200psi
                      (8 sets).
                    </li>
                    <li>
                      4 sets of Welding Machines with the power of 400 Amps DC.
                    </li>
                  </ul>
                </div>
              </div>

              <div id="wellhead" className="mt-[2.5rem]">
                <div className="font-normal text-4xl pb-[1rem] text-[#1bbc9d]">
                  Wellhead Equipment&apos;s and Services
                </div>
                <div className="text-base text-slate-600 text-justify">
                  MANAFE is specialized in supplying and servicing wellhead
                  equipment and spare parts. Main products include wellhead
                  equipment and Christmas tree, valves, flanges, pipe fittings
                  etc. The ultimate goal is to establish a local manufacturing
                  facility to supply the ME region.{" "}
                </div>
              </div>

              <div id="completion" className="mt-[2.5rem]">
                <div className="font-normal text-4xl pb-[1rem] text-[#1bbc9d]">
                  Completion Equipment&apos;s and Services
                </div>
                <div className="text-base text-slate-600 text-justify">
                  MANAFE’s objective is to combine the efforts of relative small
                  but specialist players in the completion market to be able to
                  compete with the more established suppliers for completions
                  with the aim to set up an independent completion workshop with
                  the facilities to make up, test and break completion
                  sub-assemblies, shoe tracks, testing of casing floats,
                  assembling and testing of wellhead assemblies and associated
                  customer owned inventory management.
                </div>
              </div>

              <div id="consultancy" className="mt-[2.5rem]">
                <div className="font-normal text-4xl pb-[1rem] text-[#1bbc9d]">
                  Consultancy and Specialist Manpower Supply
                </div>
                <div className="text-base  text-slate-600  pb-[16px] text-justify">
                  MANAFE is committed to supply the clients with highly skilled
                  professionals to provide the required consultancy and the
                  technical assistance services in all fields and who can easily
                  adapt to client organization.
                </div>
                <div className="md:flex gap-6 text-base text-slate-600 w-full">
                  <div className="md:w-[50%] mx-[1rem]">
                    <ul
                      className="text-base text-slate-600 list-outside"
                      style={{ listStyleType: "disc" }}
                    >
                      <li>Project Management</li>
                      <li>Corporate.</li>
                      <li>Senior Engineering.</li>
                      <li>Drilling and engineering personnel & Crew.</li>
                      <li>HSE advisors.</li>
                      <li>Medics.</li>
                      <li>Designers.</li>
                      <li>Telecoms experts.</li>
                    </ul>
                  </div>
                  <div className="md:w-[50%] mx-[1rem]">
                    <ul
                      className="text-base text-slate-600  list-outside"
                      style={{ listStyleType: "disc" }}
                    >
                      <li>Human Resources.</li>
                      <li>
                        Rig Inspections; Mechanical, Electrical and Safety
                        including drops.
                      </li>
                      <li>Commissioning.</li>
                      <li>
                        Technical tender support for wells scope (drilling and
                        wellservices); material and services scope.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="industrial" className="mt-[2.5rem]">
                <div className="font-normal text-4xl pb-[1rem] text-[#1bbc9d]">
                  Industrial Supplies
                </div>
                <div className="text-base  text-slate-600 pb-[16px] text-justify">
                  MANAFE offer industrial supplies products in the following
                  range:
                </div>
                <div className="md:flex justify-between text-base text-slate-600 w-full">
                  <div className="md:w-[50%] mx-[1rem]">
                    <ul
                      className="text-base text-slate-600  list-outside"
                      style={{ listStyleType: "disc" }}
                    >
                      <li>Industry Uniforms.</li>
                      <li>Janitorial and Cleaning.</li>
                      <li>Hand Protection.</li>
                      <li>Safety Footwear.</li>
                      <li>Respiratory.</li>
                    </ul>
                  </div>
                  <div className="md:w-[50%] mx-[1rem]">
                    <ul
                      className="text-base text-slate-600 list-outside"
                      style={{ listStyleType: "disc" }}
                    >
                      <li>Eye Protection.</li>
                      <li>Head Protection</li>
                      <li>Fall Protection</li>
                      <li>Workplace Safety and First Aid</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div id="principal" className="mt-[2.5rem]">
                <div className="font-normal text-4xl pb-[1rem] text-[#1bbc9d]">
                  Principal Engagement
                </div>

                <div className="text-base text-slate-600 w-full md:flex justify-between">
                  <div className="md:w-[45%]  mx-[1rem]">
                    <ul
                      className="text-base text-slate-600  list-outside"
                      style={{ listStyleType: "disc" }}
                    >
                      <li>BJ-Consultancy/Foxdrill: Rig Inspection.</li>
                      <li>
                        Petroquip Energy Services: Specialized Completion
                        equipment.
                      </li>
                      <li>Swell X: Swellable packers.</li>
                      <li>Metadownhole: Downhole repair and Straddle tools.</li>
                      <li>
                        EV: Downhole Camera’s (Pipe, Coil and E/line supported)
                        .
                      </li>
                      <li>
                        Grantham: Fully integrated selfpowered test and valve
                        cavity grease skids.
                      </li>
                      <li>
                        LeaderEngineering: Provider of Oilfield Consultants.
                      </li>
                      <li>Liberty: Wellheads and Conductor Connectors.</li>
                      <li>TBC: Wellheads.</li>
                      <li>Aurora: Bit and Drive Drilling Optimisation.</li>
                    </ul>
                  </div>
                  <div className="md:w-[50%]  mx-[1rem]">
                    <ul
                      className="text-base text-slate-600  list-outside"
                      style={{ listStyleType: "disc" }}
                    >
                      {" "}
                      <li>
                        Petrostem, Tercel, Workstrings Int: Drilling Tools
                        rental.
                      </li>
                      <li>
                        MountWest: Drillstring Components (DC, Stabs, NMDC
                        etc.); Purchase.
                      </li>
                      <li>
                        4C Technologies: Drilling System and Power Generation.
                      </li>
                      <li>
                        S.T. & C. Oilfield FZCO Drilling equipment and spare
                        part sales.
                      </li>
                      <li>Wagenborg: Logistic Support/Coordination.</li>
                      <li>TBC: Completion accessories.</li>
                      <li>TBC: OCTG.</li>
                      <li>TBC: Vacuum Insulated Tubing.</li>
                      <li>Tomax: Anti Stall Technology.</li>
                      <li>Cansco: Well Control equipment rental.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
