"use client";

import { motion } from "framer-motion";
import { skillsData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";
import { SkillGroup } from "@/types";

export default function Skills() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="py-24 px-6 md:px-16 lg:px-32 bg-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Heading */}
        <motion.div
          variants={fadeUpVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="mb-16"
        >
          <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-2">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Skills
          </h2>
        </motion.div>

        {/* Skill Groups */}
        <div className="flex flex-col gap-12">
          {skillsData.map((group: SkillGroup, groupIndex: number) => (
            <motion.div
              key={group.category}
              variants={fadeUpVariant}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={groupIndex * 0.1}
              className="flex flex-col md:flex-row md:items-start gap-4 md:gap-16"
            >
              {/* Category Label */}
              <div className="w-32 shrink-0">
                <span className="text-sm font-semibold text-gray-400 uppercase tracking-widest">
                  {group.category}
                </span>
              </div>

              {/* Skill Pills */}
              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill: string) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-50 border border-gray-200 text-gray-700 text-sm font-medium rounded-full hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}