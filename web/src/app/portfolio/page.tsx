import CtaArea from "@/components/Common/CtaArea";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import ProjectPortfolioGrid from "@/components/Portfolio/ProjectPortfolioGrid";
import { getProjects, getSettings } from "@/lib/api";

export default async function PortfolioPage() {
  const [projects, settings] = await Promise.all([getProjects(), getSettings()]);

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle="Проекты"
        BGImage="/images/page-banner-projects-artel.jpg"
      />
      <ProjectPortfolioGrid projects={projects} />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
