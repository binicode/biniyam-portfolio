"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Download, ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { aboutData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section
            id="about"
            aria-label="About"
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
                        Who I Am
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-slate-50">
                        About Me
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

                    {/* Left — Photo */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="relative w-72 h-80 lg:w-64 lg:h-72 rounded-2xl overflow-hidden">
                            <img
                                src="/images/profile-picture.webp"
                                alt="Biniyam Abera"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent" />
                            <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
                                <MapPin size={12} className="text-amber-700 dark:text-cyan-400" aria-hidden="true" />
                                <span className="text-xs font-medium text-stone-700 dark:text-gray-300">{aboutData.location}</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Text Content */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="flex flex-col gap-6"
                    >
                        {/* First paragraph always visible */}
                        <p className="text-stone-600 dark:text-gray-400 leading-relaxed text-lg">
                            {aboutData.bio[0]}
                        </p>

                        {/* Expandable paragraphs */}
                        <AnimatePresence>
                            {expanded && (
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="flex flex-col gap-6 overflow-hidden"
                                >
                                    {aboutData.bio.slice(1).map((paragraph, index) => (
                                        <p
                                            key={index}
                                            className="text-stone-600 dark:text-gray-400 leading-relaxed text-lg"
                                        >
                                            {paragraph}
                                        </p>
                                    ))}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Read more / less toggle */}
                        <button
                            onClick={() => setExpanded((prev) => !prev)}
                            className="inline-flex items-center gap-1 text-sm font-medium text-amber-700 dark:text-cyan-400 hover:text-amber-800 dark:hover:text-cyan-300 transition-colors w-fit cursor-pointer"
                        >
                            {expanded ? (
                                <>Read less <ChevronUp size={16} /></>
                            ) : (
                                <>Read more <ChevronDown size={16} /></>
                            )}
                        </button>

                        {/* Divider */}
                        <div className="w-12 h-px bg-amber-300 dark:bg-cyan-800" />

                        {/* Resume + Projects buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">

                            <a href={aboutData.resumeUrl}
                                download
                                aria-label="Download Biniyam's resume"
                                className={cn(
                                    "inline-flex items-center gap-2",
                                    "bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-950",
                                    "px-6 py-3 rounded-full font-semibold text-sm",
                                    "hover:bg-amber-800 dark:hover:bg-cyan-400 hover:scale-105 transition-all cursor-pointer"
                                )}
                            >
                                <Download size={16} aria-hidden="true" />
                                Download Resume
                            </a>
                            <button
                                onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                                className={cn(
                                    "inline-flex items-center gap-2",
                                    "border border-stone-300 dark:border-gray-700 text-stone-600 dark:text-gray-300",
                                    "px-6 py-3 rounded-full font-semibold text-sm",
                                    "hover:border-amber-700 dark:hover:border-cyan-400 hover:text-amber-700 dark:hover:text-cyan-400 transition-all cursor-pointer"
                                )}
                            >
                                View Projects
                                <ArrowRight size={16} aria-hidden="true" />
                            </button>
                        </div>

                        {/* Traits */}
                        <div className="grid grid-cols-2 gap-3 mt-2">
                            {aboutData.traits.map((trait, index) => (
                                <div
                                    key={index}
                                    className="bg-white dark:bg-gray-800 rounded-xl p-4 border border-stone-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-cyan-800 transition-colors"
                                >
                                    <p className="font-semibold text-stone-900 dark:text-slate-50 text-sm mb-1">{trait.label}</p>
                                    <p className="text-xs text-stone-500 dark:text-gray-400 leading-relaxed">{trait.description}</p>
                                </div>
                            ))}
                        </div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}