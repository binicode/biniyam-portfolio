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
        "w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50",
        "text-gray-900 text-sm placeholder:text-gray-400",
        "focus:outline-none focus:border-blue-400 focus:bg-white",
        "transition-colors"
    );

    return (
        <section
            id="contact"
            aria-label="Contact"
            className="py-24 px-6 md:px-16 lg:px-32 bg-gray-50"
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
                    <p className="text-sm font-medium text-blue-600 uppercase tracking-widest mb-2">
                        Let's Work Together
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
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
                            className="flex flex-col gap-4"
                        >
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700 mb-1.5"
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
                                    className="block text-sm font-medium text-gray-700 mb-1.5"
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
                                    className="block text-sm font-medium text-gray-700 mb-1.5"
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

                            {/* Submit Button */}
                            <button
                                type="submit"
                                disabled={status === "loading"}
                                aria-label="Send message"
                                className={cn(
                                    "inline-flex items-center justify-center gap-2",
                                    "bg-gray-900 text-white px-8 py-3 rounded-full",
                                    "font-medium text-sm hover:bg-gray-700 transition-colors",
                                    "disabled:opacity-60 disabled:cursor-not-allowed"
                                )}
                            >
                                <Send size={16} aria-hidden="true" />
                                {status === "loading" ? "Sending..." : "Send Message"}
                            </button>

                            {/* Success Message */}
                            {status === "success" && (
                                <div className="flex items-center gap-2 text-emerald-600 text-sm">
                                    <CheckCircle2 size={16} aria-hidden="true" />
                                    Message sent successfully. I will get back to you soon.
                                </div>
                            )}

                            {/* Error Message */}
                            {status === "error" && (
                                <div className="flex items-center gap-2 text-red-500 text-sm">
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
                        className="flex flex-col gap-8"
                    >
                        <p className="text-gray-500 leading-relaxed text-lg">
                            {contactData.intro}
                        </p>

                        <div className="flex flex-col gap-4">

                            <a href={`mailto:${contactData.email}`}
                                aria-label="Send an email"
                                className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Mail size={18} aria-hidden="true" />
                                </div>
                                <span className="text-sm">{contactData.email}</span>
                            </a>


                            <a href={contactData.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit GitHub profile"
                                className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <Code2 size={18} aria-hidden="true" />
                                </div>
                                <span className="text-sm">github.com/binicode</span>
                            </a>


                            <a href={contactData.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Visit LinkedIn profile"
                                className="inline-flex items-center gap-3 text-gray-600 hover:text-gray-900 transition-colors"
                            >
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                    <span className="text-xs font-bold text-gray-500">in</span>
                                </div>
                                <span className="text-sm">LinkedIn — Coming Soon</span>
                            </a>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}