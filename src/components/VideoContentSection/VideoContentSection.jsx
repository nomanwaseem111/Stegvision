import React from "react";
import Ellipse18 from "../../assets/icons/ellipse18.svg?react";
import VideoContent from "../../assets/icons/video_content.svg?react";

function VideoContentSection() {
  return (
    <div className="w-[90%] lg:max-w-[1255px] mt-[24px] min-h-[243px] relative border overflow-hidden  border-[#27393E] bg-black p-6 rounded-[16px] mx-auto">
      <VideoContent className="absolute top-0 left-0" />
      <h2 className="text-[18px] leading-[150%] text-primary font-[700]">
        Video Content Integration
      </h2>
      <p className="text-[14px] font-[500] leading-[150%] text-lightWhite">
        Share brand stories, tutorials, or product demonstrations.
      </p>
      <Ellipse18 className="absolute -bottom-20 filter blur-[132.15px]" />
    </div>
  );
}

export default VideoContentSection;
