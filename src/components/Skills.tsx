"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Python", "C++", "HTML", "CSS", "JavaScript", "TypeScript"],
        color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    },
    {
        title: "Frameworks",
        skills: ["Next.js", "React.js", "Node.js", "Express.js", "TailwindCSS"],
        color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    },
    {
        title: "Tools",
        skills: ["Git", "GitHub", "VS Code", "CursorAI"],
        color: "bg-pink-500/10 text-pink-500 border-pink-500/20",
    },
    {
        title: "Databases",
        skills: ["MySQL", "MongoDB", "PostgreSQL"],
        color: "bg-green-500/10 text-green-500 border-green-500/20",
    },
    {
        title: "Core Concepts",
        skills: ["DSA (C++)", "OS", "CN", "DBMS"],
        color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
    },
    {
        title: "Soft Skills",
        skills: ["Teamwork", "Problem Solving", "Communication", "Adaptability"],
        color: "bg-yellow-500/10 text-yellow-500 border-yellow-500/20",
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 bg-black/20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills</h2>
                    <div className="w-20 h-1 bg-secondary mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            className="p-6 rounded-xl border bg-card/50 backdrop-blur-sm border-border hover:shadow-lg transition-all"
                        >
                            <h3 className="text-xl font-semibold mb-4 text-foreground">{category.title}</h3>
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className={`px-3 py-1 rounded-full text-sm font-medium border ${category.color}`}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
