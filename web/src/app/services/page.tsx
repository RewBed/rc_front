import CtaArea from "@/components/Common/CtaArea";
import Services from "@/components/HomePages/DefaultHome/Services";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import { getServices, getSettings } from "@/lib/api";

export default async function ServicesPage() {
  const [services, settings] = await Promise.all([getServices(), getSettings()]);

  return (
    <>
      <Navbar />
      <div className="pt-100"></div>
      <Services services={services} />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
