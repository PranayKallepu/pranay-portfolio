"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";
import { ArrowRight, Mail, FileText } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 pb-20 md:pb-0">
            {/* Background Gradients */}
            <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
            <div className="absolute top-0 -right-4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
            <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />

            <div className="container mx-auto px-4 text-center z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Profile Picture */}
                    <div className="relative w-45 h-45 md:w-60 md:h-60 mx-auto mb-8">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-pulse blur-sm opacity-50" />
                        <div className="relative w-full h-full rounded-full p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
                            <div className="w-full h-full rounded-full overflow-hidden bg-background relative">
                                <Image
                                    src="/profile.jpg"
                                    alt="Pranay Kallepu"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Animated Text */}
                    <motion.h1
                        className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 1 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.05,
                                    delayChildren: 0.2
                                }
                            }
                        }}
                    >
                        {Array.from(" Hi, I'm  ").map((char, index) => (
                            <motion.span
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <span className="text-gradient">
                            {Array.from("Pranay Kallepu").map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                    className="inline-block"
                                >
                                    {char === " " ? "\u00A0" : char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h1>
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
                >
                    Full Stack Developer & AI Enthusiast | Transforming ideas into scalable web solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                >
                    <Link href="#projects">
                        <Button size="lg" className="group">
                            View Projects
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                    <Link href="#contact">
                        <Button variant="outline" size="lg">
                            Contact Me
                            <Mail className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                    <a href="/resume.pdf" download="Pranay_Kallepu_Resume.pdf">
                        <Button variant="ghost" size="lg" className="border border-primary/20 hover:bg-primary/10">
                            Download CV
                            <FileText className="ml-2 h-4 w-4" />
                        </Button>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-2 md:bottom-1 left-1/2 -translate-x-1/2 animate-bounce"
            >
                <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-0">
                    <div className="w-1 h-2 bg-muted-foreground rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
