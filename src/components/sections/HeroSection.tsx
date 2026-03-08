"use client";

import { motion } from "framer-motion";
import MagneticButton from "../ui/MagneticButton";
import Link from "next/link";

export function HeroSection() {
    return (
        <section id="home" className="relative min-h-[100svh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
            {/* Cinematic Background Depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-brand-accent1/5 rounded-full blur-[180px] opacity-20 pointer-events-none mix-blend-screen animate-pulse" />
            <div className="absolute top-[10%] left-[10%] w-[800px] h-[800px] bg-brand-accent2/10 rounded-full blur-[140px] opacity-25 pointer-events-none mix-blend-color-dodge" />
            <div className="absolute bottom-[10%] right-[10%] w-[700px] h-[700px] bg-brand-accent3/10 rounded-full blur-[160px] opacity-20 pointer-events-none mix-blend-screen" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10 flex flex-col items-center text-center">

                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-brand-border bg-surface/50 backdrop-blur-xl mb-10 shadow-premium-lg"
                >
                    <span className="w-2.5 h-2.5 rounded-full bg-brand-accent1 animate-ping"></span>
                    <span className="text-sm font-semibold tracking-wider uppercase opacity-80">India's Leading Digital Agency</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.05] mb-6"
                >
                    We Build <br className="hidden md:block" />
                    <span className="text-gradient">Digital Excellence.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="text-lg md:text-xl text-text-secondary max-w-[600px] mb-12"
                >
                    Transforming ideas into immersive, high-performance websites, mobile apps, and robust software solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <MagneticButton>
                        <Link
                            href="#contact"
                            className="inline-flex h-12 items-center justify-center rounded-full bg-foreground px-8 text-base font-semibold text-background transition-transform hover:scale-105"
                        >
                            Start a Project
                        </Link>
                    </MagneticButton>

                    <MagneticButton>
                        <Link
                            href="#services"
                            className="inline-flex h-12 items-center justify-center rounded-full border border-brand-border bg-surface/50 backdrop-blur-md px-8 text-base font-medium transition-colors hover:bg-surface hover:border-text-muted"
                        >
                            Explore Services
                        </Link>
                    </MagneticButton>
                </motion.div>
            </div>
        </section>
    );
}
