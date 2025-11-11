'use client';

import Image from 'next/image';
import { motion, type MotionProps } from 'framer-motion';

// If your project uses /public at repo root, prefer string srcs like "/viewpicture1.jpg".
// Static imports in a /src project require moving images into /src/assets (recommended) or using "@/../public/...".

const fadeUp = (d = 0): MotionProps => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-80px' },
    transition: { duration: 0.7, ease: 'easeOut', delay: d },
});

export default function AboutShowcase() {
    return (
        <section className="relative overflow-hidden bg-[url('/paper-texture4.jpg')] bg-repeat py-16 md:py-24">
            {/* Ornaments */}
            <svg className="pointer-events-none absolute -left-24 top-24 h-52 w-52 opacity-20 text-[#D4A76A]" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="80" stroke="currentColor" strokeDasharray="2 6" strokeWidth="2" />
                <circle cx="100" cy="100" r="55" stroke="currentColor" strokeDasharray="2 6" strokeWidth="2" />
            </svg>
            <svg className="pointer-events-none absolute right-[-40px] bottom-24 h-56 w-56 opacity-20 text-[#D4A76A]" viewBox="0 0 200 200" fill="none">
                <circle cx="100" cy="100" r="70" stroke="currentColor" strokeDasharray="3 8" strokeWidth="2" />
            </svg>

            {/* Top tagline */}
            <motion.p {...fadeUp(1)} className="mx-auto max-w-2xl px-6 text-center text-sm md:text-base text-neutral-600">
                Sunrises and sunsets are simply beautiful. Enjoy them while you’re on vacation! Let the journey begin—a world of
                adventures, relaxation, and memories awaits.
            </motion.p>

            {/* Row 1: copy + large image */}
            <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 items-start gap-8 px-6 md:mt-14 md:grid-cols-12 md:gap-10">
                <motion.div {...fadeUp(1)} className="md:col-span-4">
                    <p className="text-xs uppercase tracking-widest text-neutral-500">About</p>
                    <h2 className="mt-2 text-3xl font-semibold leading-tight text-neutral-900 md:text-4xl">
                        Welcome To <span className="text-[#D4A76A]">Pyramid</span>
                    </h2>
                    <p className="mt-4 text-neutral-600">
                        We blend contemporary Ethiopian minimalism with lakeside calm. Enjoy crafted spaces, thoughtful service, and
                        an atmosphere designed for slow mornings and golden-hour evenings.
                    </p>
                    <a
                        href="#rooms"
                        className="mt-6 inline-flex items-center justify-center rounded-full border border-neutral-900 px-5 py-2 text-xs uppercase tracking-wider text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                    >
                        Explore
                    </a>
                </motion.div>

                <motion.div {...fadeUp(0.2)} className="md:col-span-8 relative rounded-2xl overflow-hidden">
                    <div className="relative h-[260px] w-full overflow-hidden rounded-xl md:h-[420px]">
                        <Image
                            src="/pyramidview.jpg"  // in /public
                            alt="Lakeside lounge with umbrellas"
                            fill
                            className="object-cover"
                            placeholder="blur"
                            blurDataURL="/_blur/heroA" /* optional: remove if you don't generate */
                            sizes="(min-width: 1024px) 800px, 100vw"
                            priority
                            quality={95}
                        />
                    </div>
                    <div className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 opacity-50">
                        <svg width="180" height="180" viewBox="0 0 200 200" fill="none" className="text-[#D4A76A]">
                            <circle cx="100" cy="100" r="70" stroke="currentColor" strokeDasharray="2 6" strokeWidth="2" />
                        </svg>
                    </div>
                </motion.div>
            </div>

            {/* Row 2: mosaic + copy */}
            <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 px-6 md:mt-20 md:grid-cols-12 md:gap-10">
                <motion.div {...fadeUp(0.03)} className="md:col-span-4 md:-mt-10 relative border-black/5 shadow-sm backdrop-blur">
                    <div className="relative h-[220px] w-full overflow-hidden rounded-xl md:h-[320px]">
                        <Image src="/cocktail1.jpg" alt="Breakfast by the lake" fill className="object-cover" sizes="(min-width: 1024px) 380px, 100vw" quality={95} />
                    </div>
                </motion.div>

                <motion.div {...fadeUp(0.4)} className="md:col-span-8 relative rounded-2xl overflow-hidden">
                    <div className="relative h-[220px] w-full overflow-hidden rounded-xl md:h-[320px]">
                        <Image src="/windowview.jpg" alt="Infinity pool overlooking the lake" fill className="object-cover" sizes="(min-width: 1024px) 380px, 100vw" quality={95} />
                    </div>
                </motion.div>

                <motion.div {...fadeUp(0.5)} className="md:col-span-4 flex flex-col justify-center">
                    <p className="text-xs uppercase tracking-widest text-neutral-500">Services</p>
                    <h3 className="mt-2 text-2xl font-semibold text-neutral-900 md:text-3xl">
                        Luxury Plaza <br /> Resort For You
                    </h3>
                    <p className="mt-4 text-neutral-600">
                        From sunrise yoga decks to curated dining, every detail is designed for comfort and style. Come for the weekend—stay for the feeling.
                    </p>
                    <a
                        href="#menu"
                        className="mt-6 inline-flex w-max items-center justify-center rounded-full border border-neutral-900 px-5 py-2 text-xs uppercase tracking-wider text-neutral-900 transition-colors hover:bg-neutral-900 hover:text-white"
                    >
                        Explore
                    </a>
                </motion.div>
            </div>

            {/* Bottom tall image */}
            <div className="mx-auto mt-10 max-w-6xl px-6 md:mt-14">
                <motion.div {...fadeUp(0.06)} className="md:col-span-8 relative rounded-2xl overflow-hidden">
                    <div className="relative h-[340px] w-full overflow-hidden rounded-xl md:h-[520px]">
                        <Image src="/chef.jpg" alt="Warm bedroom with ambient light" fill className="object-cover" sizes="(min-width: 1024px) 420px, 100vw" quality={95} />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
