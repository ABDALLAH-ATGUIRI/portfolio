import { StyleSheet } from "@react-pdf/renderer";

/**
 * ATS-friendly, ONE-PAGE A4 CV theme (all languages / versions).
 * Keep density high so FR/AR expansions still fit a single page.
 * - Helvetica (embedded, machine-readable)
 * - High-contrast near-black body text
 * - Navy accent for section headers
 * - No chip backgrounds (parsers misread pill UIs)
 */
export const colors = {
  text: "#111827",
  muted: "#4b5563",
  accent: "#0f172a",
  line: "#cbd5e1",
  link: "#1e40af",
  white: "#ffffff",
} as const;

/** Max list lengths — protect one-page fit */
export const CV_LIMITS = {
  skillsPerGroup: 7,
  techPerExperience: 6,
  techPerProject: 5,
} as const;

export const styles = StyleSheet.create({
  page: {
    paddingTop: 22,
    paddingBottom: 20,
    paddingHorizontal: 30,
    backgroundColor: colors.white,
    fontFamily: "Helvetica",
    fontSize: 9,
    color: colors.text,
    lineHeight: 1.28,
  },

  /* ── Header ─────────────────────────────────────────── */
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 7,
    paddingBottom: 6,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.accent,
  },
  imageContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    overflow: "hidden",
    borderWidth: 1.25,
    borderColor: colors.accent,
    flexShrink: 0,
  },
  profileImage: {
    width: 72,
    height: 50,
    position: "absolute",
    top: -1,
    left: -12,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 15,
    fontFamily: "Helvetica-Bold",
    color: colors.accent,
    letterSpacing: 0.3,
    textTransform: "uppercase",
    marginBottom: 1,
  },
  role: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.muted,
    marginBottom: 3,
  },
  contactLine: {
    fontSize: 8,
    fontFamily: "Helvetica",
    color: colors.text,
    marginBottom: 1,
    lineHeight: 1.3,
  },
  contactLink: {
    fontSize: 8,
    fontFamily: "Helvetica",
    color: colors.link,
    textDecoration: "none",
  },

  /* ── Sections ───────────────────────────────────────── */
  sectionWrapper: {
    marginBottom: 6,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 1.5,
  },
  sectionTitle: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 0.9,
  },

  /* ── Typography ─────────────────────────────────────── */
  title: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: colors.text,
  },
  subtitle: {
    fontSize: 8,
    fontFamily: "Helvetica",
    color: colors.muted,
    marginBottom: 1,
  },
  date: {
    fontSize: 8,
    fontFamily: "Helvetica",
    color: colors.muted,
  },
  contentText: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: colors.text,
    marginBottom: 1,
    lineHeight: 1.28,
  },
  skillLine: {
    fontSize: 8,
    fontFamily: "Helvetica",
    color: colors.text,
    marginBottom: 1.5,
    lineHeight: 1.28,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    color: colors.text,
  },
  techLine: {
    fontSize: 7.5,
    fontFamily: "Helvetica-Oblique",
    color: colors.muted,
    marginTop: 0.5,
  },

  /* ── Layout helpers ─────────────────────────────────── */
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 0.5,
  },
  entry: {
    marginBottom: 4,
  },
  twoCol: {
    flexDirection: "row",
    gap: 12,
  },
  col: {
    flex: 1,
  },
});
