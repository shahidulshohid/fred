import Banner from "@/components/banner/Banner";
import ElectricianFeaturesSection from "@/components/landingPage/ElectricianFeaturesSection";
import Faq from "@/components/landingPage/Faq";
import TreamsLine from "@/components/landingPage/TreamsLine";

const page = () => {
  return (
    <div>
      <Banner />
      <ElectricianFeaturesSection />
      <Faq />
      <TreamsLine />
    </div>
  );
};

export default page;