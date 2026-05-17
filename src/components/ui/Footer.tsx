"use client";

export default function Footer() {
    return (
        <footer className="py-8 px-6 md:px-16 lg:px-32 bg-stone-50 dark:bg-gray-950 border-t border-stone-200 dark:border-gray-800">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    className="text-lg font-bold text-stone-900 dark:text-slate-50 tracking-tight cursor-pointer"
                >
                    Biniyam.
                </button>

                {/* Copyright */}
                <p className="text-sm text-stone-400 dark:text-gray-500">
                    © {new Date().getFullYear()} Biniyam Abera. All rights reserved.
                </p>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <button
                        onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-sm text-stone-400 dark:text-gray-500 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        About
                    </button>
                    <button
                        onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-sm text-stone-400 dark:text-gray-500 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        Projects
                    </button>
                    <button
                        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                        className="text-sm text-stone-400 dark:text-gray-500 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                    >
                        Contact
                    </button>
                </div>

            </div>
        </footer>
    );
}