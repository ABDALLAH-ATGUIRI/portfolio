import React from "react";
import { View, Text, Image, Link } from "@react-pdf/renderer";
import { usePortfolio } from "@/hooks/usePortfolio";
import { useTranslation } from "@/hooks/useTranslation";
import { Contact } from "@/types";
import { styles } from "../PDFStyle";

export const CVHeader: React.FC = () => {
  const { me, contactLinks } = usePortfolio();
  const { image } = me;
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <View style={styles.profileSection}>
        <View style={styles.imageContainer}>
          <Image src={image} style={styles.profileImage} />
        </View>
        <View>
          <Text style={styles.name}>{t("developer.name")}</Text>
          <Text style={styles.role}>{t("developer.role")}</Text>
        </View>
      </View>
      <View style={styles.contactSection}>
        <Text style={styles.contactItem}>
          {t("developer.phone")} | {t("developer.email")}
        </Text>
        {contactLinks
          .filter(({ ariaLabel }: Contact) => ariaLabel !== "Email")
          .map(({ href, ariaLabel }: Contact, index) => (
            <View style={styles.contactRow} key={index}>
              <Text style={styles.contactLabel}>{ariaLabel}:</Text>
              <Link src={href} style={styles.contactLink}>
                {href.replace(/^https?:\/\/(www\.)?/, "")}
              </Link>
            </View>
          ))}
      </View>
    </View>
  );
};
