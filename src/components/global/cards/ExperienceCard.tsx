import React, { memo } from "react";
import Experience from "@/types/experience";
import useTranslation from "@/hooks/useTranslation";
import Chip from "@/components/global/Chip";

// Define props interface
interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = memo(
  ({ experience }): JSX.Element => {
    const { t } = useTranslation();
    const { company_name, companyLogo, technical_skills } = experience;

    return (
      <div className="dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full p-8">
        {/* Header with Logo and Title */}
        <div className="flex items-center gap-4 mb-4">
          {companyLogo && (
            <img
              src={companyLogo}
              alt={`${company_name} logo`}
              className="w-14 h-14 object-contain rounded-full border-2 border-gray-200 dark:border-gray-600 p-1 bg-white"
              loading="lazy"
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white tracking-tight">
              {t(`experience.companies.${company_name}.position`)}
            </h3>
            <p className="text-blue-600 dark:text-blue-300 font-semibold text-sm mt-1">
              {t(`experience.companies.${company_name}.title`)}
            </p>
          </div>
        </div>
        {/* Date Range */}
        <p className="text-gray-500 dark:text-gray-400 text-sm italic mb-4 bg-gray-50 dark:bg-gray-900 px-3 py-1 rounded-full inline-block">
          {t(`experience.companies.${company_name}.date`)}
        </p>
        {/* Description */}
        <p className="text-gray-600 dark:text-gray-200 text-base leading-relaxed mb-4">
          {t(`experience.companies.${company_name}.description`)}
        </p>
        {/* Skills */}
        {technical_skills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {technical_skills.map((skill, index) => (
              <Chip key={index} text={skill} />
            ))}
          </div>
        )}
      </div>
    );
  }
);

ExperienceCard.displayName = "ExperienceCard";
export default ExperienceCard;
