import React from "react";
import Box from "../../assets/icons/box.svg?react";
import Ellipse20 from "../../assets/icons/ellipse20.svg?react";
import Group from "../../assets/icons/group.svg?react";
import Ellipse21 from "../../assets/icons/ellipse21.svg?react";
import Ellipse22 from "../../assets/icons/ellipse22.svg?react";
import Ellipse23 from "../../assets/icons/ellipse23.svg?react";
import Reward from "../../assets/icons/reward.svg?react";
import Store from "../../assets/icons/store.svg?react";
import Ellipse24 from "../../assets/icons/ellipse24.svg?react";

function InfoCard() {
  return (
  <div className="flex justify-center items-center mx-5">
  <div className="flex flex-wrap gap-[24px] mx-auto justify-center items-center max-w-[1255px]">
      <div className="max-w-[400px] min-h-[510px] rounded-[16px] p-6 overflow-hidden border border-[#27393E] bg-black">
        <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
          Augmented Reality Experiences
        </h2>
        <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
          Create immersive brand interactions using AR technology.
        </p>
        <div className="relative">
          <Box className="mt-[115px] mx-auto relative -left-1" />
          <Ellipse20 className="absolute top-0 left-0" />
        </div>
      </div>
      <div className="flex flex-col flex-wrap gap-[24px]">
        <div className="flex flex-wrap justify-center items-center gap-[24px]">
          <div className="max-w-[545px] h-[243px] rounded-[16px] overflow-hidden relative p-6 border border-[#27393E] bg-black">
            <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
              Mailing list sign-ups
            </h2>
            <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
              Encourage customers to subscribe for updates and exclusive deals.
            </p>
            <div>
              <Group className="absolute bottom-0 left-[50%] w-[300px] sm:w-[357px] -translate-x-1/2 ml-5 z-10" />
              <Ellipse21 className="absolute bottom-0 right-0" />
            </div>
          </div>
          <div className="w-full sm:max-w-[262px] h-[243px] overflow-hidden p-6 relative rounded-[16px] border border-[#27393E] bg-black">
            <h2 className="text-[18px] w-[216px] leading-[150%] text-primary font-[700]">
              Special Offers & Rewards
            </h2>
            <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
              Deliver personalized promotions upon product verification.
            </p>
            <Reward className="mx-auto mt-4" />
            <Ellipse22 className="absolute bottom-0 right-0" />
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-[24px]">
          <div className="w-full sm:max-w-[262px] h-[243px] overflow-hidden p-6 relative rounded-[16px] border border-[#27393E] bg-black">
            <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
              Store locators
            </h2>
            <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
              Help customers find nearby retail locations effortlessly.{" "}
            </p>
            <Store className="absolute bottom-0 left-[50%] -translate-x-1/2" />
            <Ellipse23 className="absolute object-cover w-full bottom-0 left-[50%] -translate-x-1/2" />
          </div>
          <div className="max-w-[545px] h-[243px] rounded-[16px] overflow-hidden relative p-6 border border-[#27393E] bg-black">
            <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
              Upselling Opportunities{" "}
            </h2>
            <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
              Suggest related products or upgrades during the verification
              process.{" "}
            </p>
            <Ellipse24 className="absolute bottom-0 left-0" />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default InfoCard;
