"use client";

import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Journey", href: "#timeline" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("");

    // Detect scroll for navbar background
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Detect active section
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
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


    // Close menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent body scroll when menu is open
    useEffect(() => {
        const original = document.body.style.overflow;
        document.body.style.overflow = isMenuOpen ? "hidden" : original;
        return () => {
            document.body.style.overflow = original;
        };
    }, [isMenuOpen]);


    const { resolvedTheme, setTheme } = useTheme();

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white shadow-sm"
                    : "bg-white border-b border-gray-100"
            )}
        >
            <nav
                aria-label="Main navigation"
                className="flex items-center justify-between px-6 md:px-16 lg:px-32 h-16"
            >
                {/* Logo */}
                <Link
                    href="#"
                    aria-label="Go to top"
                    className="text-lg font-bold text-gray-900 tracking-tight"
                >
                    Biniyam.
                </Link>

                {/* Desktop Nav Links */}
                <ul className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium transition-colors",
                                    activeSection === link.href.replace("#", "")
                                        ? "text-gray-900"
                                        : "text-gray-500 hover:text-gray-900"
                                )}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden md:block">
                    <button
                        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                        aria-label="Toggle theme"
                        style={{ cursor: "pointer" }}
                        className="w-fit flex items-center gap-2 text-gray-400 hover:text-gray-900 transition-colors"
                    >
                        {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                        <span className="text-sm">{resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                    </button>
                </div>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <Link
                        href="#contact"
                        className="bg-gray-900 text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-gray-700 transition-colors"
                    >
                        Hire Me
                    </Link>
                </div>

                {/* Mobile Hamburger */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMenuOpen}
                    className="md:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="md:hidden fixed inset-0 top-16 bg-white z-50 flex flex-col justify-between px-6 py-10 gap-8"
                    >
                        <ul className="flex flex-col gap-6">
                            {navLinks.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        onClick={() => setIsMenuOpen(false)}
                                        className={cn(
                                            "text-2xl font-semibold transition-colors",
                                            activeSection === link.href.replace("#", "")
                                                ? "text-gray-900"
                                                : "text-gray-400 hover:text-gray-900"
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                        {/* Mobile CTA */}
                        <Link
                            href="#contact"
                            onClick={() => setIsMenuOpen(false)}
                            className="inline-flex items-center justify-center bg-gray-900 text-white text-sm font-medium px-8 py-4 rounded-full hover:bg-gray-700 transition-colors"
                        >
                            Hire Me
                        </Link>

                        <button
                            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                            aria-label="Toggle theme"
                            className="inline-flex items-center gap-2 w-fit text-gray-400 hover:text-gray-900 transition-colors cursor-pointer"
                        >
                            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                            <span className="text-sm">{resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}</span>
                        </button>

                        {/* Bottom Info */}
                        <div className="mt-auto flex flex-col gap-2">
                            <p className="text-sm text-gray-400">Based in Addis Ababa, Ethiopia</p>
                            <p className="text-sm text-gray-400">Available for remote opportunities</p>

                            <a href="mailto:myrita099@gmail.com"
                                className="text-sm text-gray-900 font-medium hover:text-blue-600 transition-colors"
                            >
                                myrita099@gmail.com
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header >
    );
}