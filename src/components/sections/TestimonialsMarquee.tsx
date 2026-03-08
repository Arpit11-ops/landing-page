"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function TestimonialsMarquee() {
    const testimonials = [
        {
            name: "Ravi Sharma",
            role: "CEO, TechInnovate",
            text: "AR Solutions radically transformed our online presence. Their development process is seamless, and the final product is stunning.",
        },
        {
            name: "Priya Desai",
            role: "Founder, Lifestyle India",
            text: "The web hosting is blazing fast. We haven't experienced a single minute of downtime since we migrated our e-commerce store.",
        },
        {
            name: "Amit Patel",
            role: "Marketing Director",
            text: "Their digital marketing strategies doubled our inbound leads in just 3 months. Outstanding ROI.",
        },
        {
            name: "Sneha Gupta",
            role: "Operations Manager",
            text: "The custom software they built streamlined our entire supply chain. Highly recommend their engineering team.",
        },
    ];

    // Duplicate the array to create the infinite scroll illusion
    const doubledTestimonials = [...testimonials, ...testimonials];

    return (
        <section className="py-24 border-y border-brand-border bg-surface-hover/10 overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 mb-16 text-center">
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                    Trusted by <span className="text-gradient">Visionaries.</span>
                </h2>
            </div>

            <div className="relative flex w-full overflow-hidden">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />

                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ ease: "linear", duration: 30, repeat: Infinity }}
                    className="flex animate-marquee gap-8 py-8 px-4"
                >
                    {doubledTestimonials.map((t, idx) => (
                        <div
                            key={idx}
                            className="w-[350px] md:w-[450px] shrink-0 p-10 rounded-[32px] border border-brand-border bg-surface/50 backdrop-blur-sm flex flex-col gap-8 shadow-premium-md hover:shadow-premium-xl transition-all duration-500 hover:-translate-y-2"
                        >
                            <div className="flex gap-1 text-brand-accent1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                                ))}
                            </div>
                            <p className="text-lg md:text-xl font-medium leading-relaxed italic opacity-90">
                                "{t.text}"
                            </p>
                            <div className="flex items-center gap-4 mt-auto">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-brand-accent1/20 to-brand-accent2/20 border border-brand-border" />
                                <div>
                                    <span className="block font-black tracking-tight text-foreground uppercase text-xs">{t.name}</span>
                                    <span className="block text-xs text-text-muted font-medium">{t.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
            </div>
        </section>
    );
}
