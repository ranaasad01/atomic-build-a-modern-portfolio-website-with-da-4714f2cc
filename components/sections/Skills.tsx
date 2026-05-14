"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { skillCategories } from "@/data/skills";

const colorMap: Record<string, { bg: string; text: string; border: string; dot: string }> = {
  indigo: {
    bg: "bg-indigo-50 dark:bg-indigo-500/10",
    text: "text-indigo-700 dark:text-indigo-300",
    border: "border-indigo-200 dark:border-indigo-500/20",
    dot: "bg-indigo-500",
  },
  violet: {
    bg: "bg-violet-50 dark:bg-violet-500/10",
    text: "text-violet-700 dark:text-violet-300",
    border: "border-violet-200 dark:border-violet-500/20",
    dot: "bg-violet-500",
  },
  purple: {
    bg: "bg-purple-50 dark:bg-purple-500/10",
    text: "text-purple-700 dark:text-purple-300",
    border: "border-purple-200 dark:border-purple-500/20",
    dot: "bg-purple-500",
  },
};

const levelLabels = ["", "Beginner", "Elementary", "Intermediate", "Advanced", "Expert"];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-50 dark:bg-[#0f172a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-full mb-4">
            Tech Stack
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Skills &amp; Technologies
          </h2>
          <p className="max-w-xl mx-auto text-slate-500 dark:text-slate-400">
            A curated set of tools and technologies I use to build modern, scalable applications.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => {
            const colors = colorMap[category.color] || colorMap.indigo;
            return (
              <ScrollReveal key={category.category} delay={catIdx * 0.15}>
                <div className="h-full p-6 rounded-2xl bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-md transition-shadow">
                  {/* Category header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={"w-3 h-3 rounded-full " + colors.dot} />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      {category.category}
                    </h3>
                  </div>

                  {/* Skills list */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIdx) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: catIdx * 0.1 + skillIdx * 0.05 }}
                      >
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            {skill.name}
                          </span>
                          <span className={"text-xs font-medium px-2 py-0.5 rounded-full " + colors.bg + " " + colors.text}>
                            {levelLabels[skill.level]}
                          </span>
                        </div>
                        <div className="h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: (skill.level / 5) * 100 + "%" }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.8,
                              delay: catIdx * 0.1 + skillIdx * 0.05,
                              ease: "easeOut",
                            }}
                            className={"h-full rounded-full " + colors.dot}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Tech badges row */}
        <ScrollReveal delay={0.3} className="mt-16">
          <div className="text-center mb-6">
            <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-widest">
              Also familiar with
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Python", "Rust", "Go", "Terraform", "Nginx", "Elasticsearch",
              "RabbitMQ", "Kafka", "Storybook", "Cypress", "Playwright", "Turborepo",
            ].map((tech, i) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 text-sm font-medium rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 shadow-sm cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
