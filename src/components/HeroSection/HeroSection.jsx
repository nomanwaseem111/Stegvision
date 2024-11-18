import React from "react";
import Button from "../Button/Button";
import LeftArrow from "../../assets/icons/left-arrow.svg?react";
import Globe from "../../assets/icons/globe.svg?react";
function HeroSection() {
  return (
    <div className="max-w-[280px]  sm:max-w-[400px] lg:max-w-[656px]  mx-auto flex flex-col justify-center items-center hero_section lg:mb-[72px]">
      <div className="w-full h-auto mt-[99px] lg:mt-[199px] main_title_section text-[30px] sm:text-[45px] lg:text-[72px]">
        <span className="hero_section_title">Empowering</span> Trust Gl
        <Globe className="inline-flex" />
        bally
      </div>
      <p className="max-w-[454px] h-[48px] text-[14px] lg:text-[16px] text-center text-secondary">
        StegVision's proprietary technology enables brands and consumers
        worldwide to seamlessly verify product authenticity.
      </p>
     
      <Button className="w-full lg:w-[457px] h-[52px] relative z-20 hover:bg-transparent hover:border hover:border-white hover:text-white rounded-[8px] mt-6 px-[55px] py-[14px] flex justify-center items-center gap-x-[8px] group">
        Request a demo
        <LeftArrow className="flex items-center justify-center mt-1 text-black group-hover:text-white !important" />
      </Button>
    </div>
  );
}

export default HeroSection;
