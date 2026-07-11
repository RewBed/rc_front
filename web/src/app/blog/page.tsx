import CtaArea from "@/components/Common/CtaArea";
import PageBanner from "@/components/Common/PageBanner";
import ExpertiseGrid from "@/components/Expertise/ExpertiseGrid";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import { getExpertise, getSettings } from "@/lib/api";

type BlogPageProps = {
  searchParams?: Promise<{ tag?: string }>;
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const query = await searchParams;
  const [expertise, settings] = await Promise.all([
    getExpertise(),
    getSettings(),
  ]);

  return (
    <>
      <Navbar />
      <PageBanner pageTitle="Экспертиза" BGImage="/images/page-banner3.jpg" />
      <ExpertiseGrid expertise={expertise} initialTag={query?.tag ?? null} />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
