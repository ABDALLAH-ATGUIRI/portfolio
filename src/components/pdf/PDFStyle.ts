import { StyleSheet } from "@react-pdf/renderer";

/**
 * ATS-friendly CV theme
 * - Standard Helvetica (embedded, machine-readable)
 * - High-contrast near-black body text
 * - Single navy accent for section headers
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

export const styles = StyleSheet.create({
  page: {
    paddingTop: 28,
    paddingBottom: 28,
    paddingHorizontal: 36,
    backgroundColor: colors.white,
    fontFamily: "Helvetica",
    fontSize: 9.5,
    color: colors.text,
    lineHeight: 1.35,
  },

  /* ── Header ─────────────────────────────────────────── */
  header: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 10,
    paddingBottom: 8,
    borderBottomWidth: 2,
    borderBottomColor: colors.accent,
  },
  imageContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    overflow: "hidden",
    borderWidth: 1.5,
    borderColor: colors.accent,
    flexShrink: 0,
  },
  profileImage: {
    width: 84,
    height: 58,
    position: "absolute",
    top: -1,
    left: -14,
  },
  headerText: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontFamily: "Helvetica-Bold",
    color: colors.accent,
    letterSpacing: 0.4,
    textTransform: "uppercase",
    marginBottom: 2,
  },
  role: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.muted,
    marginBottom: 4,
  },
  contactLine: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: colors.text,
    marginBottom: 2,
    lineHeight: 1.4,
  },
  contactLink: {
    fontSize: 8.5,
    fontFamily: "Helvetica",
    color: colors.link,
    textDecoration: "none",
  },

  /* ── Sections ───────────────────────────────────────── */
  sectionWrapper: {
    marginBottom: 8,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: colors.line,
    paddingBottom: 2,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.accent,
    textTransform: "uppercase",
    letterSpacing: 1.1,
  },

  /* ── Typography ─────────────────────────────────────── */
  title: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: colors.text,
  },
  subtitle: {
    fontSize: 9,
    fontFamily: "Helvetica",
    color: colors.muted,
    marginBottom: 1,
  },
  date: {
    fontSize: 9,
    fontFamily: "Helvetica",
    color: colors.muted,
  },
  contentText: {
    fontSize: 9.5,
    fontFamily: "Helvetica",
    color: colors.text,
    marginBottom: 1,
    lineHeight: 1.35,
  },
  skillLine: {
    fontSize: 9,
    fontFamily: "Helvetica",
    color: colors.text,
    marginBottom: 2,
    lineHeight: 1.35,
  },
  skillLabel: {
    fontFamily: "Helvetica-Bold",
    color: colors.text,
  },
  techLine: {
    fontSize: 8.5,
    fontFamily: "Helvetica-Oblique",
    color: colors.muted,
    marginTop: 1,
  },

  /* ── Layout helpers ─────────────────────────────────── */
  rowBetween: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  entry: {
    marginBottom: 6,
  },
  twoCol: {
    flexDirection: "row",
    gap: 16,
  },
  col: {
    flex: 1,
  },
});
