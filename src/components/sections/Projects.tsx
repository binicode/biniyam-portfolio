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
                <div className="flex flex-col gap-8">
                    {projectsData.map((project: Project, index: number) => (
                        <motion.div
                            key={project.number}
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index * 0.1}
                            className="bg-white dark:bg-gray-800 rounded-2xl border border-stone-100 dark:border-gray-700 p-8 md:p-10 hover:border-stone-300 dark:hover:border-gray-500 transition-colors"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">

                                {/* Left — Project Info */}
                                <div className="flex flex-col gap-4 max-w-2xl">

                                    {/* Number + Status */}
                                    <div className="flex items-center gap-4">
                                        <span className="text-sm font-mono text-stone-400 dark:text-gray-500">
                                            {project.number}
                                        </span>
                                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-700 dark:text-cyan-400 bg-amber-50 dark:bg-cyan-950 border border-amber-200 dark:border-cyan-800 px-3 py-1 rounded-full">
                                            <Clock size={12} aria-hidden="true" />
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-stone-900 dark:text-slate-50">
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
                                <div className="flex md:flex-col gap-4 shrink-0">

                                    <a href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} source code on GitHub`}
                                        className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-gray-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                                    >
                                        <Code2 size={16} aria-hidden="true" />
                                        <span>Source</span>
                                    </a>

                                    <a href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`View ${project.title} live demo`}
                                        className="inline-flex items-center gap-2 text-sm text-stone-500 dark:text-gray-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={16} aria-hidden="true" />
                                        <span>Live Demo</span>
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