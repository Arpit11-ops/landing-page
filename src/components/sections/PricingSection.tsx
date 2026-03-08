"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function PricingSection() {
    const plans = [
        {
            name: "Starter",
            price: "Rs. 999",
            period: "/month",
            description: "Perfect for single landing pages and emerging startups.",
            features: ["1 Website", "10GB SSD Storage", "Free SSL Certificate", "Basic Support"],
            isPopular: false,
        },
        {
            name: "Pro",
            price: "Rs. 2,499",
            period: "/month",
            description: "For growing businesses needing performance and reliability.",
            features: ["Unlimited Websites", "50GB NVMe Storage", "Free Domain (1st Year)", "Daily Backups", "Priority 24/7 Support"],
            isPopular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Dedicated resources for high-traffic agency applications.",
            features: ["Dedicated Server", "Unlimited Storage", "Advanced Security", "White-glove Migration", "Dedicated Account Manager"],
            isPopular: false,
        },
    ];

    return (
        <section id="hosting" className="relative overflow-hidden py-32">
            <div className="mesh-blob top-0 -left-[5%] h-[500px] w-[500px] bg-brand-accent2/5" />
            <div className="mesh-blob bottom-20 -right-[5%] h-[600px] w-[600px] bg-brand-accent3/5" />

            <div className="relative z-10 mx-auto max-w-[1200px] px-6">
                <div className="mb-20 text-center">
                    <h2 className="mb-6 text-4xl font-black tracking-tighter md:text-6xl">
                        Premium <span className="text-gradient">Web Hosting.</span>
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-text-secondary md:text-xl">
                        High-performance hosting infrastructure tailored for businesses of all sizes.
                    </p>
                </div>

                <div className="grid grid-cols-1 justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {plans.map((plan, i) => (
                        <motion.div
                            key={plan.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className={`relative mx-auto flex h-full w-full max-w-[360px] flex-col rounded-[32px] border p-8 transition-all duration-500 ${
                                plan.isPopular
                                    ? "z-10 scale-100 border-brand-accent1/30 bg-surface shadow-premium-xl md:scale-105"
                                    : "border-brand-border bg-surface/40 backdrop-blur-md hover:border-brand-accent1/20 hover:shadow-premium-lg"
                            }`}
                        >
                            {plan.isPopular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-accent1 to-brand-accent2 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-white shadow-lg">
                                    Highly Recommended
                                </div>
                            )}

                            <div className="mb-8">
                                <h3 className={`text-2xl font-black tracking-tight ${plan.name === "Pro" ? "text-gradient" : ""}`}>
                                    {plan.name}
                                </h3>
                                <p className="h-10 text-sm text-text-secondary">{plan.description}</p>
                            </div>

                            <div className="mb-8 flex items-baseline gap-1">
                                <span className="text-4xl font-black">{plan.price}</span>
                                <span className="text-sm font-medium text-text-muted">{plan.period}</span>
                            </div>

                            <ul className="mb-10 flex-grow space-y-4">
                                {plan.features.map((feature) => (
                                    <li key={feature} className="flex items-center gap-3 text-sm text-text-secondary">
                                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-accent1/10 text-brand-accent1">
                                            <Check size={12} strokeWidth={3} />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full rounded-2xl py-4 font-bold tracking-tight transition-all active:scale-95 ${
                                    plan.isPopular
                                        ? "bg-foreground text-background shadow-foreground/10 hover:shadow-lg"
                                        : "border border-brand-border bg-background hover:bg-surface-hover"
                                }`}
                            >
                                Get {plan.name}
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
