'use client';

import Image from "next/image";
import { useRef, useState } from "react";

export default function BookingHero() {
    const [checkIn, setCheckIn] = useState("");
    const [checkOut, setCheckOut] = useState("");
    const [roomsFor, setRoomsFor] = useState("1 room, 2 guests");

    const checkInRef = useRef<HTMLInputElement>(null);
    const checkOutRef = useRef<HTMLInputElement>(null);

    const openPicker = (el: HTMLInputElement | null) => {
        if (!el) return;

        if (typeof el.showPicker === "function") el.showPicker();
        else el.focus(); // fallback (desktop)
    };

    return (
        <section className="px-4 py-8">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl">
                {/* Hero image */}
                <div className="relative h-[46vh] min-h-[360px]">
                    <Image
                        src="/viewpicture1.jpg"
                        alt="Pyramid Resort"
                        fill
                        priority
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
                        <h1 className="text-white text-3xl md:text-4xl font-semibold tracking-tight">
                            Enjoy a Luxurious Stay at Pyramid
                        </h1>
                        <p className="mt-2 text-white/85 text-sm md:text-base max-w-xl">
                            Lakeside comfort, modern rooms, and calm mornings in Bishoftu.
                        </p>
                    </div>
                </div>

                {/* Booking bar — centered smoky glass */}
                <form
                    onSubmit={(e) => e.preventDefault()}
                    aria-label="Booking search"
                    className="
            absolute left-1/2 bottom-4 -translate-x-1/2
            w-[94%] sm:w-[90%] md:w-[86%] lg:w-[80%]
            rounded-2xl md:rounded-full
            bg-white/10 backdrop-blur-xl
            border border-white/15 shadow-[0_10px_30px_rgba(0,0,0,0.25)]
            px-4 sm:px-5 md:px-6 py-3
          "
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_1fr_1fr_auto] gap-3 md:gap-0 md:items-center">
                        {/* Check In (whole row interactive) */}
                        <div
                            className="group flex items-center gap-3 px-2 md:px-3 cursor-pointer select-none"
                            tabIndex={0}
                            role="button"
                            aria-label="Open check-in calendar"
                            onClick={() => openPicker(checkInRef.current)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openPicker(checkInRef.current);
                                }
                            }}
                        >
                            {/* calendar icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-5 w-5 text-white/80 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M8 2v3M16 2v3M3 9h18M5 22h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
                            </svg>

                            <label className="sr-only" htmlFor="checkInInput">Check In</label>
                            <div className="flex-1">
                                <div className="text-[11px] uppercase tracking-wide text-white/70">Check In</div>
                                <input
                                    ref={checkInRef}
                                    id="checkInInput"
                                    type="date"
                                    value={checkIn}
                                    onChange={(e) => setCheckIn(e.target.value)}
                                    className="
      mt-1 w-full bg-transparent
      text-sm text-white placeholder-white/60
      outline-none
      rounded-lg md:rounded-none
      transition-all duration-200

      focus:ring-2 focus:ring-[#EDB41A] focus:border-[#EDB41A]
      hover:ring-1 hover:ring-white/30

      [&::-webkit-calendar-picker-indicator]:invert
  "
                                />

                            </div>
                        </div>

                        {/* Divider (desktop) */}
                        <span className="hidden md:block h-8 w-px bg-white/15 mx-1" aria-hidden="true" />

                        {/* Check Out (whole row interactive) */}
                        <div
                            className="group flex items-center gap-3 px-2 md:px-3 cursor-pointer select-none"
                            tabIndex={0}
                            role="button"
                            aria-label="Open check-out calendar"
                            onClick={() => openPicker(checkOutRef.current)}
                            onKeyDown={(e) => {
                                if (e.key === "Enter" || e.key === " ") {
                                    e.preventDefault();
                                    openPicker(checkOutRef.current);
                                }
                            }}
                        >
                            {/* calendar icon */}
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                className="h-5 w-5 text-white/80 shrink-0"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.5"
                            >
                                <path d="M8 2v3M16 2v3M3 9h18M5 22h14a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/>
                            </svg>

                            <label className="sr-only" htmlFor="checkOutInput">Check Out</label>
                            <div className="flex-1">
                                <div className="text-[11px] uppercase tracking-wide text-white/70">Check Out</div>
                                <input
                                    ref={checkOutRef}
                                    id="checkOutInput"
                                    type="date"
                                    value={checkOut}
                                    onChange={(e) => setCheckOut(e.target.value)}
                                    className="
      mt-1 w-full bg-transparent
      text-sm text-white placeholder-white/60
      outline-none
      rounded-lg md:rounded-none
      transition-all duration-200

      focus:ring-2 focus:ring-[#EDB41A] focus:border-[#EDB41A]
      hover:ring-1 hover:ring-white/30

      [&::-webkit-calendar-picker-indicator]:invert
  "
                                />

                            </div>
                        </div>

                        {/* Divider (desktop) */}
                        <span className="hidden md:block h-8 w-px bg-white/15 mx-1" aria-hidden="true" />

                        {/* Rooms for */}
                        <div className="flex items-center gap-3 px-2 md:px-3">
                            <div className="flex-1">
                                <label className="block text-[11px] uppercase tracking-wide text-white/70">
                                    Rooms for
                                </label>
                                <input
                                    type="text"
                                    value={roomsFor}
                                    onChange={(e) => setRoomsFor(e.target.value)}
                                    placeholder="1 room, 2 guests"
                                    className="mt-1 w-full bg-transparent text-sm text-white placeholder-white/60 outline-none focus:ring-1 focus:ring-white/40 rounded-lg md:rounded-none"
                                />
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="md:pl-3 mt-1 md:mt-0">
                            <button
                                type="submit"
                                className="w-full md:w-auto rounded-xl md:rounded-full bg-[#EDB41A] text-neutral-900 px-5 md:px-6 py-3 text-sm font-semibold hover:brightness-110 active:translate-y-px focus:outline-none focus:ring-2 focus:ring-white/40"
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
