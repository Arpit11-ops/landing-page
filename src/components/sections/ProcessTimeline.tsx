"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function ProcessTimeline() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"],
    });

    const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    const steps = [
        { num: "01", title: "Discovery & Strategy", desc: "We deep dive into your business goals, target audience, and technical requirements to formulate a bulletproof digital strategy." },
        { num: "02", title: "UI/UX Design", desc: "Our design team crafts pixel-perfect, tailored user interfaces creating high-fidelity prototypes in Figma." },
        { num: "03", title: "Development", desc: "Our engineers bring the designs to life using modern tech stacks (React, Next.js, Node) with clean, scalable code." },
        { num: "04", title: "Launch & Iterate", desc: "Rigorous testing precedes the final launch. Post-launch, we monitor analytics and iterate for maximum conversion." }
    ];

    return (
        <section id="process" className="py-32 relative">
            <div className="max-w-[800px] mx-auto px-6 relative" ref={containerRef}>

                <div className="text-center mb-24">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                        Our <span className="text-gradient">Process.</span>
                    </h2>
                </div>

                {/* Central Line */}
                <div className="absolute left-[30px] top-[200px] bottom-0 w-[2px] bg-brand-border md:left-1/2 md:-translate-x-[1px]">
                    <motion.div
                        className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-accent1 to-brand-accent2 origin-top"
                        style={{ height: lineHeight }}
                    />
                </div>

                <div className="flex flex-col gap-24 relative z-10">
                    {steps.map((step, i) => (
                        <motion.div
                            key={step.num}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                            className={`flex flex-col md:flex-row gap-8 items-start relative ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"
                                }`}
                        >
                            {/* Timeline dot */}
                            <div className="absolute left-0 md:left-1/2 -translate-x-[4px] md:-translate-x-1/2 mt-2 w-4 h-4 rounded-full bg-surface border-2 border-brand-accent1 shadow-[0_0_15px_rgba(124,58,237,0.5)] z-20" />

                            <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"
                                }`}>
                                <span className="text-text-muted font-bold tracking-widest text-sm mb-2 block">
                                    PHASE {step.num}
                                </span>
                                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                                <p className="text-text-secondary leading-relaxed">
                                    {step.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
