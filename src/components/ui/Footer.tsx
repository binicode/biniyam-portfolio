"use client";

import { Mail, Code2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
    return (
        <footer className="py-8 px-6 md:px-16 lg:px-32 bg-stone-800 dark:bg-gray-900 border-t border-stone-700 dark:border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="flex items-center gap-2 cursor-pointer w-fit"
                >
                    <span className="text-base font-bold tracking-tight text-white">
                        Biniyam.
                    </span>
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                </button>

                {/* Copyright */}
                <p className="text-xs text-stone-500">
                    © {new Date().getFullYear()} Biniyam Abera. All rights reserved.
                </p>

                {/* Links + Social */}
                <div className="flex items-center gap-6">
                    {["about", "projects", "contact"].map((id) => (
                        <button
                            key={id}
                            onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })}
                            className="text-xs text-stone-400 hover:text-amber-400 transition-colors cursor-pointer capitalize"
                        >
                            {id.charAt(0).toUpperCase() + id.slice(1)}
                        </button>
                    ))}
                    <div className="w-px h-4 bg-stone-700" />

                    <a href={portfolioData.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="text-stone-400 hover:text-amber-400 transition-colors"
                    >
                        <Code2 size={15} aria-hidden="true" />
                    </a>

                    <a href={`mailto:${portfolioData.email}`}
                        aria-label="Email"
                        className="text-stone-400 hover:text-amber-400 transition-colors"
                    >
                        <Mail size={15} aria-hidden="true" />
                    </a>
                </div>

            </div>
        </footer>
    );
}