import { motion } from "motion/react";
import { skills } from "../data/skills";

function Skills() {
  return (
    <div className="p-6 max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold mb-6"
      >
        Skills & Expritse
      </motion.h2>

      {skills.map((skill, index) => (
        <motion.div key={index}>
          <h3 className="text-xl font-semibold mb-4 text-blue-400 ">
            {skill.category}
          </h3>
          <div className="space-y-4">
            {skill.items.map((s, i) => {
              const Icon = s.icon;
              return (
                <div className="flex items-center w-full gap-2">
                  <div className="text-xl">
                    <Icon size={22}/>
                  </div>
                  <div className=" flex-1 min-w-0 mb-4" key={i}>
                    <div className="flex justify-between">
                      <span className="text-sm font-medium text-gray-300">
                        {s.name}
                      </span>
                      <span className="text-sm font-medium text-gray-300">
                        {s.level}
                      </span>
                    </div>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="h-2.5 bg-gray-700 rounded-full"
                    >
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${s.level}%` }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
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
  );
}

export default Skills;
