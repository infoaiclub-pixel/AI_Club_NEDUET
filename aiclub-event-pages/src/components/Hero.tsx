"use client";

import HeroBG from "./miscellaneus/hero-bg";
import Image from "next/image";

export default function Hero() {


  return (
     <section className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND — out of flow */}
      <div className="absolute inset-0 z-0">
        <HeroBG />
      </div>

      {/* CONTENT — above background */}
      <div className="relative z-10 flex min-h-screen w-full flex-col items-center justify-center px-4 text-center">
        {/* Logo */}
      <div className="mb-6 flex items-center gap-2">
        <Image
          src="/images/navbar-logo.svg"
          alt="AI Club"
          width={55}
          height={55}
        />
        <span className="text-3xl font-semibold text-primary1">
          AI Club
        </span>
      </div>

      {/* Intro */}
      <span className="mb-2 sm:text-2xl font-medium text-primary2">
        Introducing
      </span>

      {/* Title */}
      <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-primary1 sm:text-6xl">
        AI Fest 5.0
      </h1>

      {/* Description */}
      <p className="mb-8 max-w-4xl sm:text-2xl leading-7 text-gray-600 ">
        A 3-day technology fest with competitions, projects, gaming, jobs, and
        innovation. AI Fest 2026 brings students, creators, and tech enthusiasts
        together for three packed days of learning, competition, and fun.
      </p>

      {/* CTAs */}
      <div className="mb-14 flex flex-col gap-4 sm:flex-row">
        <button className="rounded-full  border border-primary2 px-8 py-3 text-sm font-semibold text-primary2 shadow-md  transition hover:scale-105 hover:bg-primary2 hover:text-white">
          Register Now
        </button>
        <button className="rounded-full border border-primary2 px-8 py-3 text-sm font-semibold text-primary2 transition hover:bg-primary2 hover:text-white hover:scale-105">
          Explore Events
        </button>
      </div>

      {/* Stats Bar */}
      <div className="grid w-full max-w-5xl grid-cols-2 gap-6 rounded-2xl bg-background px-6 py-6 shadow-lg backdrop-blur-sm
                sm:flex sm:items-center sm:justify-between">
        <Stat value="10+" label="Competitions"  />
        <Divider />
        <Stat value="1000+" label="Participants" />
        <Divider />
        <Stat value="15+" label="Universities" />
        <Divider />
        <Stat value="Rs.350,000" label="Prize Pool" />
      </div>
      </div>
    </section>
  );
}









function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center px-10 gap-1">
      <span className="text-lg font-bold text-primary1">
        {value}
      </span>
      <span className="text-sm text-primary2">
        {label}
      </span>
    </div>
  );
}

function Divider() {
  return (
    <div className="hidden h-10 w-1 bg-primary2 sm:block rounded" />
  );
}
