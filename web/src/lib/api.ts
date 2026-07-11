import {
  type ExpertiseItem,
  type Project,
  type ServiceItem,
  type Setting,
  type WorkArea,
  fallbackExpertise,
  fallbackProjects,
  fallbackServices,
  fallbackSettings,
  fallbackWorkAreas,
} from "./content-data";

const API = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3001/api";
type ActiveItem = { isActive?: boolean };

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
});

export const getServices = () =>
  fetchContent<ServiceItem[]>("/services", fallbackServices).then(activeOnly);

export const getProjects = () =>
  fetchContent<Project[]>("/projects", fallbackProjects).then(activeOnly);

export const getProject = (slug: string) =>
  fetchContent<Project | null>(
    `/projects/${slug}`,
    fallbackProjects.find((project) => project.slug === slug) ?? null,
  ).then((project) => (project?.isActive === false ? null : project));

export const getWorkAreas = () =>
  fetchContent<WorkArea[]>("/work-areas", fallbackWorkAreas).then(activeOnly);

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
