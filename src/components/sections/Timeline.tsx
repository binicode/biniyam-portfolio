"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Circle } from "lucide-react";
import { timelineData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";
import { TimelineItem } from "@/types";

export default function Timeline() {
    return (
        <section
            id="timeline"
            aria-label="Journey"
            className="py-24 px-6 md:px-16 lg:px-32 bg-white"
        >
            <div className="max-w-4xl mx-auto">

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
                        How I Got Here
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                        Journey
                    </h2>
                </motion.div>

                {/* Timeline Items */}
                <div className="relative flex flex-col gap-0">

                    {/* Vertical Line */}
                    <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gray-200" />

                    {timelineData.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            custom={index * 0.1}
                            className="relative flex gap-8 pb-12 last:pb-0"
                        >
                            {/* Dot */}
                            <div className="relative z-10 shrink-0 mt-1">
                                {item.status === "completed" ? (
                                    <CheckCircle2
                                        size={16}
                                        className="text-gray-900"
                                        aria-label="Completed"
                                    />
                                ) : (
                                    <Circle
                                        size={16}
                                        className="text-blue-400"
                                        aria-label="In Progress"
                                    />
                                )}
                            </div>

                            {/* Content */}
                            <div className="flex flex-col gap-1 pb-2">
                                <span className="text-xs font-mono text-gray-400">
                                    {item.date}
                                </span>
                                <h3 className={`text-lg font-semibold ${item.status === "completed" ? "text-gray-900" : "text-blue-600"}`}>
                                    {item.title}
                                </h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
}