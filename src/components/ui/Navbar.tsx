"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#timeline" },
    { label: "Contact", href: "#contact" },
];

const MOBILE_MENU_ID = "mobile-menu";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");
    const [mounted, setMounted] = useState(false);
    const { resolvedTheme, setTheme } = useTheme();
    const menuRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLButtonElement>(null);

    useEffect(() => setMounted(true), []);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActiveSection(entry.target.id);
                });
            },
            { threshold: 0.3 }
        );
        navLinks.forEach((link) => {
            const el = document.getElementById(link.href.replace("#", ""));
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = isMenuOpen ? "hidden" : original;
        return () => { document.body.style.overflow = original; };
    }, [isMenuOpen]);

    // Focus trap
    useEffect(() => {
        if (!isMenuOpen) return;

        const menu = menuRef.current;
        if (!menu) return;

        const focusable = menu.querySelectorAll<HTMLElement>(
            'a, button, [tabindex]:not([tabindex="-1"])'
        );
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        first?.focus();

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setIsMenuOpen(false);
                hamburgerRef.current?.focus();
            }
            if (e.key === "Tab") {
                if (e.shiftKey) {
                    if (document.activeElement === first) {
                        e.preventDefault();
                        last?.focus();
                    }
                } else {
                    if (document.activeElement === last) {
                        e.preventDefault();
                        first?.focus();
                    }
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, [isMenuOpen]);

    const scrollTo = useCallback((id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                mounted && resolvedTheme === "dark" ? "bg-gray-950" : "bg-stone-50",
                isScrolled
                    ? "shadow-sm"
                    : mounted && resolvedTheme === "dark"
                        ? "border-b border-gray-800"
                        : "border-b border-stone-200"
            )}
        >
            <nav
                aria-label="Main navigation"
                className="flex items-center justify-between px-6 md:px-16 lg:px-32 h-16"
            >
                {/* Logo */}
                <button
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    aria-label="Go to top"
                    className="flex items-center gap-2 cursor-pointer group"
                >
                    <span className="text-lg font-bold tracking-tight text-stone-900 dark:text-slate-50">
                        Biniyam.
                    </span>
                    <span className="relative flex items-center" title="Available for opportunities">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 hidden group-hover:block whitespace-nowrap text-xs font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 px-2 py-1 rounded-full">
                            Available for opportunities
                        </span>
                    </span>
                </button>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    activeSection === link.href.replace("#", "")
                                        ? "text-amber-700 dark:text-cyan-400"
                                        : "text-stone-500 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white"
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-3">
                    {mounted && (
                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                            className="w-9 h-9 flex items-center justify-center rounded-full border border-stone-200 dark:border-gray-700 text-stone-600 dark:text-gray-300 hover:bg-stone-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                        >
                            {resolvedTheme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
                        </button>
                    )}
                    <button
                        onClick={() => scrollTo("contact")}
                        className="bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-950 text-sm font-medium px-5 py-2 rounded-full hover:bg-amber-800 dark:hover:bg-cyan-400 transition-colors cursor-pointer"
                    >
                        Hire Me
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    ref={hamburgerRef}
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    aria-controls={MOBILE_MENU_ID}
                    className="md:hidden p-2 text-stone-700 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Backdrop */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden fixed inset-0 top-16 z-40 bg-black/20 dark:bg-black/40"
                            onClick={() => setIsMenuOpen(false)}
                            aria-hidden="true"
                        />

                        {/* Menu Panel */}
                        <motion.div
                            ref={menuRef}
                            id={MOBILE_MENU_ID}
                            role="dialog"
                            aria-modal="true"
                            aria-label="Mobile navigation"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="md:hidden fixed inset-0 top-16 z-50 flex flex-col justify-between px-6 py-10 bg-stone-50 dark:bg-gray-950"
                        >
                            <ul className="flex flex-col gap-6" role="list">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={cn(
                                                "text-2xl font-semibold transition-colors",
                                                activeSection === link.href.replace("#", "")
                                                    ? "text-amber-700 dark:text-cyan-400"
                                                    : "text-stone-400 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white"
                                            )}
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col gap-4">
                                <button
                                    onClick={() => {
                                        scrollTo("contact");
                                        setIsMenuOpen(false);
                                    }}
                                    className="inline-flex items-center justify-center bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-950 text-sm font-medium px-8 py-4 rounded-full hover:bg-amber-800 dark:hover:bg-cyan-400 transition-colors cursor-pointer"
                                >
                                    Hire Me
                                </button>
                                {mounted && (
                                    <button
                                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                                        aria-label={resolvedTheme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
                                        className="inline-flex items-center gap-2 w-fit text-stone-400 dark:text-gray-300 hover:text-stone-900 dark:hover:text-white transition-colors cursor-pointer"
                                    >
                                        {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                                        <span className="text-sm">
                                            {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
                                        </span>
                                    </button>
                                )}
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="text-sm text-stone-400 dark:text-gray-400">
                                    Based in Addis Ababa, Ethiopia
                                </p>
                                <p className="text-sm text-stone-400 dark:text-gray-400">
                                    Available for remote opportunities
                                </p>

                                <a href="mailto:myrita099@gmail.com"
                                    className="text-sm font-medium text-stone-900 dark:text-white hover:text-amber-700 dark:hover:text-cyan-400 transition-colors"
                                >
                                    myrita099@gmail.com
                                </a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </header>
    );
}