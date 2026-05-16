import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-8 px-6 md:px-16 lg:px-32 bg-white border-t border-gray-100">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

                {/* Logo */}
                <Link
                    href="#"
                    aria-label="Go to top"
                    className="text-lg font-bold text-gray-900 tracking-tight"
                >
                    Biniyam.
                </Link>

                {/* Copyright */}
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Biniyam Abera. All rights reserved.
                </p>

                {/* Links */}
                <div className="flex items-center gap-6">
                    <Link href="#about" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">About</Link>
                    <Link href="#projects" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Projects</Link>
                    <Link href="#contact" className="text-sm text-gray-400 hover:text-gray-900 transition-colors">Contact</Link>
                </div>

            </div>
        </footer>
    );
}