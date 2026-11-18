export type CvVersion = "fullstack" | "backend" | "frontend";

export interface CvVersionConfig {
  roleKey: string;
  summaryKey: string;
  skillIds: number[];
  /** Exactly 2 strongest projects — required for one-page CV */
  projectKeys: string[];
  /**
   * Top certificates only (2–3). Keeps one-page CV + matches what recruiters expect.
   * Full list stays on the website Summary.
   */
  certificateKeys: string[];
  fileName: string;
  label: string;
}

/**
 * CV versions must remain ONE A4 page in EN / FR / AR.
 * Keep skillIds lean (include AI + DevOps/Linux) and projectKeys at exactly 2.
 * certificateKeys: role-relevant only — not every cert from the site.
 */
export const CV_VERSION_CONFIG: Record<CvVersion, CvVersionConfig> = {
  fullstack: {
    roleKey: "cv_versions.fullstack.role",
    summaryKey: "cv_versions.fullstack.summary",
    // AI · Front · Back · DevOps (Linux/Docker/AWS) · DB
    skillIds: [5, 1, 2, 6, 3],
    projectKeys: ["fleetava", "atg_labs"],
    certificateKeys: ["devops_engineering", "meta_frontend", "ibm_backend"],
    fileName: "abdallah-atguiri-fullstack-cv.pdf",
    label: "cv_versions.fullstack.label",
  },
  backend: {
    roleKey: "cv_versions.backend.role",
    summaryKey: "cv_versions.backend.summary",
    // AI · Back · DevOps · DB
    skillIds: [5, 2, 6, 3],
    projectKeys: ["fleetava", "atg_labs"],
    certificateKeys: ["devops_engineering", "ibm_backend"],
    fileName: "abdallah-atguiri-backend-cv.pdf",
    label: "cv_versions.backend.label",
  },
  frontend: {
    roleKey: "cv_versions.frontend.role",
    summaryKey: "cv_versions.frontend.summary",
    // AI · Front · DevOps tools (Linux/CI useful everywhere)
    skillIds: [5, 1, 6],
    projectKeys: ["fleetava", "atg_labs"],
    certificateKeys: ["meta_frontend", "devops_engineering"],
    fileName: "abdallah-atguiri-frontend-cv.pdf",
    label: "cv_versions.frontend.label",
  },
};
