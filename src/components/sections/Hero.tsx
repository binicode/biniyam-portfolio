"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";

const codeLines = [
    { tokens: [{ t: "// Biniyam Abera", c: "#4B5563" }] },
    { tokens: [{ t: "", c: "" }] },
    { tokens: [{ t: "const", c: "#7C3AED" }, { t: " dev", c: "#38BDF8" }, { t: " = {", c: "#94A3B8" }] },
    { tokens: [{ t: "  name", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: ' "Biniyam"', c: "#FB923C" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  stack", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: ' "fullstack"', c: "#FB923C" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  ai", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: " true", c: "#A78BFA" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  web3", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: " true", c: "#A78BFA" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  location", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: ' "Addis"', c: "#FB923C" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  remote", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: " true", c: "#A78BFA" }, { t: ",", c: "#94A3B8" }] },
    { tokens: [{ t: "  open", c: "#34D399" }, { t: ":", c: "#94A3B8" }, { t: " true", c: "#A78BFA" }] },
    { tokens: [{ t: "}", c: "#94A3B8" }] },
    { tokens: [{ t: "", c: "" }] },
    { tokens: [{ t: "export default", c: "#7C3AED" }, { t: " dev", c: "#38BDF8" }] },
];

export default function Hero() {
    return (
        <section
            aria-label="Hero"
            className="relative min-h-screen flex flex-col justify-center px-6 md:px-16 lg:px-32 pt-20 md:pt-16 bg-stone-50 dark:bg-gray-950 overflow-hidden"
        >
            {/* Background Image — Light mode only */}
            <div
                className="absolute inset-0 z-0 dark:opacity-0 transition-opacity duration-300"
                style={{
                    backgroundImage: "url('/images/hero_bg.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    opacity: 0.8,
                }}
            />
            {/* Fade overlay */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-stone-50/70 via-stone-50/40 to-stone-50/10 dark:from-gray-950 dark:via-gray-950/95 dark:to-gray-950/90" />
            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch relative z-10">

                {/* Left — Content */}
                <div className="flex flex-col items-start justify-evenly min-h-[80vh]">

                    {/* Main Phrase */}
                    <motion.h1
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0}
                        className="mb-2 lg:mb-6 leading-snug"
                    >
                        <span className="block text-lg md:text-xl lg:text-2xl font-medium text-stone-400 dark:text-gray-500 tracking-wide mb-2">
                            I engineer
                        </span>
                        <span className="block text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-none text-amber-700 dark:text-cyan-400 pl-4 md:pl-8">
                            digital
                        </span>
                        <span className="block text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight leading-none text-stone-900 dark:text-slate-50 pl-8 md:pl-16">
                            products
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.1}
                        className="text-sm font-medium text-stone-400 dark:text-gray-500 tracking-widest uppercase mb-8 md:mb-0"
                    >
                        Full-stack · AI-ready · Web3
                    </motion.p>

                    {/* Name + Title */}
                    <motion.p
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.2}
                        className="text-sm font-medium text-stone-500 dark:text-gray-400 mb-2 md:mb-2 leading-relaxed"
                    >
                        {portfolioData.name} · {portfolioData.title}
                    </motion.p>

                    {/* Tagline */}
                    <motion.p
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.3}
                        className="text-base text-stone-500 dark:text-gray-400 leading-relaxed mb-12 md:mb-10 max-w-lg"
                    >
                        {portfolioData.tagline}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.4}
                        className="flex flex-wrap gap-4 mb-8 md:mb-10"
                    >
                        <button
                            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                            className="px-8 py-3 rounded-full font-semibold text-sm transition-all bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-950 hover:bg-amber-800 dark:hover:bg-cyan-400 hover:scale-105 cursor-pointer"
                        >
                            View My Work
                        </button>
                        <button
                            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                            className="px-8 py-3 rounded-full font-semibold text-sm transition-all border border-stone-300 dark:border-gray-700 text-stone-600 dark:text-gray-300 hover:border-amber-700 dark:hover:border-cyan-400 hover:text-amber-700 dark:hover:text-cyan-400 cursor-pointer"
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
                        className="flex items-center gap-8"
                    >

                        <a href={portfolioData.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Biniyam's GitHub profile"
                            className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-amber-700 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
                        >
                            <Code2 size={18} aria-hidden="true" />
                            GitHub
                        </a>

                        <a href={`mailto:${portfolioData.email}`}
                            aria-label="Send Biniyam an email"
                            className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-amber-700 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
                        >
                            <Mail size={18} aria-hidden="true" />
                            Email
                        </a>

                        <a href={portfolioData.domain}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Visit Biniyam's website"
                            className="flex items-center gap-2 text-stone-500 dark:text-gray-400 hover:text-amber-700 dark:hover:text-cyan-400 transition-colors text-sm font-medium"
                        >
                            <ExternalLink size={18} aria-hidden="true" />
                            biniyam.com
                        </a>
                    </motion.div>

                    {/* Compact Terminal — Mobile & iPad only */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        animate="visible"
                        custom={0.6}
                        className="md:hidden mt-8"
                    >
                        <div className="inline-flex items-center gap-3 bg-gray-950 px-5 py-3 rounded-full border border-gray-800">
                            <span className="text-emerald-400 text-xs font-mono">●</span>
                            <span className="font-mono text-xs">
                                <span style={{ color: "#7C3AED" }}>const</span>
                                <span style={{ color: "#38BDF8" }}> dev</span>
                                <span style={{ color: "#94A3B8" }}> = {"{ "}</span>
                                <span style={{ color: "#34D399" }}>stack</span>
                                <span style={{ color: "#94A3B8" }}>: </span>
                                <span style={{ color: "#FB923C" }}>"fullstack"</span>
                                <span style={{ color: "#94A3B8" }}>, </span>
                                <span style={{ color: "#34D399" }}>open</span>
                                <span style={{ color: "#94A3B8" }}>: </span>
                                <span style={{ color: "#A78BFA" }}>true</span>
                                <span style={{ color: "#94A3B8" }}>{" }"}</span>
                            </span>
                            <span className="inline-block w-1.5 h-3.5 bg-cyan-400 animate-pulse rounded-sm" />
                        </div>
                    </motion.div>
                </div>

                {/* Right — Code Block */}
                <motion.div
                    variants={fadeUpVariant}
                    initial="hidden"
                    animate="visible"
                    custom={0.3}
                    className="hidden md:flex items-center justify-center h-full"
                >
                    <div className="relative">
                        <div className="absolute inset-0 rounded-2xl bg-amber-400/20 dark:bg-cyan-400/20 blur-2xl scale-110" />
                        <div className="relative bg-gray-950 dark:bg-gray-900 rounded-2xl border border-gray-800 p-6 w-80 shadow-2xl md:w-full">
                            <div className="flex items-center gap-2 mb-5">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                <span className="ml-2 text-xs text-gray-500 font-mono">portfolio.ts</span>
                            </div>
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