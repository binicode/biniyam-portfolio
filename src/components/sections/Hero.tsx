"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";

const codeLines = [
    { tokens: [{ t: "const", c: "#7C3AED" }, { t: " dev", c: "#38BDF8" }, { t: " = {", c: "#94A3B8" }] },
    { tokens: [{ t: "  stack", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: ' "fullstack"', c: "#FB923C" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  ai", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: " true", c: "#A78BFA" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  web3", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: " true", c: "#A78BFA" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  location", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: ' "Addis"', c: "#FB923C" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  open", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: " true", c: "#A78BFA" }] },
    { tokens: [{ t: "}", c: "#94A3B8" }] },
];

export default function Hero() {
    return (
        <section
            aria-label="Hero"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-16 bg-stone-50 dark:bg-gray-950 overflow-hidden"
        >
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left — Content */}
                <div className="flex flex-col items-center text-center lg:items-start lg:text-left">

                    {/* Main Phrase */}
                    <motion.h1
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-stone-900 dark:text-slate-50 mb-4"
                    >
                        I engineer
                        <span className="block text-amber-700 dark:text-cyan-400">
                            digital products
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                        className="text-base font-medium text-stone-400 dark:text-gray-500 tracking-widest uppercase mb-6"
                    >
                        Full-stack · AI-ready · Web3
                    </motion.p>

                    {/* Name + Title */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                        className="flex items-center gap-3 mb-6"
                    >
                        <div className="w-8 h-px bg-stone-300 dark:bg-gray-600" />
                        <span className="text-sm font-medium text-stone-500 dark:text-gray-400">
                            {portfolioData.name} · {portfolioData.title}
                        </span>
                    </motion.div>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.3}
                        className="text-lg text-stone-500 dark:text-gray-400 leading-relaxed mb-10 max-w-lg"
                    >
                        {portfolioData.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.4}
                        className="flex flex-wrap gap-4 mb-10"
                    >
                        <button
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                            className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all bg-stone-900 dark:bg-cyan-500 text-white dark:text-gray-950 hover:bg-stone-700 dark:hover:bg-cyan-400 hover:scale-105 cursor-pointer"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="px-8 py-3.5 rounded-full font-semibold text-sm transition-all border-2 border-stone-300 dark:border-gray-700 text-stone-700 dark:text-gray-300 hover:border-stone-900 dark:hover:border-white hover:text-stone-900 dark:hover:text-white hover:scale-105 cursor-pointer"
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
                            className="flex items-center gap-2 text-stone-400 dark:text-gray-500 hover:text-stone-900 dark:hover:text-white transition-colors text-sm"
                        >
                            <Code2 size={16} aria-hidden="true" />
                            GitHub
                        </a>

                        <a href={`mailto:${portfolioData.email}`}
                            aria-label="Send Biniyam an email"
                            className="flex items-center gap-2 text-stone-400 dark:text-gray-500 hover:text-stone-900 dark:hover:text-white transition-colors text-sm"
                        >
                            <Mail size={16} aria-hidden="true" />
                            Email
                        </a>

                        <a href={portfolioData.domain}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Biniyam's website"
                            className="flex items-center gap-2 text-stone-400 dark:text-gray-500 hover:text-stone-900 dark:hover:text-white transition-colors text-sm"
                        >
                            <ExternalLink size={16} aria-hidden="true" />
                            biniyam.com
                        </a>
                    </motion.div>
                </div>

                {/* Right — Code Block */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="hidden lg:flex items-center justify-center"
                >
                    <div className="relative">

                        {/* Glow */}
                        <div className="absolute inset-0 rounded-2xl bg-amber-400/20 dark:bg-cyan-400/20 blur-2xl scale-110" />

                        {/* Terminal Card */}
                        <div className="relative bg-gray-950 dark:bg-gray-900 rounded-2xl border border-gray-800 p-6 w-80 shadow-2xl">

                            {/* Terminal Header */}
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-xs text-gray-500 font-mono">portfolio.ts</span>
                            </div>

                            {/* Code */}
                            <div className="font-mono text-sm leading-7">
                                {codeLines.map((line, i) => (
                                    <div key={i}>
                                        {line.tokens.map((token, j) => (
                                            <span key={j} style={{ color: token.c }}>{token.t}</span>
                                        ))}
                                    </div>
                                ))}
                                <div className="mt-1">
                                    <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse" />
                                </div>
                            </div>

                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}