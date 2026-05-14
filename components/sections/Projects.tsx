"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import { Code2 as Github } from 'lucide-react';

const filters = ["All", "Featured", "2024", "2023", "2022"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "Featured") return p.featured;
    return p.year === activeFilter;
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-[#1e293b]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-full mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Projects I&apos;ve Built
          </h2>
          <p className="max-w-xl mx-auto text-slate-500 dark:text-slate-400">
            A selection of real-world applications I&apos;ve designed and developed — from SaaS platforms to AI-powered tools.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={
                "px-4 py-2 text-sm font-medium rounded-lg transition-all " +
                (activeFilter === filter
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-500/20"
                  : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700")
              }
            >
              {filter}
            </motion.button>
          ))}
        </ScrollReveal>

        {/* Projects grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-slate-400 dark:text-slate-500">
            No projects found for this filter.
          </div>
        )}

        {/* GitHub CTA */}
        <ScrollReveal delay={0.2} className="text-center mt-14">
          <a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-medium text-sm transition-colors shadow-sm"
          >
            <Github size={16} />
            See more on GitHub
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
