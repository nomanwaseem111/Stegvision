import React from "react";
import global from "../../assets/images/globe.png";
import Ellipse from "../../assets/icons/ellipse.svg?react";
import Ellipse1 from "../../assets/icons/ellipse1.svg?react";
import Vector4 from "../../assets/icons/vector4.svg?react";
import Vector6 from "../../assets/icons/vector6.svg?react";
import Vector5 from "../../assets/icons/vector5.svg?react";
import Rectangle56 from "../../assets/icons/rectangle56.svg?react";
import Rectangle57 from "../../assets/icons/rectangle57.svg?react";
import Shield from "../../assets/icons/shield.svg?react";
import Ellipse16 from "../../assets/icons/ellipse16.svg?react";
import GridImage from "../../assets/icons/gridimage.svg?react";
import Scan from "../../assets/icons/scan.svg?react";
import Blur from "../../assets/icons/blur.svg?react";

function FeaturesOverview() {
  const data = [
    {
      title: "Global coverage",
      description: "Authenticate products anywhere in the world.",
      image:
        "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
    },
    {
      title: "Seamless integration",
      description:
        "No need to change existing vendors or production processes.",
      image:
        "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8", // Replace with an actual image
    },
    {
      title: "Secure & Proprietary Technology",
      description: "Difficult for counterfeiters to replicate.",
      image:
        "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8", // Replace with an actual image
    },
    {
      title: "Real-Time Data",
      description: "Access valuable insights through our brand dashboard.",
      image:
        "https://images.unsplash.com/photo-1719937206109-7f4e933230c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8", // Replace with an actual image
    },
  ];

  return (
   <div className="flex justify-center items-center mx-5">
    <div className="flex flex-wrap justify-center items-center max-w-[1296px] gap-[24px] mt-[87.79px] pb-10">
      <div className="max-w-[339px] overflow-hidden h-[540px] bg-black border border-[#27393E] rounded-[16px] p-6">
        <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
          Global coverage
        </h2>
        <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
          Authenticate products anywhere in the world.
        </p>

        <div className="relative">
          <img src={global} alt="global" className="mt-20 relative z-10" />
          <Ellipse className="absolute -bottom-6 -left-6" />
          <Ellipse className="absolute -bottom-6 -left-6" />
        </div>
      </div>
      <div className="max-w-[570px] flex flex-col gap-y-[24px]">
        <div className="w-full min-h-[258px] bg-black overflow-hidden relative border border-[#27393E] rounded-[16px] p-6">
          <Ellipse1 className="absolute top-0 left-0" />
          <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
            Seamless integration
          </h2>
          <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
            No need to change existing vendors or production processes.
          </p>
          <Vector4 className="absolute bottom-16 left-0" />
          <Vector6 className="absolute bottom-16 left-0" />
          <Vector5 className="absolute bottom-0 left-0" />
        </div>
        <div className="w-full min-h-[258px] bg-black overflow-hidden relative p-6 border border-[#27393E] rounded-[16px]">
          <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
            Secure & Proprietary Technology
          </h2>
          <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
            Difficult for counterfeiters to replicate.
          </p>
          <Rectangle56 className="absolute bottom-32 -left-0" />
          <Rectangle57 className="absolute bottom-10 -left-0" />
          <Shield className="absolute bottom-7 left-[50%] -translate-x-1/2" />
          <Ellipse16 className="absolute bottom-7 left-[50%] -translate-x-1/2" />
        </div>
      </div>
      <div className="max-w-[339px] min-h-[540px] relative bg-gradient-to-tr from-black via-transparent to-black  overflow-hidden bg-black border border-[#27393E] rounded-[16px] p-6">
        <GridImage className="absolute top-0 -left-20 bg-gradient-to-tr from-black via-transparent to-black " />
        <Blur className="absolute top-0 left-0 bg-gradient-to-tr from-black via-transparent to-black " />
        <Ellipse1 className="absolute top-0 left-0 z-10 bg-gradient-to-tr from-black via-transparent to-black " />
        <div className="relative z-20">
          <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
            Real-Time Data:
          </h2>
          <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
            Access valuable insights through our brand dashboard for enhanced
            counterfeit protection and consumer engagement.
          </p>
        </div>

        <div className="max-w-[275px] relative m-4 p-4 min-h-[100px] rounded-[11px] bg-[#151E28] z-10 mt-[94px] total_scan">
          <p>Total scans</p>
          <p>232</p>
          <Scan className="absolute bottom-0 right-0" />
        </div>
      </div>
    </div>

   </div>
  );
}

export default FeaturesOverview;
