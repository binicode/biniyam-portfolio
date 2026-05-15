"use client";

import { motion } from "framer-motion";
import { MapPin, Download } from "lucide-react";
import { aboutData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";

export default function About() {
    return (
        <section
            id="about"
            aria-label="About"
            className="py-24 px-6 md:px-16 lg:px-32 bg-gray-50"
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
                        Who I Am
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        About Me
                    </h2>
                </motion.div>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Photo */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                        className="flex justify-center lg:justify-start"
                    >
                        <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gray-100 border border-gray-200 flex flex-col items-center justify-center gap-3">
                            <div className="w-24 h-24 rounded-full bg-gray-300" />
                            <div className="w-32 h-3 rounded-full bg-gray-300" />
                            <div className="w-24 h-3 rounded-full bg-gray-300" />
                        </div>
                    </motion.div>

                    {/* Text Content */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="flex flex-col gap-6"
                    >
                        {/* Bio Paragraphs */}
                        {aboutData.bio.map((paragraph, index) => (
                            <p
                                key={index}
                                className="text-gray-600 leading-relaxed text-lg"
                            >
                                {paragraph}
                            </p>
                        ))}

                        {/* Location */}
                        <div className="flex items-center gap-2 text-gray-500">
                            <MapPin size={16} aria-hidden="true" />
                            <span className="text-sm">{aboutData.location}</span>
                        </div>

                        {/* Resume Download */}
                        <div>

                            <a href={aboutData.resumeUrl}
                                download
                                aria-label="Download Biniyam's resume"
                                className={cn(
                                    "inline-flex items-center gap-2 bg-gray-900 text-white",
                                    "px-6 py-3 rounded-full font-medium text-sm",
                                    "hover:bg-gray-700 transition-colors"
                                )}
                            >
                                <Download size={16} aria-hidden="true" />
                                Download Resume
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Traits */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={0.3}
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
                >
                    {aboutData.traits.map((trait, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm"
                        >
                            <p className="font-semibold text-gray-900 mb-1">{trait.label}</p>
                            <p className="text-sm text-gray-500">{trait.description}</p>
                        </div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}