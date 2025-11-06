'use client';

import { motion } from 'framer-motion';
import type { Variants } from "framer-motion";
import {
    BedDouble, Sofa, UtensilsCrossed, BadgeCheck,
    Wifi, Car, Thermometer, LayoutPanelLeft
} from 'lucide-react';

type Amenity = { name: string; icon: React.ElementType };

const amenities: Amenity[] = [
    { name: 'Living Rooms',        icon: Sofa },
    { name: 'Luxury Bedrooms',     icon: BedDouble },
    { name: 'Modular Kitchen',     icon: UtensilsCrossed },
    { name: 'Fine Furnishing',     icon: BadgeCheck },
    { name: 'Free Wifi',           icon: Wifi },
    { name: 'Sit-Out Area',        icon: LayoutPanelLeft },
    { name: 'Private Parking',     icon: Car },
    { name: 'Air Conditioning',     icon: Thermometer },
];

const container: Variants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' }},
};

export default function Amenities() {
    return (
        <section className="relative py-14 md:py-20 bg-gradient-to-b from-[#F5F5F5] to-[#FFFFFF]">
            <div className="mx-auto max-w-6xl px-6 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10">

                <div className="md:col-span-4">
                    <h2 className="text-2xl md:text-3xl font-semibold text-neutral-900">
                        Elevate Your Stay with<br /> Our Premium Amenities
                    </h2>
                    <p className="mt-3 text-neutral-600">
                        Indulge in a world of luxury and comfort with our exclusive resort amenities,
                        designed to create unforgettable experiences for you.
                    </p>
                </div>

                <motion.div
                    className="md:col-span-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {amenities.map(({ name, icon: Icon }) => (
                        <motion.div
                            key={name}
                            variants={item}
                            className="rounded-xl border border-neutral-200 bg-white shadow-sm hover:shadow-md transition-shadow"
                        >
                            <div className="flex h-28 sm:h-32 flex-col items-center justify-center gap-2 px-3">
                                <Icon className="h-7 w-7 text-[#EDB41A]" strokeWidth={1.8} />
                                <span className="text-xs sm:text-sm text-neutral-800">{name}</span>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
