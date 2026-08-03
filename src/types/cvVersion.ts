export type CvVersion = "fullstack" | "backend" | "frontend";

export interface CvVersionConfig {
  roleKey: string;
  summaryKey: string;
  skillIds: number[];
  /** Exactly 2 strongest projects for a one-page CV */
  projectKeys: string[];
  fileName: string;
  label: string;
}

export const CV_VERSION_CONFIG: Record<CvVersion, CvVersionConfig> = {
  fullstack: {
    roleKey: "cv_versions.fullstack.role",
    summaryKey: "cv_versions.fullstack.summary",
    skillIds: [5, 1, 2, 4, 3],
    projectKeys: ["atg_labs", "mongestion"],
    fileName: "abdallah-atguiri-fullstack-cv.pdf",
    label: "cv_versions.fullstack.label",
  },
  backend: {
    roleKey: "cv_versions.backend.role",
    summaryKey: "cv_versions.backend.summary",
    skillIds: [5, 2, 3, 4],
    projectKeys: ["atg_labs", "mongestion"],
    fileName: "abdallah-atguiri-backend-cv.pdf",
    label: "cv_versions.backend.label",
  },
  frontend: {
    roleKey: "cv_versions.frontend.role",
    summaryKey: "cv_versions.frontend.summary",
    skillIds: [5, 1, 4],
    projectKeys: ["atg_labs", "mongestion"],
    fileName: "abdallah-atguiri-frontend-cv.pdf",
    label: "cv_versions.frontend.label",
  },
};
