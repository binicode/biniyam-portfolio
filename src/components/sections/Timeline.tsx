"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { timelineData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";

export default function Timeline() {
    return (
        <section
            id="timeline"
            aria-label="Journey"
            className="py-24 px-6 md:px-16 lg:px-32 bg-stone-50 dark:bg-gray-950"
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
                        How I Got Here
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-slate-50">
                        Journey
                    </h2>
                </motion.div>

                {/* Timeline Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index * 0.1}
                            className={`relative p-6 rounded-2xl border transition-all duration-300 ${item.status === "completed"
                                ? "bg-white dark:bg-gray-800 border-stone-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-cyan-800"
                                : "bg-white dark:bg-gray-800 border-amber-100 dark:border-cyan-900 hover:border-amber-200 dark:hover:border-cyan-800"
                                }`}
                        >
                            {/* Status Icon + Date */}
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-2">
                                    {item.status === "completed" ? (
                                        <CheckCircle2
                                            size={18}
                                            className="text-stone-900 dark:text-slate-50"
                                            aria-label="Completed"
                                        />
                                    ) : (
                                        <Circle
                                            size={18}
                                            className="text-amber-500 dark:text-cyan-400"
                                            aria-label="In Progress"
                                        />
                                    )}
                                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${item.status === "completed"
                                        ? "bg-stone-100 dark:bg-gray-700 text-stone-600 dark:text-gray-300"
                                        : "bg-amber-100 dark:bg-cyan-900 text-amber-700 dark:text-cyan-400"
                                        }`}>
                                        {item.status === "completed" ? "Completed" : "In Progress"}
                                    </span>
                                </div>
                                <span className="text-sm font-mono font-semibold text-stone-400 dark:text-gray-500">
                                    {item.date}
                                </span>
                            </div>

                            {/* Title */}
                            <h3 className={`text-base font-bold mb-2 ${item.status === "completed"
                                ? "text-stone-900 dark:text-slate-50"
                                : "text-amber-700 dark:text-cyan-400"
                                }`}>
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-stone-500 dark:text-gray-400 text-sm leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}