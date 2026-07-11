import Navbar from "@/components/Layouts/Navbar";
import MainBanner from "@/components/HomePages/DefaultHome/MainBanner";
import Services from "@/components/HomePages/DefaultHome/Services";
import About from "@/components/HomePages/DefaultHome/About";
import OurWorks from "@/components/HomePages/DefaultHome/OurWorks";
import WorkProcess from "@/components/HomePages/DefaultHome/WorkProcess";
import FunFacts from "@/components/Common/FunFacts";
import LatestNewsSlider from "@/components/Common/LatestNewsSlider";
import CtaArea from "@/components/Common/CtaArea";
import Footer from "@/components/Layouts/Footer";
import {
  getExpertise,
  getServices,
  getSettings,
  getWorkAreas,
} from "@/lib/api";

export default async function Home() {
  const [services, workAreas, expertise, settings] = await Promise.all([
    getServices(),
    getWorkAreas(),
    getExpertise(),
    getSettings(),
  ]);

  return (
    <>
      <Navbar />
      <MainBanner />
      <Services services={services} />
      <About />
      <OurWorks workAreas={workAreas} />
      <WorkProcess />
      <FunFacts />
      <LatestNewsSlider expertise={expertise} />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
