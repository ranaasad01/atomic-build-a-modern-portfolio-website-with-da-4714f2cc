"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import { Calendar, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Shipped", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Open Source Stars", value: "1.2k" },
];

const timeline = [
  {
    year: "2024",
    role: "Senior Full-Stack Engineer",
    company: "TechFlow Inc.",
    icon: Briefcase,
  },
  {
    year: "2022",
    role: "Full-Stack Developer",
    company: "Startup Studio",
    icon: Briefcase,
  },
  {
    year: "2020",
    role: "Frontend Developer",
    company: "Digital Agency Co.",
    icon: Briefcase,
  },
  {
    year: "2019",
    role: "B.Sc. Computer Science",
    company: "State University",
    icon: GraduationCap,
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-[#1e293b]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-xs font-semibold tracking-widest uppercase text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-500/10 rounded-full mb-4">
            About Me
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">
            Passionate about building great software
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Photo + Stats */}
          <div className="space-y-8">
            <ScrollReveal direction="left">
              <div className="relative">
                <div className="relative w-full max-w-sm mx-auto lg:mx-0">
                  {/* Decorative border */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-2xl blur opacity-30" />
                  <div className="relative rounded-2xl overflow-hidden aspect-square bg-gradient-to-br from-indigo-100 to-violet-100 dark:from-indigo-900/30 dark:to-violet-900/30">
                    <img
                      src="https://media.licdn.com/dms/image/v2/C5603AQE-oMdEA4-lZg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516522176575?e=2147483647&v=beta&t=NNza9NbD-soKscrNPIBTk-qTQ2z583NAZI6yUgYwXZ0"
                      alt="Alex Morgan — Full-Stack Developer"
                      className="w-full h-full object-cover"
                    />
                    {/* Overlay badge */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="glass rounded-xl px-4 py-3 flex items-center gap-3">
                        <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse flex-shrink-0" />
                        <div>
                          <p className="text-white text-sm font-semibold">Open to Work</p>
                          <p className="text-white/70 text-xs">Full-time &amp; Freelance</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Stats grid */}
            <ScrollReveal direction="left" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 text-center"
                  >
                    <div className="text-2xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Bio + Timeline */}
          <div className="space-y-8">
            <ScrollReveal direction="right">
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p className="text-lg">
                  I&apos;m a full-stack developer with{" "}
                  <span className="text-indigo-600 dark:text-indigo-400 font-semibold">
                    5+ years of experience
                  </span>{" "}
                  building scalable web applications that users love. I thrive at
                  the intersection of design and engineering.
                </p>
                <p>
                  My journey started with a deep curiosity about how things work on
                  the web. Today, I specialize in the React ecosystem, building
                  everything from pixel-perfect UIs to robust backend APIs and
                  cloud infrastructure.
                </p>
                <p>
                  When I&apos;m not coding, you&apos;ll find me contributing to open-source
                  projects, writing technical articles, or exploring the latest in
                  AI and developer tooling.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 mt-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <MapPin size={14} className="text-indigo-500" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                  <Calendar size={14} className="text-indigo-500" />
                  Available from Jan 2025
                </div>
              </div>
            </ScrollReveal>

            {/* Timeline */}
            <ScrollReveal direction="right" delay={0.2}>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4">
                Experience &amp; Education
              </h3>
              <div className="space-y-4">
                {timeline.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/20 flex items-center justify-center">
                      <item.icon size={16} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-semibold text-slate-900 dark:text-white text-sm">
                          {item.role}
                        </p>
                        <span className="text-xs text-indigo-600 dark:text-indigo-400 font-medium flex-shrink-0">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {item.company}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
