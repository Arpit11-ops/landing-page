import { BentoCard } from "../ui/BentoCard";
import { Globe, Smartphone, Server, LineChart, Code2, Users } from "lucide-react";

export function ServicesSection() {
    const services = [
        {
            title: "Custom Web Development",
            description: "We build scalable, high-performance web applications using cutting-edge frameworks like Next.js and React. From corporate sites to complex SaaS platforms, we deliver technical excellence.",
            icon: <Globe size={24} />,
            className: "md:col-span-2 md:row-span-2 min-h-[400px]",
            color: "rgba(124, 58, 237, 0.15)", // Violet
        },
        {
            title: "Mobile App Development",
            description: "Native and cross-platform mobile experiences that engage users and drive growth.",
            icon: <Smartphone size={24} />,
            className: "md:col-span-2 md:row-span-1 min-h-[200px]",
            color: "rgba(6, 182, 212, 0.15)", // Cyan
        },
        {
            title: "Premium Hosting",
            description: "Lightning-fast, secure, and reliable hosting tailored for businesses.",
            icon: <Server size={24} />,
            className: "md:col-span-1 md:row-span-1 min-h-[200px]",
            color: "rgba(236, 72, 153, 0.15)", // Rose
        },
        {
            title: "Digital Marketing",
            description: "Data-driven SEO and PPC to maximize your ROI.",
            icon: <LineChart size={24} />,
            className: "md:col-span-1 md:row-span-1 min-h-[200px]",
            color: "rgba(34, 197, 94, 0.15)", // Green
        },
        {
            title: "Software Solutions",
            description: "Custom enterprise software designed to streamline operations.",
            icon: <Code2 size={24} />,
            className: "md:col-span-1 md:row-span-1 min-h-[200px]",
            color: "rgba(249, 115, 22, 0.15)", // Orange
        },
        {
            title: "Expert Training",
            description: "Empowering engineers with modern technologies.",
            icon: <Users size={24} />,
            className: "md:col-span-3 md:row-span-1 min-h-[200px]",
            color: "rgba(59, 130, 246, 0.15)", // Blue
        },
    ];

    return (
        <section id="services" className="py-32 relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="mesh-blob top-0 -right-[10%] w-[500px] h-[500px] bg-brand-accent1/5" />
            <div className="mesh-blob bottom-0 -left-[10%] w-[600px] h-[600px] bg-brand-accent2/5" />

            <div className="max-w-[1200px] mx-auto px-6 relative z-10">
                <div className="mb-20 text-center md:text-left">
                    <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                        Our Digital <span className="text-gradient">Arsenal.</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl text-lg md:text-xl leading-relaxed">
                        We provide a comprehensive suite of digital services designed to accelerate your business growth and digital transformation.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-fr">
                    {services.map((service, index) => (
                        <BentoCard
                            key={service.title}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            className={service.className}
                            color={service.color}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
