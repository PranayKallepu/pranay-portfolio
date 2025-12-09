"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { Button } from "./ui/Button";
import Link from "next/link";
import { useState, useRef } from "react";
import emailjs from '@emailjs/browser';

export function Contact() {
    const formRef = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: "",
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ||
            !process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ||
            !process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
            alert("EmailJS is not configured. Please check your environment variables.");
            return;
        }

        setIsSubmitting(true);

        try {
            if (formRef.current) {
                await emailjs.sendForm(
                    process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                    process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                    formRef.current,
                    process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
                );
                alert("Message sent successfully!");
                setFormData({ user_name: "", user_email: "", message: "" });
            }
        } catch (error) {
            console.error("EmailJS Error:", error);
            alert("Failed to send message. Please try again later.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-20 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px] -z-10" />

            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
                        <p className="text-muted-foreground text-lg mb-8">
                            I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a href="mailto:pranaykallepu05@gmail.com" className="font-semibold hover:text-primary transition-colors">
                                        pranaykallepu05@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <a href="tel:8186916811" className="font-semibold hover:text-primary transition-colors">
                                        +91 8186916811
                                    </a>
                                </div>
                            </div>

                            <div className="flex gap-4 pt-4">
                                <Link href="https://github.com/PranayKallepu" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                                    <Github className="w-5 h-5" />
                                </Link>
                                <Link href="https://linkedin.com/in/pranayKallepu" className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                                    <Linkedin className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-card p-8 rounded-2xl border border-border glass"
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="user_name" className="block text-sm font-medium mb-2">Name</label>
                                <input
                                    type="text"
                                    id="user_name"
                                    name="user_name"
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="Your Name"
                                    required
                                    value={formData.user_name}
                                    onChange={(e) => setFormData({ ...formData, user_name: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="user_email" className="block text-sm font-medium mb-2">Email</label>
                                <input
                                    type="email"
                                    id="user_email"
                                    name="user_email"
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                    placeholder="your@email.com"
                                    required
                                    value={formData.user_email}
                                    onChange={(e) => setFormData({ ...formData, user_email: e.target.value })}
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg bg-background/50 border border-input focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="Type your message..."
                                    required
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                />
                            </div>
                            <Button type="submit" className="w-full h-12 text-lg" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                        Sending...
                                    </>
                                ) : (
                                    <>
                                        Send Message
                                        <Send className="w-4 h-4 ml-2" />
                                    </>
                                )}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
