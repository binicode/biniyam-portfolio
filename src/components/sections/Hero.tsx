"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";

export default function Hero() {
    return (
        <section
            aria-label="Hero"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-16 bg-stone-50 dark:bg-gray-950"
        >
            <div className="max-w-4xl">

                {/* Available Badge */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="inline-flex items-center gap-2 text-sm font-medium px-4 py-1.5 rounded-full mb-8 bg-amber-50 border border-amber-200 text-amber-800 dark:bg-cyan-950 dark:border-cyan-800 dark:text-cyan-400"
                >
                    <span
                        aria-hidden="true"
                        className="w-2 h-2 rounded-full animate-pulse bg-amber-500 dark:bg-cyan-400"
                    />
                    Available for opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-stone-900 dark:text-slate-50"
                >
                    {portfolioData.name}
                </motion.h1>

                {/* Title */}
                <motion.h2
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="text-2xl md:text-3xl font-medium mb-6 text-amber-700 dark:text-cyan-400"
                >
                    {portfolioData.title}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="text-lg md:text-xl max-w-2xl leading-relaxed mb-10 text-stone-500 dark:text-gray-400"
                >
                    {portfolioData.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.4}
                    className="flex flex-wrap gap-4 mb-16"
                >
                    <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3 rounded-full font-medium transition-colors bg-stone-900 dark:bg-white text-white dark:text-gray-900 hover:bg-stone-700 dark:hover:bg-gray-100 cursor-pointer"
                    >
                        View My Work
                    </button>
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="px-8 py-3 rounded-full font-medium transition-colors border border-stone-300 dark:border-gray-700 text-stone-700 dark:text-gray-300 hover:border-stone-900 dark:hover:border-white hover:text-stone-900 dark:hover:text-white cursor-pointer"
                    >
                        Contact Me
                    </button>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.5}
                    className="flex items-center gap-6"
                >

                    <a href={portfolioData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Biniyam's GitHub profile"
                        className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                    >
                        <Code2 size={20} aria-hidden="true" />
                        <span className="text-sm">GitHub</span>
                    </a>

                    <a href={`mailto:${portfolioData.email}`}
                        aria-label="Send Biniyam an email"
                        className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                    >
                        <Mail size={20} aria-hidden="true" />
                        <span className="text-sm">Email</span>
                    </a>

                    <a href={portfolioData.domain}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Biniyam's website"
                        className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-stone-900 dark:hover:text-white transition-colors"
                    >
                        <ExternalLink size={20} aria-hidden="true" />
                        <span className="text-sm">biniyam.com</span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}