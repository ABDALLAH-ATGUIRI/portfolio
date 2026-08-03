import React from "react";
import { View, Text, Image, Link } from "@react-pdf/renderer";
import { usePortfolio } from "@/hooks/usePortfolio";
import { useTranslation } from "@/hooks/useTranslation";
import { styles } from "../PDFStyle";

const stripUrl = (href: string) =>
  href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Compact header — photo + name, role, contact (one-page) */
export const CVHeader: React.FC = () => {
  const { me, contactLinks } = usePortfolio();
  const { t } = useTranslation();

  const github = contactLinks.find((c) => c.ariaLabel === "GitHub")?.href;
  const linkedin = contactLinks.find((c) => c.ariaLabel === "LinkedIn")?.href;
  const portfolio = contactLinks.find((c) => c.ariaLabel === "Portfolio")?.href;

  const links = [
    portfolio && { href: portfolio, label: stripUrl(portfolio) },
    linkedin && { href: linkedin, label: stripUrl(linkedin) },
    github && { href: github, label: stripUrl(github) },
  ].filter(Boolean) as { href: string; label: string }[];

  // Machine-readable identity (ASCII) so contact always works on ATS parsers
  const phone = me.phone || t("developer.phone");
  const email = me.email || t("developer.email");
  const location = t("developer.location");

  return (
    <View style={styles.header} wrap={false}>
      <View style={styles.imageContainer}>
        <Image src={me.image} style={styles.profileImage} />
      </View>

      <View style={styles.headerText}>
        <Text style={styles.name}>{t("developer.name")}</Text>
        <Text style={styles.role}>{t("developer.role")}</Text>

        <Text style={styles.contactLine}>
          {location}  ·  {phone}  ·  {email}
        </Text>

        <Text style={styles.contactLine}>
          {links.map((link, i) => (
            <Text key={link.href}>
              <Link src={link.href} style={styles.contactLink}>
                {link.label}
              </Link>
              {i < links.length - 1 ? "  ·  " : ""}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
};
