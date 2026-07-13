import { notFound } from "next/navigation";
import CtaArea from "@/components/Common/CtaArea";
import PageBanner from "@/components/Common/PageBanner";
import WorkProcess from "@/components/HomePages/DefaultHome/WorkProcess";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import WorkAreaDetailsContent from "@/components/WorkAreas/WorkAreaDetailsContent";
import { getSettings, getWorkArea, getWorkAreas } from "@/lib/api";

type WorkAreaPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function WorkAreaPage({ params }: WorkAreaPageProps) {
  const { slug } = await params;
  const [workArea, workAreas, settings] = await Promise.all([
    getWorkArea(slug),
    getWorkAreas(),
    getSettings(),
  ]);

  if (!workArea) notFound();

  const relatedWorkAreas = workAreas.filter((item) => item.slug !== slug);

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle={workArea.title}
        BGImage="/images/page-banner-tasks-artel.jpg"
      />
      <WorkAreaDetailsContent
        workArea={workArea}
        relatedWorkAreas={relatedWorkAreas}
      />
      <WorkProcess />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
