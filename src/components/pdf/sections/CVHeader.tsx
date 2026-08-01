import React from "react";
import { View, Text, Image, Link } from "@react-pdf/renderer";
import { usePortfolio } from "@/hooks/usePortfolio";
import { useTranslation } from "@/hooks/useTranslation";
import { styles } from "../PDFStyle";

const stripUrl = (href: string) =>
  href.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

/** Header with photo + name, role, and contact links */
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

  return (
    <View style={styles.header}>
      <View style={styles.imageContainer}>
        <Image src={me.image} style={styles.profileImage} />
      </View>

      <View style={styles.headerText}>
        <Text style={styles.name}>{t("developer.name")}</Text>
        <Text style={styles.role}>{t("developer.role")}</Text>

        <Text style={styles.contactLine}>
          {t("developer.location")}  ·  {t("developer.phone")}  ·  {t("developer.email")}
        </Text>

        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          {links.map((link, i) => (
            <Text key={link.href} style={styles.contactLine}>
              <Link src={link.href} style={styles.contactLink}>
                {link.label}
              </Link>
              {i < links.length - 1 ? "  ·  " : ""}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};
