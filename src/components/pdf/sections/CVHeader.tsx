import React from "react";
import { View, Text, Image, Link } from "@react-pdf/renderer";
import { contactLinks, me } from "@/data";
import useTranslation from "@/hooks/useTranslation";
import { Contact } from "@/types";
import { styles } from "../PDFStyle";

export const CVHeader: React.FC = () => {
  const { image } = me;
  const { t } = useTranslation();

  return (
    <View style={styles.header}>
      <View style={styles.profileSection}>
        <View style={styles.imageContainer}>
          <Image
            src={image || "https://via.placeholder.com/48"}
            style={styles.profileImage}
          />
        </View>
        <View>
          <Text style={styles.name}>{t("developer.name")}</Text>
          <Text style={styles.role}>{t("developer.role")}</Text>
        </View>
      </View>
      <View style={styles.contactSection}>
        <Text style={styles.contactItem}>
          Address : {t("developer.location")}
        </Text>
        <Text style={styles.contactItem}>
          Phone : {t("developer.phone")}
        </Text>
        {contactLinks.map(({ href, ariaLabel }: Contact, index) => (
          <Text style={styles.contactItem} key={index}>
            {ariaLabel} :{" "}
            <Link key={index} src={href} style={styles.contactLink}>
              {href.replace(/^https?:\/\//, "")}{" "}
            </Link>
          </Text>
        ))}
      </View>
    </View>
  );
};
