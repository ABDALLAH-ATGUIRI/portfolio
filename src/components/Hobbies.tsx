import React from "react";
import { Hobby } from "@/types";
import useTranslation from "@/hooks/useTranslation";
import { hobbies } from "@/data";
import Chip from "@/components/global/Chip";
import { SectionLayout } from "@/components/layouts/SectionLayout";

export const Hobbies: React.FC = () => {
  const { t } = useTranslation();

  return (
    <SectionLayout id="hobbies" title={t("hobbies.title")}>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {hobbies.map(({ icon: Icon, name }: Hobby, index: number) => (
          <li key={`hobby-${index}`}>
            <Chip
              text={t(`hobbies.${name}.name`)}
              icon={<Icon />}
              className="contact-button [&>svg]:!text-md w-full !px-5 !py-2"
            />
          </li>
        ))}
      </ul>
    </SectionLayout>
  );
};
