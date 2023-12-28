import React from "react";

import { RiInstagramFill } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import {
  MdMailOutline,
  MdOutlineCall,
  MdOutlineLocationOn,
} from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { useRouter } from "next/router";

export default function Footer() {
  const router = useRouter();
  return (
    <div>
      <div className="bg-[#343a40]">
        <div className=" grid md:grid-cols-4 sm:grid-cols-1 grid-cols-1 gap-9 md:mx-[10rem] sm:mx-[1rem] mx-[1rem] py-[5rem]">
          <div className=" mt-4 col-span-2 w-full">
            <div className="text-white font-semibold text-3xl mb-4">
              Driving Oil Field Excellence
            </div>
            <div className="text-[#98a0aa]">
              MANAFE is a 100% Omani enterprise leading in oil field services
              through skilled personnel, top-quality assets, and cutting-edge
              technology to achieve mutual goals.
            </div>
            <div className="flex gap-4 text-2xl mt-5">
              <a href="" target="_blank" rel="noreferrer">
                <RiInstagramFill className="hover:text-[#99ccff] cursor-pointer ease-in transition-all text-[#98a0aa]" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <FaFacebookF className="hover:text-[#99ccff] text-xl cursor-pointer ease-in transition-all text-[#98a0aa]" />
              </a>
              <a href="" target="_blank" rel="noreferrer">
                <FaXTwitter className="hover:text-[#99ccff] cursor-pointer ease-in transition-all text-[#98a0aa]" />
              </a>
            </div>
          </div>
          {/* <div className="col-lg-3 mt-4 md:ml-[3rem]">
            <h4 className="text-[#ffffff] font-semibold text-lg">Manafe</h4>{" "}
            <div className="text-muted mt-4">
              <ul className="list-unstyled footer-list">
                <li className="mb-3">
                  <a href={"/#home"} className="text-[#98a0aa] ">
                    Home
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href=""
                    onClick={() => router?.push("/services")}
                    className="text-[#98a0aa]"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-3">
                  <a
                    href=""
                    onClick={() => router?.push("/aboutUs")}
                    className="text-[#98a0aa]"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a className="text-[#98a0aa]" href={"/#contact"}>
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-3 mt-4  md:border-l w-full md:ml-[5rem]">
            <div className="md:pl-[1rem]">
              <h4 className="text-[#ffffff] font-semibold text-lg">Address</h4>
              <div className="mb-3 flex gap-3 text-[#98a0aa] mt-4">
                <MdOutlineLocationOn className="text-2xl" />
                <p>
                  Manafe International, Building
                  <br /> No 1/834, WAY 3433, <br />
                  Al Khoud 7, Seeb, <br /> Muscat. Sultanate of Oman.
                </p>
              </div>
              <div className="mb-3 flex gap-3 text-[#98a0aa]">
                <MdOutlineCall className="text-2xl" />
                <a href="tel:0096824533536">
                  <p className="hover:text-[#99ccff] ease-in transition-all">
                    00968 24533536
                  </p>
                </a>
              </div>
              {/* <div className="mb-3 flex gap-3 text-[#98a0aa]">
                <BsWhatsapp className="text-2xl" />
                <a
                  href="https://wa.me/919061007744"
                  target={"_blank"}
                  rel="noreferrer"
                >
                  <p className="hover:text-[#99ccff] ease-in transition-all">
                    +91 90610 07744
                  </p>
                </a>
              </div> */}
              <div className="flex gap-3 cursor-pointer text-[#98a0aa]">
                <MdMailOutline className="text-2xl" />
                <a href="">
                  <p className="hover:text-[#99ccff] ease-in transition-all">
                    280. PC 138.
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
