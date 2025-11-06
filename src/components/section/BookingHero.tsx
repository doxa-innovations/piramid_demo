'use client';

import Image from "next/image";
import { useState } from "react";
import {Button} from "@/components/ui/Button";

export default function BookingHero() {
    const [resort, setResort] = useState("Zen Villa");
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [roomsFor, setRoomsFor] = useState("1 room, 2 guests");

    return (
        <section className="px-4 py-2 bg-gradient-to-b from-white to-yellow-500 text-white">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl">
                {/* Hero image */}
                <div className="relative h-[46vh] min-h-[360px]">
                    <Image
                        src="/viewpicture1.jpg" // put your file in /public/images/
                        alt="Pyramid Resort"
                        fill
                        priority
                        className="object-cover"
                    />
                    {/* simple readable overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
                    {/* copy */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                            Enjoy a Luxurious Stay at Pyramid
                        </h1>
                        <p className="mt-2 text-white/85 text-sm md:text-base max-w-xl">
                            Lakeside comfort, modern rooms, and calm mornings in Bishoftu.
                        </p>
                    </div>
                </div>

                {/* Booking bar — minimal */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mx-auto -mt-6 w-[94%] md:w-[88%] rounded-2xl bg-white/95 backdrop-blur px-4 py-3 shadow-lg"
                    aria-label="Booking search"
                >
                    <div className="grid grid-cols-1 gap-3 md:grid-cols-5 md:items-center">
                        {/* Resort */}


                        {/* Check in */}
                        <div>
                            <label className="block text-[11px] uppercase tracking-wide text-neutral-500">Check In</label>
                            <input
                                type="date"
                                value={checkIn}
                                onChange={(e) => setCheckIn(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                        </div>

                        {/* Check out */}
                        <div>
                            <label className="block text-[11px] uppercase tracking-wide text-neutral-500">Check Out</label>
                            <input
                                type="date"
                                value={checkOut}
                                onChange={(e) => setCheckOut(e.target.value)}
                                className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                        </div>

                        {/* Rooms for */}
                        <div>
                            <label className="block text-[11px] uppercase tracking-wide text-neutral-500">Rooms for</label>
                            <input
                                type="text"
                                value={roomsFor}
                                onChange={(e) => setRoomsFor(e.target.value)}
                                placeholder="1 room, 2 guests"
                                className="mt-1 w-full rounded-lg border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            />
                        </div>

                        {/* CTA */}
                        <div className="md:self-end">
                            <button
                                type="submit"
                                className="w-full rounded-lg bg-neutral-900 px-4 py-3 text-sm font-medium text-white hover:bg-neutral-800 active:translate-y-px focus:outline-none focus:ring-2 focus:ring-neutral-900"
                            >
                                Check Availability
                            </button>
                        </div>


                    </div>
                </form>
            </div>
        </section>
    );
}
