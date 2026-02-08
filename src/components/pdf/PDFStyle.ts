import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
    paddingBottom: 1.5,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  imageContainer: {
    width: 54,
    height: 54,
    borderWidth: 1,
    borderColor: "#bfdbfe", // Blue-200
    borderRadius: 1,
    overflow: "hidden", // Clip for zoom effect
  },
  profileImage: {
    width: 84,
    height: 58,
    position: "absolute",
    top: -3,
    left: -14,
  },
  name: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#0f172a", // Slate-900
  },
  role: {
    fontSize: 13.5,
    color: "#334155", // Slate-700
    marginTop: 1,
  },
  contactSection: {
    flexDirection: "column",
    alignItems: "flex-start", // Changed from flex-end to left-align
    justifyContent: "center",
  },
  contactItem: {
    fontSize: 9,
    color: "#475569", // Slate-600
    marginBottom: 1.2,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 900,
    color: "#1d4ed8", // Blue-700
    marginBottom: 1.5,
    paddingBottom: 0.3,
  },
  title: {
    fontSize: 11,
    fontWeight: 700, // Bold (700)
    color: "#111827", // Gray-900
    marginBottom: 0.8,
  },
  subtitle: {
    fontSize: 9.5,
    color: "#475569", // Slate-600
    fontStyle: "italic",
    marginBottom: 1.8,
  },
  countentText: {
    fontSize: 10.5,
    color: "#374151", // Gray-700
    marginLeft: 5,
    marginBottom: 1.8,
    lineHeight: 1.28,
  },
  skillGroup: {
    flex: "1 0 48%", // Tighter two-column layout
    marginBottom: 1.8,
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 1,
  },
  chip: {
    backgroundColor: "#f8fafc", // Slate-50
    borderRadius: 4,
    paddingVertical: 0.15,
    paddingHorizontal: 3,
    fontSize: 9,
    color: "#334155", // Slate-700
  },
  contactLink: {
    fontSize: 9,
    color: "#1d4ed8", // Blue-700
    textDecoration: "none",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    paddingTop: 1.5,
  },
  sectionWrapper: {
    marginBottom: 1.6,
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 1.6,
  },
  sectionDivider: {
    flex: 1,
    height: 1,
    backgroundColor: "#e2e8f0",
  },
});
