import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 5,
    paddingBottom: 2,
    paddingTop: 1,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  imageContainer: {
    width: 56,
    height: 56,
    borderWidth: 2,
    borderColor: "#3b82f6", // Blue-500
    borderRadius: 12,
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
    fontSize: 22,
    fontWeight: "900",
    color: "#000000", // Pure black for modern contrast
    letterSpacing: -0.5,
  },
  role: {
    fontSize: 15.5,
    fontWeight: "500",
    color: "#0369a1", // Cyan-700 (modern accent)
    marginTop: 0.5,
    letterSpacing: 0.2,
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
    fontSize: 13,
    fontWeight: 900,
    color: "#0369a1", // Cyan-700 (modern vibrant)
    marginBottom: 1.5,
    paddingBottom: 0.3,
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 11.5,
    fontWeight: "800",
    color: "#000000", // Black for modern contrast
    marginBottom: 1,
    letterSpacing: -0.2,
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
    backgroundColor: "#e0f2fe", // Sky-100 (modern light)
    borderRadius: 8,
    paddingVertical: 0.3,
    paddingHorizontal: 4,
    fontSize: 8.5,
    color: "#0c4a6e", // Sky-900 (modern dark)
    borderWidth: 1,
    borderColor: "#7dd3fc", // Sky-300 (modern accent)
  },
  contactLink: {
    fontSize: 9,
    color: "#0369a1", // Cyan-700 (modern)
    textDecoration: "underline",
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
    height: 2,
    backgroundColor: "#0369a1", // Cyan-700 accent
  },
});
