export type CvVersion = "fullstack" | "backend" | "frontend";

export interface CvVersionConfig {
  roleKey: string;
  summaryKey: string;
  skillIds: number[];
  projectKeys: string[];
  fileName: string;
  label: string;
}

export const CV_VERSION_CONFIG: Record<CvVersion, CvVersionConfig> = {
  fullstack: {
    roleKey: "cv_versions.fullstack.role",
    summaryKey: "cv_versions.fullstack.summary",
    skillIds: [1, 2, 3, 4],
    projectKeys: ["project_1", "project_2", "project_3", "project_4"],
    fileName: "abdallah-atguiri-fullstack-cv.pdf",
    label: "cv_versions.fullstack.label",
  },
  backend: {
    roleKey: "cv_versions.backend.role",
    summaryKey: "cv_versions.backend.summary",
    skillIds: [2, 3, 4],
    projectKeys: ["project_2", "project_3"],
    fileName: "abdallah-atguiri-backend-cv.pdf",
    label: "cv_versions.backend.label",
  },
  frontend: {
    roleKey: "cv_versions.frontend.role",
    summaryKey: "cv_versions.frontend.summary",
    skillIds: [1, 4],
    projectKeys: ["project_1", "project_3", "project_4"],
    fileName: "abdallah-atguiri-frontend-cv.pdf",
    label: "cv_versions.frontend.label",
  },
};
