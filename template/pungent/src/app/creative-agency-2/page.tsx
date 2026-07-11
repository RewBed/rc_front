import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import MainBanner from "../../components/HomePages/CreativeAgencyTwo/MainBanner";
import About from "../../components/HomePages/CreativeAgencyTwo/About";
import Services from "../../components/HomePages/CreativeAgencyTwo/Services";
import OurWorks from "../../components/HomePages/CreativeAgencyTwo/OurWorks";
import Feedback from "../../components/Common/Feedback";
import WorkProcess from "../../components/HomePages/CreativeAgencyTwo/WorkProcess";
import PricingStyleOne from "../../components/Pricing/PricingStyleOne";
import Team from "../../components/HomePages/CreativeAgencyTwo/Team";
import FunFactsTwo from "../../components/Common/FunFactsTwo";
import LatestNewsSlider from "../../components/Common/LatestNewsSlider";
import CtaArea from "../../components/Common/CtaArea";
import Partner from "../../components/Common/Partner";
import Footer from "../../components/Layouts/Footer";

export default function Page() {
  return (
    <>
      <NavbarTwo />

      <MainBanner />

      <About />

      <Services />

      <OurWorks />

      <Feedback />

      <WorkProcess />

      <PricingStyleOne />

      <Team />

      <FunFactsTwo />

      <LatestNewsSlider />

      <CtaArea />

      <Partner />

      <Footer />
    </>
  );
}