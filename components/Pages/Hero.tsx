import React from "react";
import bgImg from "../../public/images/bg-home.jpg";

export default function Hero() {
  return (
    <div
      id="home"
      className="pt-[4rem] bg-[url('../../public/images/bg-home.jpg')] h-screen relative"
    >
      <div className="bg-gradient-to-r from-[#363795]  to-[#005C97] h-full opacity-95">
        <div className="h-full w-full flex flex-col justify-center items-center text-center">
          <h4 className="text-white font-semibold md:text-xl sm:text-base text-base tracking-[0.5rem]">
            MANAFE
          </h4>
          <h1 className="text-white tracking-[0.05rem] font-semibold md:text-5xl sm:text-3xl text-3xl">
            Pursuing Excellence through Quality
            <br /> and Safety
          </h1>
          <p className="text-white pt-[20px] md:text-base sm:text-sm text-sm">
            All the services that MANAFE provided are built based on essential
            concept of well-built management and
            <br /> highly standard quality system with the strive for HSE and
            Operational excellence.
          </p>

          <p className="play-shadow mt-4">
            <a href={"#"} className="play-btn video-play-icon">
              <i className="mdi mdi-play text-center" />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
