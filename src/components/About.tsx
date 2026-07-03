"use client";

import { motion } from "framer-motion";
import { Briefcase, Brain, Database, Code2 } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Heading */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Side - Experience Cards */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />

              <div className="relative p-6 bg-card rounded-lg border border-border backdrop-blur-sm">
                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 bg-background/50 rounded-lg text-center hover:scale-105 transition-transform">
                    <Code2 className="w-8 h-8 mx-auto mb-3 text-primary" />
                    <span className="font-semibold block">Full Stack</span>
                  </div>

                  <div className="p-5 bg-background/50 rounded-lg text-center hover:scale-105 transition-transform">
                    <Briefcase className="w-8 h-8 mx-auto mb-3 text-secondary" />
                    <span className="font-semibold block">SDE-1</span>
                  </div>

                  <div className="p-5 bg-background/50 rounded-lg text-center hover:scale-105 transition-transform">
                    <Database className="w-8 h-8 mx-auto mb-3 text-accent" />
                    <span className="font-semibold block">Backend</span>
                  </div>

                  <div className="p-5 bg-background/50 rounded-lg text-center hover:scale-105 transition-transform">
                    <Brain className="w-8 h-8 mx-auto mb-3 text-blue-400" />
                    <span className="font-semibold block">AI Enthusiast</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - About Content */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a{" "}
                <span className="text-foreground font-semibold">
                  B.Tech Computer Science Engineering (AI & ML) graduate
                </span>{" "}
                from{" "}
                <span className="text-foreground font-semibold">
                  SVS Group of Institutions
                </span>
                . I am passionate about building scalable web applications and
                AI-powered solutions that solve real-world problems.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I worked as a{" "}
                <span className="text-foreground font-semibold">
                  Software Development Engineer-I (SDE-1)
                </span>{" "}
                at{" "}
                <span className="text-primary font-semibold">
                  Angry Tale Pvt. Ltd.
                </span>
                , where I contributed to production-grade applications using{" "}
                <span className="font-semibold text-foreground">
                  Next.js, TypeScript, Node.js, Express.js, GraphQL, and modern
                  web technologies
                </span>
                . This experience strengthened my expertise in full-stack
                development, system design, and building user-centric digital
                products.
              </p>

              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in{" "}
                <span className="text-foreground font-semibold">
                  JavaScript, TypeScript, React, Next.js, Node.js, and modern
                  web technologies
                </span>
                . I am passionate about Full-Stack Development, Artificial
                Intelligence, and building scalable software solutions.
              </p>

              {/* Quick Facts */}
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Quick Facts</h3>

                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-primary rounded-full" />
                    B.Tech CSE (AI & ML) Graduate
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-secondary rounded-full" />6
                    months of experience as Software Development Engineer
                    (SDE-1)
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full" />
                    Specialized in React, Next.js, Node.js & TypeScript
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-blue-400 rounded-full" />
                    Experience with MongoDB, PostgreSQL, MySQL, REST APIs &
                    GraphQL
                  </li>

                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-green-400 rounded-full" />
                    Actively seeking Full-Time Software Engineering
                    opportunities
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
