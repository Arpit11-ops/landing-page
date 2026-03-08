"use client";

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { MouseEvent, ReactNode, useRef } from "react";

export function BentoCard({
    title,
    description,
    icon,
    className = "",
    delay = 0,
    color = "rgba(124, 58, 237, 0.1)",
}: {
    title: string;
    description: string;
    icon: ReactNode;
    className?: string;
    delay?: number;
    color?: string;
}) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useSpring(useMotionValue(0), { damping: 20, stiffness: 150 });
    const rotateY = useSpring(useMotionValue(0), { damping: 20, stiffness: 150 });

    function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        mouseX.set(x);
        mouseY.set(y);

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        rotateX.set((y - centerY) / 20);
        rotateY.set((centerX - x) / 20);
    }

    function handleMouseLeave() {
        rotateX.set(0);
        rotateY.set(0);
    }

    return (
        <motion.div
            ref={cardRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={`group relative flex flex-col justify-end overflow-hidden rounded-3xl border border-brand-border bg-surface p-8 transition-all hover:border-brand-accent1/20 hover:shadow-premium-xl ${className}`}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              ${color},
              transparent 80%
            )
          `,
                }}
            />
            <div className="relative z-10 flex flex-col gap-4" style={{ transform: "translateZ(20px)" }}>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground/5 text-foreground ring-1 ring-brand-border transition-all group-hover:bg-foreground group-hover:text-background group-hover:scale-110 shadow-premium-sm">
                    {icon}
                </div>
                <div>
                    <h3 className="mb-2 text-xl font-bold tracking-tight">{title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </motion.div>
    );
}
