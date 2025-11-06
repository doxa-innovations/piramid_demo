'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from "@/components/ui/Button";
import Image from 'next/image';
import AboutShowcase from '@/components/section/AboutShowcase';
import Amenities from '@/components/section/Amenities';
import BookingHero from '@/components/section/BookingHero';
import Footer from "@/components/section/Footer";
import RoomsShowcase from "@/components/section/RoomsShowcase";



export default function Home() {
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ['start start', 'end start'],
    });
    const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

    return (
        <main className="relative">
            {/* NAVBAR */}
            <motion.header
                style={{ opacity }}
                initial={{ y: -40, backdropFilter: "blur(0px)" }}
                animate={{ y: 0, backdropFilter: "blur(6px)" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="
    fixed top-0 left-0 w-full z-50
    flex justify-between items-center
    px-8 py-4
    bg-transparent
    text-white
    transition-all duration-500"
            >
                {/* Logo */}
                <motion.img
                    src="/pyramidlogo.svg"
                    alt="Pyramid Resort Logo"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-32 mb-6"
                />

                <nav className="hidden md:flex items-center gap-8 text-sm">
                    <a href="#about" className="hover:opacity-80">About</a>
                    <a href="#rooms" className="hover:opacity-80">Rooms</a>
                    <a href="#menu" className="hover:opacity-80">Menu</a>
                    <a href="#contact" className="hover:opacity-80">Contact</a>
                    <Button

                        className="text-white border-white hover:bg-white hover:text-neutral-900 rounded-full text-xs px-5 py-2 transition"
                    >
                        Book Now
                    </Button>
                </nav>
            </motion.header>

            {/* HERO SECTION */}
            <section
                ref={heroRef}
                className="relative h-screen w-full"
            >
                {/* Background Image */}
                <Image
                    src="/pyramid.jpg" // place the image under /public/images/
                    alt="Pyramid Resort by the lakeside"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />

                {/* Hero Content */}
                <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-24 text-white max-w-3xl">

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="text-5xl md:text-7xl font-bold leading-tight tracking-tight"
                    >
                        VACATION <br /> BY THE LAKE <br /> SIDE
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="mt-6 text-gray-200 max-w-md text-base md:text-lg"
                    >
                        Discover Bishoftu’s modern lakeside retreat — golden sunsets, peaceful
                        mornings, and timeless hospitality.
                    </motion.p>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 1, delay: 0.6 }}
                        className="mt-8"
                    >
                        <Button

                            className="border border-white text-white hover:bg-yellow-500 hover:text-white rounded-full px-8 py-3 text-sm tracking-wide"
                        >
                            <a href="#rooms">Explore</a>
                        </Button>
                    </motion.div>
                </div>
            </section>




            {/*<section className="py-20 flex items-center justify-center">*/}
            {/*    <div className="rounded-3xl overflow-hidden shadow-xl w-[320px] md:w-[380px] lg:w-[420px]">*/}
            {/*        <video*/}
            {/*            src="/tiktokview.mp4"     // ✅ file exists?*/}
            {/*            poster="/pool.jpg"*/}
            {/*            autoPlay muted loop playsInline preload="metadata"*/}
            {/*            controls*/}
            {/*            className="w-full aspect-[9/16] object-cover"*/}
            {/*        />*/}
            {/*    </div>*/}
            {/*</section>*/}



            <AboutShowcase />
            <Amenities/>
            <BookingHero/>

            <RoomsShowcase />
            <Footer/>

            {/*/!* Placeholder next section so scroll works *!/*/}
            {/*<section className="h-[150vh] bg-white" id="about"></section>*/}
        </main>
    );
}
