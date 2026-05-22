"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Code2, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { contactData } from "@/data/portfolio";
import { fadeUpVariant } from "@/lib/animations";
import { cn } from "@/lib/utils";

type FormState = {
    name: string;
    email: string;
    message: string;
};

type SubmitStatus = "idle" | "loading" | "success" | "error";

export default function Contact() {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState<SubmitStatus>("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            await emailjs.send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
                {
                    name: form.name,
                    email: form.email,
                    message: form.message,
                    time: new Date().toLocaleString(),
                },
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
            );
            setStatus("success");
            setForm({ name: "", email: "", message: "" });
        } catch {
            setStatus("error");
        }
    };

    const inputClass = cn(
        "w-full px-4 py-3.5 rounded-xl border",
        "border-stone-200 dark:border-gray-700",
        "bg-white dark:bg-gray-900",
        "text-stone-900 dark:text-slate-50",
        "text-sm placeholder:text-stone-400 dark:placeholder:text-gray-500",
        "focus:outline-none focus:border-amber-400 dark:focus:border-cyan-500",
        "transition-colors"
    );

    return (
        <section
            id="contact"
            aria-label="Contact"
            className="py-24 px-6 md:px-16 lg:px-32 bg-stone-100 dark:bg-gray-900"
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
                        Let's Work Together
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-stone-900 dark:text-slate-50">
                        {contactData.heading}
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Left — Form */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.1}
                    >
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                            className="flex flex-col gap-5"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-semibold text-stone-700 dark:text-gray-300 mb-2"
                                >
                                    Name
                                </label>
                                <input
                                    id="name"
                                    name="name"
                                    type="text"
                                    required
                                    placeholder="Your name"
                                    value={form.name}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-semibold text-stone-700 dark:text-gray-300 mb-2"
                                >
                                    Email
                                </label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    placeholder="your@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="message"
                                    className="block text-sm font-semibold text-stone-700 dark:text-gray-300 mb-2"
                                >
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={6}
                                    placeholder="Tell me about your project or opportunity..."
                                    value={form.message}
                                    onChange={handleChange}
                                    className={cn(inputClass, "resize-none")}
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                aria-label="Send message"
                                className={cn(
                                    "inline-flex items-center gap-2 w-fit",
                                    "bg-amber-700 dark:bg-cyan-500 text-white dark:text-gray-950",
                                    "px-8 py-3.5 rounded-full font-semibold text-sm",
                                    "hover:bg-amber-800 dark:hover:bg-cyan-400 hover:scale-105 transition-all",
                                    "disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 cursor-pointer"
                                )}
                            >
                                <Send size={16} aria-hidden="true" />
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>

                            {status === "success" && (
                                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 text-sm font-medium">
                                    <CheckCircle2 size={16} aria-hidden="true" />
                                    Message sent successfully. I will get back to you soon.
                                </div>
                            )}

                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-500 dark:text-red-400 text-sm font-medium">
                                    <AlertCircle size={16} aria-hidden="true" />
                                    Something went wrong. Please try again or email me directly.
                                </div>
                            )}
                        </form>
                    </motion.div>

                    {/* Right — Contact Info */}
                    <motion.div
                        variants={fadeUpVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        custom={0.2}
                        className="flex flex-col gap-10 lg:pt-2"
                    >
                        <p className="text-stone-500 dark:text-gray-400 leading-relaxed text-lg">
                            Have a project in mind or want to discuss an opportunity? Send me a message and I will get back to you as soon as possible.
                        </p>

                        <div className="flex flex-col gap-4">

                            <a href={`mailto:${contactData.email}`}
                                aria-label="Send an email"
                                className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-stone-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-cyan-800 transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-cyan-950 flex items-center justify-center shrink-0">
                                    <Mail size={18} className="text-amber-700 dark:text-cyan-400" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-xs text-stone-400 dark:text-gray-500 mb-0.5">Email</p>
                                    <p className="text-sm font-medium text-stone-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-cyan-400 transition-colors">{contactData.email}</p>
                                </div>
                            </a>


                            <a href={contactData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit GitHub profile"
                                className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-stone-100 dark:border-gray-700 hover:border-amber-200 dark:hover:border-cyan-800 transition-all"
                            >
                                <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-cyan-950 flex items-center justify-center shrink-0">
                                    <Code2 size={18} className="text-amber-700 dark:text-cyan-400" aria-hidden="true" />
                                </div>
                                <div>
                                    <p className="text-xs text-stone-400 dark:text-gray-500 mb-0.5">GitHub</p>
                                    <p className="text-sm font-medium text-stone-700 dark:text-gray-300 group-hover:text-amber-700 dark:group-hover:text-cyan-400 transition-colors">github.com/binicode</p>
                                </div>
                            </a>

                            <div className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-stone-100 dark:border-gray-700">
                                <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-cyan-950 flex items-center justify-center shrink-0">
                                    <span className="text-xs font-bold text-amber-700 dark:text-cyan-400">in</span>
                                </div>
                                <div>
                                    <p className="text-xs text-stone-400 dark:text-gray-500 mb-0.5">LinkedIn</p>
                                    <p className="text-sm font-medium text-stone-400 dark:text-gray-500">Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}