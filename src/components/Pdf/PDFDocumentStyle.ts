import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 24,
    backgroundColor: "#ffffff",
    fontFamily: "Helvetica", // Use default font
    fontSize: 9,
    color: "#374151",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#3b82f6", // blue-500
    paddingBottom: 6,
  },
  headerLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "#dbeafe", // blue-100
  },
  name: {
    fontSize: 20,
    fontWeight: 700, // Explicitly use bold (700)
    color: "#1e40af", // blue-800
  },
  title: {
    fontSize: 12,
    color: "#4b5563", // gray-600
    marginTop: 2,
  },
  contactContainer: {
    alignItems: "flex-end",
  },
  contact: {
    fontSize: 8,
    color: "#6b7280", // gray-500
    marginBottom: 2,
  },
  linkContainer: {
    flexDirection: "row",
    gap: 8,
    marginTop: 4,
  },
  link: {
    fontSize: 8,
    color: "#2563eb", // blue-600
    textDecoration: "none",
  },
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 700, // Bold (700)
    color: "#1e40af", // blue-800
    marginBottom: 4,
    borderBottomWidth: 1,
    borderBottomColor: "#dbeafe", // blue-100
    paddingBottom: 2,
  },
  text: {
    fontSize: 9,
    color: "#4b5563", // gray-600
    lineHeight: 1.4,
    marginBottom: 3,
  },
  experienceItem: {
    marginBottom: 8,
  },
  companyName: {
    fontSize: 10,
    fontWeight: 700, // Bold (700)
    color: "#1f2937", // gray-800
  },
  date: {
    fontSize: 8,
    color: "#6b7280", // gray-500
    fontStyle: "italic",
    marginBottom: 3,
  },
  bulletPoint: {
    fontSize: 9,
    color: "#4b5563", // gray-600
    marginLeft: 10,
    marginBottom: 3,
    lineHeight: 1.4,
  },
  skillsGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 4,
  },
  skillItem: {
    backgroundColor: "#eff6ff", // blue-50
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 3,
    borderWidth: 1,
    borderColor: "#dbeafe", // blue-100
  },
  skillText: {
    fontSize: 8,
    color: "#1e40af", // blue-800
  },
  projectItem: {
    marginBottom: 6,
  },
  projectTitle: {
    fontSize: 10,
    fontWeight: 700, // Bold (700)
    color: "#1f2937", // gray-800
  },
  languagesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
  },
  languageItem: {
    flexDirection: "row",
    gap: 3,
  },
  footer: {
    position: "absolute",
    bottom: 16,
    left: 24,
    right: 24,
    textAlign: "center",
    fontSize: 7,
    color: "#9ca3af", // gray-400
    borderTopWidth: 1,
    borderTopColor: "#e5e7eb", // gray-200
    paddingTop: 4,
  },
});

export default styles;
