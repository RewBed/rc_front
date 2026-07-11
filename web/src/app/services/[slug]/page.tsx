import { notFound } from "next/navigation";
import CtaArea from "@/components/Common/CtaArea";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import ServiceDetailsContent from "@/components/Services/ServiceDetailsContent";
import { getService, getServices, getSettings } from "@/lib/api";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const [service, services, settings] = await Promise.all([
    getService(slug),
    getServices(),
    getSettings(),
  ]);

  if (!service) notFound();

  return (
    <>
      <Navbar />
      <PageBanner pageTitle={service.title} BGImage="/images/page-banner4.jpg" />
      <ServiceDetailsContent
        service={service}
        relatedServices={services.filter((item) => item.slug !== service.slug)}
      />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
