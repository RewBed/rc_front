import {
  type ExpertiseItem,
  type Project,
  type ServiceItem,
  type Setting,
  type WorkArea,
  fallbackExpertise,
  fallbackServices,
  fallbackSettings,
  fallbackWorkAreas,
} from "./content-data";
import { projectPortfolioData as fallbackProjects } from "./project-portfolio-data";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";
const API_ORIGIN = API.replace(/\/api\/?$/, "");
type ActiveItem = { isActive?: boolean };

const assetUrl = (url: string | null | undefined) =>
  typeof url === "string" && url.startsWith("/uploads/")
    ? `${API_ORIGIN}${url}`
    : url;

async function fetchContent<T>(path: string, fallback: T): Promise<T> {
  try {
    const response = await fetch(`${API}${path}`, {
      cache: "no-store",
    });
    if (!response.ok) return fallback;
    return (await response.json()) as T;
  } catch {
    return fallback;
  }
}

const activeOnly = <T extends ActiveItem>(items: T[]) =>
  items.filter((item) => item.isActive !== false);

const normalizeExpertise = (item: ExpertiseItem): ExpertiseItem => ({
  ...item,
  detailPath: `/expertise/${item.slug}/`,
  imageUrl: assetUrl(item.imageUrl) ?? item.imageUrl,
});

const normalizeService = (item: ServiceItem): ServiceItem => ({
  ...item,
  detailPath: `/services/${item.slug}/`,
});

const normalizeProject = (item: Project): Project => ({
  ...item,
  imageUrls: item.imageUrls.map((url) => assetUrl(url) ?? url),
});

const normalizeWorkArea = (item: WorkArea): WorkArea => ({
  ...item,
  imageUrl: assetUrl(item.imageUrl) ?? item.imageUrl,
  shapeImageUrl: assetUrl(item.shapeImageUrl) ?? item.shapeImageUrl,
});

export const getServices = () =>
  fetchContent<ServiceItem[]>("/services", fallbackServices).then((items) =>
    activeOnly(items).map(normalizeService),
  );

export const getService = (slug: string) =>
  fetchContent<ServiceItem | null>(
    `/services/${slug}`,
    fallbackServices.find((service) => service.slug === slug) ?? null,
  ).then((service) =>
    service?.isActive === false
      ? null
      : service
        ? normalizeService(service)
        : null,
  );

export const getProjects = () =>
  fetchContent<Project[]>("/projects", fallbackProjects).then((items) =>
    activeOnly(items).map(normalizeProject),
  );

export const getProject = (slug: string) =>
  fetchContent<Project | null>(
    `/projects/${slug}`,
    fallbackProjects.find((project) => project.slug === slug) ?? null,
  ).then((project) =>
    project?.isActive === false
      ? null
      : project
        ? normalizeProject(project)
        : null,
  );

export const getWorkAreas = () =>
  fetchContent<WorkArea[]>("/work-areas", fallbackWorkAreas).then((items) =>
    activeOnly(items).map(normalizeWorkArea),
  );

export const getWorkArea = (slug: string) =>
  getWorkAreas().then(
    (workAreas) => workAreas.find((workArea) => workArea.slug === slug) ?? null,
  );

export const getExpertise = () =>
  fetchContent<ExpertiseItem[]>("/expertise", fallbackExpertise).then((items) =>
    activeOnly(items).map(normalizeExpertise),
  );

export const getExpertiseItem = (slug: string) =>
  getExpertise().then(
    (expertise) => expertise.find((item) => item.slug === slug) ?? null,
  );

export const getSettings = () =>
  fetchContent<Setting[]>("/settings", fallbackSettings);
