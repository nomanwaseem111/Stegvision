import React from "react";
import Marquee from "react-fast-marquee";
import Brand from "../../assets/icons/brand.svg";
import Brand2 from "../../assets/icons/brand2.svg";
import Brand3 from "../../assets/icons/brand3.svg";
import Brand4 from "../../assets/icons/brand4.svg";
import Brand5 from "../../assets/icons/brand5.svg";
import Brand6 from "../../assets/icons/brand6.svg";
import Brand7 from "../../assets/icons/brand7.svg";

function Partner() {
  const partner = [Brand, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7];

  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <div className="mx-auto mt-[78px]">
        <h2 className="text-primary text-[14px] sm:text-[18px] font-[600]">Our Partner</h2>
        <p className="text-secondaryLight text-[12px] text-wrap sm:text-[18px]">From the most popular brands across the globe</p>
      </div>
      <div className="max-w-full mt-[40px]">
        <Marquee direction="right" speed={100} delay={5}>
          <div className="image_wrapper flex gap-x-[110px]">
            {partner.map((item, index) => {
                console.log("item",item)
                return(
                    <img src={item} alt="brand"/>
                )
            })}
          </div>
        </Marquee>
      </div>
    </div>
  );
}

export default Partner;
