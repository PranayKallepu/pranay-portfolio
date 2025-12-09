"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/Button";

const projects = [
    {
        title: "AutoTasker-AI",
        description: "AI-powered task management app using Google Gemini API. Features real-time sync and actionable task generation.",
        tags: ["Next.js", "PostgreSQL", "Gemini API"],
        link: "https://autotasker-ai.netlify.app/",
        github: "https://github.com/pranaykallepu/AutoTasker-AI",
        image: "https://res.cloudinary.com/diykhbry3/image/upload/v1747987582/auto-tasker-ai_x9nkoc.png",
        color: "from-blue-500 to-cyan-500",
    },
    {
        title: "MealMOB App",
        description: "MERN stack food delivery platform with JWT auth, vendor dashboard, and shopping cart functionality.",
        tags: ["MongoDB", "Express", "React", "Node"],
        link: "https://mealmob-client.onrender.com",
        github: "https://github.com/pranaykallepu/MealMOB",
        image: "https://res.cloudinary.com/diykhbry3/image/upload/v1740647566/MealMOB-image_ydx2ms.png",
        color: "from-orange-500 to-red-500",
    },
    {
        title: "AI Voice Calculator",
        description: "Voice-controlled calculator using Web Speech API that speaks results aloud for accessibility.",
        tags: ["JavaScript", "Web Speech API", "CSS"],
        link: "https://calculator-speech.netlify.app",
        github: "https://github.com/PranayKallepu/voice-calculator",
        image: "https://res.cloudinary.com/diykhbry3/image/upload/v1758552894/Screenshot_2025-09-22_202324_m7xpan.png",
        color: "from-purple-500 to-indigo-500",
    },
    {
        title: "Pharmacy Software",
        description: "Freelance project: Comprehensive management system handling auth, sales, purchases, and staff management.",
        tags: ["MERN", "Redux", "JWT"],
        link: "https://pharmacy-management-system-theta-three.vercel.app/",
        github: "https://github.com/PranayKallepu/Pharmacy-management-system",
        image: "https://res.cloudinary.com/diykhbry3/image/upload/v1758553805/pharmacy_szsf2v.png",
        color: "from-emerald-500 to-teal-500",
    },
];

const ProjectCard = ({ project }: { project: typeof projects[0] }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onMouseMove={onMouseMove}
            className="group relative rounded-xl border border-white/10 bg-gray-900/50 hover:bg-gray-900/80 transition-all overflow-hidden h-[300px]"
        >
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-50 group-hover:opacity-60"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
            </div>

            <div className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity bg-gradient-to-br ${project.color} z-10 pointer-events-none`} />

            <div className="p-6 relative z-20 h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                        <span key={tag} className="text-xs px-2 py-1 rounded-full bg-black/50 border border-white/20 backdrop-blur-md text-white">
                            {tag}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4 mt-auto">
                    <Link href={project.github} target="_blank" className="w-full">
                        <Button size="sm" variant="outline" className="w-full bg-black/50 hover:bg-black/70 border-white/20 text-white hover:text-white">
                            <Github className="w-4 h-4 mr-2" />
                            Code
                        </Button>
                    </Link>
                    <Link href={project.link} target="_blank" className="w-full">
                        <Button size="sm" className="w-full">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Demo
                        </Button>
                    </Link>
                </div>
            </div>
        </motion.div>
    );
};

export function Projects() {
    return (
        <section id="projects" className="py-20 relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
                    <div className="w-20 h-1 bg-accent mx-auto rounded-full" />
                </div>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {projects.map((project) => (
                        <ProjectCard key={project.title} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}
