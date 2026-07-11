import { notFound } from "next/navigation";
import CtaArea from "@/components/Common/CtaArea";
import PageBanner from "@/components/Common/PageBanner";
import ExpertiseDetailsContent from "@/components/Expertise/ExpertiseDetailsContent";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import { getExpertise, getExpertiseItem, getSettings } from "@/lib/api";

type ExpertiseDetailsPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ExpertiseDetailsPage({
  params,
}: ExpertiseDetailsPageProps) {
  const { slug } = await params;
  const [current, allItems, settings] = await Promise.all([
    getExpertiseItem(slug),
    getExpertise(),
    getSettings(),
  ]);

  if (!current) notFound();

  return (
    <>
      <Navbar />
      <PageBanner pageTitle={current.title} BGImage="/images/page-banner3.jpg" />
      <ExpertiseDetailsContent current={current} allItems={allItems} />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
