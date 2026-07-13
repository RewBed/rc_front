import { notFound } from "next/navigation";
import CtaArea from "@/components/Common/CtaArea";
import PageBanner from "@/components/Common/PageBanner";
import Footer from "@/components/Layouts/Footer";
import Navbar from "@/components/Layouts/Navbar";
import ProjectDetailsContent from "@/components/Portfolio/ProjectDetailsContent";
import { getProject, getSettings } from "@/lib/api";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [project, settings] = await Promise.all([
    getProject(slug),
    getSettings(),
  ]);

  if (!project) notFound();

  return (
    <>
      <Navbar />
      <PageBanner
        pageTitle={project.title}
        BGImage="/images/page-banner-projects-artel.jpg"
      />
      <ProjectDetailsContent project={project} />
      <CtaArea />
      <Footer settings={settings} />
    </>
  );
}
