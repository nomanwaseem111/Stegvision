import FlashLight from "./assets/icons/flash-light.svg?react";
import FlashLightTwo from "./assets/icons/flash-light-2.svg?react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import Stroke from "./assets/icons/stroke.svg?react";
import Stroke2 from "./assets/icons/stroke2.svg?react";

import Line from "./assets/icons/Line.svg?react";
import Partner from "./components/Partner/Partner";
import FeaturesOverview from "./components/FeaturesOverview/FeaturesOverview";
import VideoContentSection from "./components/VideoContentSection/VideoContentSection";
import InfoCard from "./components/InfoCard/InfoCard";
function App() {
  return (
    <div className="w-full h-full bg-[#0E1319] overflow-hidden text-white  relative pb-10">
      <FlashLight className="absolute top-0 left-0" />
      <FlashLightTwo className="absolute top-0 left-0" />
      <Stroke className="absolute top-[25px] left-[50%] -translate-x-1/2 lg:block hidden" />
      <Line className="absolute top-[430px] left-[50%] -translate-x-1/2 lg:block hidden"/>
      <Stroke2 className="absolute top-[466px] left-[50%] -translate-x-1/2 lg:block hidden" />

      <div className="pt-10 lg:pt-20">
        <Header />
        <HeroSection />
         <Partner />
       <FeaturesOverview />
        <InfoCard/>
        <VideoContentSection /> 
      </div>
    </div>
  );
}

export default App;
