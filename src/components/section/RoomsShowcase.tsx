'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

type Room = {
    title: string;
    price: string;       // e.g. "$333.0 Night"
    src: string;         // /images/rooms/...
    span?: string;       // grid span classes for the 2nd row
    alt: string;
};

const rooms: Room[] = [
    { title: "Deluxe Room",        price: "$333.0 Night", src: "/room.jpg",  alt: "Deluxe room with warm wood walls" },
    { title: "Modern Room",        price: "$333.0 Night", src: "/bedroom1.jpg",  alt: "Modern room with soft lighting" },
    { title: "Cozy Room",          price: "$333.0 Night", src: "/bedroom.jpg",  alt: "Cozy room with green accent wall" },
    { title: "Family Suite",       price: "$333.0 Night", src: "/bedroom1.jpg",  alt: "Family suite with balcony", span: "md:col-span-2" },
];

/* ---- Motion presets (typed to avoid TS errors) ---- */
const fadeUp: Variants = {
    hidden: { opacity: 0, y: 22 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const gridStagger: Variants = {
    hidden: { opacity: 0 },
    show:   { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const cardIn: Variants = {
    hidden: { opacity: 0, y: 18, scale: 0.98 },
    show:   { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function RoomsShowcase() {
    return (
        <section className="relative px-6 py-16 md:py-24 bg-[#413224] text-white">
            <div className="mx-auto max-w-6xl">
                {/* Header row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                    <motion.div className="md:col-span-2" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
                        <p className="text-[12px] uppercase tracking-[0.2em] text-white/70">Room / Suite</p>
                        <h2 className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
                            Elegantly<br className="hidden md:block" /> Curated Rooms
                        </h2>
                    </motion.div>

                    <motion.div
                        className="space-y-4 md:justify-self-end"
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <p className="text-white/80 max-w-sm">
                            Every room is designed with comfort, style, and sophistication to give you a truly luxurious stay.
                        </p>
                        <a
                            href="#rooms"
                            className="inline-flex items-center gap-2 rounded-full bg-white text-neutral-900 px-5 py-2.5 text-sm font-medium hover:opacity-90 transition"
                        >
                            View All Rooms <span aria-hidden>→</span>
                        </a>
                    </motion.div>
                </div>

                {/* Grid */}
                <motion.div
                    className="mt-8 md:mt-12 grid grid-cols-1 md:grid-cols-3 gap-5"
                    variants={gridStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {rooms.slice(0, 3).map((room) => (
                        <RoomCard key={room.title} {...room} />
                    ))}
                </motion.div>

                {/* Bottom row */}
                <motion.div
                    className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-5"
                    variants={gridStagger}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {rooms.slice(3).map((room) => (
                        <RoomCard key={room.title} {...room} className={room.span} />
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function RoomCard({
                      title,
                      price,
                      src,
                      alt,
                      className = "",
                  }: {
    title: string;
    price: string;
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <motion.article
            variants={cardIn}
            whileHover={{ scale: 1.01 }}
            className={`relative overflow-hidden rounded-xl ${className}`}
        >
            <div className="relative h-[220px] sm:h-[260px] md:h-[280px]">
                <Image
                    src={src}
                    alt={alt}
                    fill
                    priority={false}
                    quality={90}
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-4">
                <h3 className="text-white text-base md:text-lg font-medium">{title}</h3>
                <p className="text-white/85 text-sm">Price from {price}</p>
            </div>

            <span className="absolute inset-0 rounded-xl ring-0 hover:ring-1 ring-white/30 transition" />
        </motion.article>
    );
}
