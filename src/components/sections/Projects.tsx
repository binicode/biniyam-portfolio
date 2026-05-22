"use client";

import { motion } from "framer-motion";
import { ExternalLink, Code2, Clock } from "lucide-react";
import { projectsData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";
import { Project } from "@/types";

export default function Projects() {
    return (
        <section
            id="projects"
            aria-label="Projects"
            className="py-24 px-6 md:px-16 lg:px-32 bg-stone-100 dark:bg-gray-900"
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
                    <p className="text-sm font-medium text-amber-700 dark:text-cyan-400 uppercase tracking-widest mb-2">
                        What I Build
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-slate-50">
                        Projects
                    </h2>
                </motion.div>

                {/* Project Cards */}
                <div className="flex flex-col gap-6">
                    {projectsData.map((project: Project, index: number) => (
                        <motion.div
                            key={project.number}
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index * 0.1}
                            className="group bg-white dark:bg-gray-800 rounded-2xl border border-stone-100 dark:border-gray-700 p-8 md:p-10 hover:border-amber-200 dark:hover:border-cyan-800 hover:shadow-lg dark:hover:shadow-gray-900 transition-all duration-300"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                                {/* Left — Project Info */}
                                <div className="flex flex-col gap-4 max-w-2xl">

                                    {/* Number + Status */}
                                    <div className="flex items-center gap-4">
                                        <span className="text-4xl font-bold text-stone-100 dark:text-gray-700 group-hover:text-amber-100 dark:group-hover:text-gray-600 transition-colors select-none">
                                            {project.number}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-cyan-400 bg-amber-50 dark:bg-cyan-950 border border-amber-200 dark:border-cyan-800 px-3 py-1 rounded-full">
                                            <Clock size={12} aria-hidden="true" />
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-stone-900 dark:text-slate-50 group-hover:text-amber-700 dark:group-hover:text-cyan-400 transition-colors">
                                        {project.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-stone-500 dark:text-gray-400 leading-relaxed">
                                        {project.description}
                                    </p>

                                    {/* Stack Pills */}
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {project.stack.map((tech: string) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-stone-50 dark:bg-gray-900 border border-stone-200 dark:border-gray-700 text-stone-600 dark:text-gray-400 text-xs font-medium rounded-full"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right — Links */}
                                <div className="flex md:flex-col gap-3 shrink-0">

                                    <a href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} source code on GitHub`}
                                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-stone-200 dark:border-gray-700 text-stone-600 dark:text-gray-300 hover:border-amber-700 dark:hover:border-cyan-400 hover:text-amber-700 dark:hover:text-cyan-400 transition-colors"
                                    >
                                        <Code2 size={14} aria-hidden="true" />
                                        Source
                                    </a>

                                    <a href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} live demo`}
                                        className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-950 hover:bg-amber-800 dark:hover:bg-cyan-400 transition-colors"
                                    >
                                        <ExternalLink size={14} aria-hidden="true" />
                                        Live Demo
                                    </a>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}