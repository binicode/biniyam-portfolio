"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";

export default function Hero() {
    return (
        <section
            aria-label="Hero"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 bg-white"
        >
            <div className="max-w-4xl">

                {/* Available Badge */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0}
                    className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8"
                >
                    <span
                        aria-hidden="true"
                        className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"
                    />
                    Available for opportunities
                </motion.div>

                {/* Name */}
                <motion.h1
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.1}
                    className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4"
                >
                    {portfolioData.name}
                </motion.h1>

                {/* Title */}
                <motion.h2
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.2}
                    className="text-2xl md:text-3xl font-medium text-blue-600 mb-6"
                >
                    {portfolioData.title}
                </motion.h2>

                {/* Tagline */}
                <motion.p
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="text-lg md:text-xl text-gray-500 max-w-2xl leading-relaxed mb-10"
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
                    <Link
                        href="#projects"
                        className="bg-gray-900 text-white px-8 py-3 rounded-full font-medium hover:bg-gray-700 transition-colors"
                    >
                        View My Work
                    </Link>
                    <Link
                        href="#contact"
                        className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full font-medium hover:border-gray-900 hover:text-gray-900 transition-colors"
                    >
                        Contact Me
                    </Link>
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
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <Code2 size={20} aria-hidden="true" />
                        <span className="text-sm">GitHub</span>
                    </a>

                    <a href={`mailto:${portfolioData.email}`}
                        aria-label="Send Biniyam an email"
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <Mail size={20} aria-hidden="true" />
                        <span className="text-sm">Email</span>
                    </a>

                    <a href={portfolioData.domain}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Visit Biniyam's website"
                        className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors"
                    >
                        <ExternalLink size={20} aria-hidden="true" />
                        <span className="text-sm">biniyam.com</span>
                    </a>
                </motion.div>

            </div>
        </section>
    );
}