import { motion } from "motion/react";
import { skills } from "../data/skills";
import { useTranslation } from "react-i18next";
import SEO from "../components/SEO";

function Skills() {
  const { t, i18n } = useTranslation();

  return (
    <>
      <SEO
        title={
          i18n.language === "ar"
            ? "المهارات | عمر زكيط - مطور ويب"
            : "Compétences | Omar Zguit - Développeur Web"
        }
        description={
          i18n.language === "ar"
            ? "اكتشف المهارات التقنية والتقنيات التي يستخدمها عمر زكيط بما في ذلك React وJavaScript وLaravel وPHP وMySQL وأدوات تطوير الويب الحديثة."
            : "Découvrez les compétences techniques et les technologies utilisées par Omar Zguit, notamment React, JavaScript, Laravel, PHP, MySQL et les outils modernes de développement web."
        }
        canonical="https://omarzguit.me/skills"
      />
      <div className="p-2 md:p-6 max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xl md:text-2xl font-bold mb-6"
        >
          {t("skills.title")}
        </motion.h2>

        {skills.map((skill, index) => (
          <motion.div key={index}>
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              {t(skill.category)}
            </h3>

            <div className="space-y-4">
              {skill.items.map((s, i) => {
                const Icon = s.icon;

                return (
                  <div key={i} className="flex items-center w-full gap-2">
                    <div className="text-xl">
                      <Icon size={22} />
                    </div>

                    <div className="flex-1 min-w-0 mb-4">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium text-gray-300">
                          {t(s.name)}
                        </span>

                        <span className="text-sm font-medium text-gray-300">
                          {s.level}
                        </span>
                      </div>

                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                          duration: 0.5,
                          delay: i * 0.1,
                        }}
                        className="h-2.5 bg-gray-700 rounded-full"
                      >
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${s.level}%` }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                          }}
                          className="h-2.5 bg-blue-600 rounded-full"
                        />
                      </motion.div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
}

export default Skills;
