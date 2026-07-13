import CtaArea from "@/components/Common/CtaArea";
import PageBanner from "@/components/Common/PageBanner";
import OurWorks from "@/components/HomePages/DefaultHome/OurWorks";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import { getSettings, getWorkAreas } from "@/lib/api";

export default async function WorkAreasPage() {
  const [workAreas, settings] = await Promise.all([
    getWorkAreas(),
    getSettings(),
  ]);

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="С какими задачами работаем"
        BGImage="/images/page-banner-tasks-artel.jpg"
      />
      <OurWorks workAreas={workAreas} showViewMore={false} />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
