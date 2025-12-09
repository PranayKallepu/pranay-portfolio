"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
    {
        role: "Freelance Developer",
        company: "Self-Employed",
        period: "July 2025 - Present",
        description: "Leading the development of a Pharmacy Software system (80% complete), focusing on scalability and security.",
        type: "Past",
    },
    {
        role: "Web Developer Intern",
        company: "NPM Recruitment",
        period: "Nov 2025 - Dec 2025",
        description: "Building scalable web solutions using MERN stack.",
        type: "Current",
    }
    // Added some mock experience to fill the timeline if needed or stick to the prompt
];

export function Experience() {
    return (
        <section id="experience" className="py-20 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
                    <div className="w-20 h-1 bg-purple-500 mx-auto rounded-full" />
                </div>

                <div className="max-w-3xl mx-auto">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0"
                        >
                            <div className="absolute top-0 -left-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                            <div className="bg-card/50 p-6 rounded-xl border border-border hover:border-primary/50 transition-colors">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                                        <p className="text-primary font-medium">{exp.company}</p>
                                    </div>
                                    <span className="text-sm text-muted-foreground mt-2 md:mt-0 bg-secondary/10 px-3 py-1 rounded-full border border-secondary/20 w-fit">
                                        {exp.period}
                                    </span>
                                </div>
                                <p className="text-muted-foreground">{exp.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
