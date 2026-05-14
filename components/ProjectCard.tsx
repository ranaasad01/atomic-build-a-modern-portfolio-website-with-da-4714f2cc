"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative flex flex-col h-full rounded-2xl overflow-hidden bg-white dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 dark:hover:shadow-indigo-500/10 transition-all duration-300"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-indigo-50 to-violet-50 dark:from-indigo-900/20 dark:to-violet-900/20">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 left-3">
            <span className="px-2.5 py-1 text-xs font-semibold bg-indigo-600 text-white rounded-full">
              Featured
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-xs font-medium bg-black/30 backdrop-blur-sm text-white rounded-full">
            {project.year}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 border border-slate-100 dark:border-slate-600/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-50 dark:bg-slate-700/50 text-slate-400 dark:text-slate-500">
              +{project.tags.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-700/50">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View on GitHub"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <Github size={14} />
                Code
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View live demo"
                className="flex items-center gap-1.5 text-xs font-medium text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                <ExternalLink size={14} />
                Live Demo
              </a>
            )}
          </div>
          <Link
            href={"/projects/" + project.slug}
            className="flex items-center gap-1 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:gap-2 transition-all"
          >
            Details
            <ArrowRight size={12} />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}
