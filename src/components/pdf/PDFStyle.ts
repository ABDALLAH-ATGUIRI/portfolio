import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8, // Consistent with prior optimization
    paddingBottom: 4,
  },
  profileSection: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  imageContainer: {
    width: 64, // Smaller than 48
    height: 64,
    borderWidth: 1,
    borderColor: "#bfdbfe", // Blue-200
    borderRadius: 1,
    overflow: "hidden", // Clip for zoom effect
  },
  profileImage: {
    width: 100, // Larger than container for zoom
    height: 68,
    position: "absolute",
    top: -5, // Center vertically
    left: -18, // Center horizontally
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#1e40af", // Blue-800
  },
  role: {
    fontSize: 17,
    color: "#4b5563", // Gray-600
    marginTop: 1,
  },
  contactSection: {
    flexDirection: "column",
    alignItems: "flex-start", // Changed from flex-end to left-align
    justifyContent: "center",
  },
  contactItem: {
    fontSize: 7.5,
    color: "#4b5563", // Gray-600
    marginBottom: 2,
  },
  sectionTitle: {
    fontSize: 10,
    fontWeight: 900,
    color: "#1e40af",
    marginBottom: 3,
    paddingBottom: 1,
  },
  title: {
    fontSize: 10,
    fontWeight: 700, // Bold (700)
    color: "#1f2937", // gray-800
    marginBottom: 1.5, // Reduced from 2
  },
  subtitle: {
    fontSize: 8,
    color: "#6b7280", // gray-500
    fontStyle: "italic",
    marginBottom: 3,
  },
  countentText: {
    fontSize: 9.5,
    color: "#4b5563",
    marginLeft: 10,
    marginBottom: 4,
    lineHeight: 1.4,
  },
  skillGroup: {
    flex: "1 0 48%", // Tighter two-column layout
    marginBottom: 3, // Reduced from 4
  },
  chipContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 2, // Reduced from 3
  },
  chip: {
    backgroundColor: "#f3f4f6", // Gray-100
    borderRadius: 6, // Smaller
    paddingVertical: 0.3, // Reduced from 0.5
    paddingHorizontal: 4, // Reduced from 5
    fontSize: 8, // Reduced from 7
    color: "#4b5563", // Gray-600
  },
  contactLink: {
    fontSize: 8,
    color: "#2563eb", // Blue-600
    textDecoration: "none",
  },
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 30,
    paddingTop: 5,
  },
});
