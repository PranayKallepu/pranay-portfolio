"use client";

import { motion } from "framer-motion";
import { User, Code, Database, Terminal } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 relative overflow-hidden">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
                        <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left side - maybe an image placeholder or tech illustration */}
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                            <div className="relative p-6 bg-card rounded-lg border border-border glass">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-background/50 rounded-lg text-center">
                                        <Code className="w-8 h-8 mx-auto mb-2 text-primary" />
                                        <span className="font-semibold block">Full Stack</span>
                                    </div>
                                    <div className="p-4 bg-background/50 rounded-lg text-center">
                                        <Terminal className="w-8 h-8 mx-auto mb-2 text-secondary" />
                                        <span className="font-semibold block">Freelancer</span>
                                    </div>
                                    <div className="p-4 bg-background/50 rounded-lg text-center">
                                        <Database className="w-8 h-8 mx-auto mb-2 text-accent" />
                                        <span className="font-semibold block">Backend</span>
                                    </div>
                                    <div className="p-4 bg-background/50 rounded-lg text-center">
                                        <User className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                                        <span className="font-semibold block">Student</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right side - Content */}
                        <div className="space-y-6">
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                I am a final-year(4th) <span className="text-foreground font-semibold">B.Tech CSE(AIML) student</span> (2022-2026) at <span className="text-foreground font-semibold">SVS Group of Institutions</span> with a CGPA of <span className="text-primary font-bold">7.62</span>.
                            </p>

                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Currently, I work as a <span className="text-foreground font-semibold">Web Developer</span>, building scalable web solutions. I am passionate about transforming complex ideas into user-friendly digital experiences.
                            </p>

                            <div className="pt-4">
                                <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
                                <ul className="space-y-2 text-muted-foreground">
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-primary rounded-full" />
                                        Specialized in MERN Stack & Next.js
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-secondary rounded-full" />
                                        Active Open Source Contributor
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-accent rounded-full" />
                                        AI & Machine Learning Enthusiast
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
