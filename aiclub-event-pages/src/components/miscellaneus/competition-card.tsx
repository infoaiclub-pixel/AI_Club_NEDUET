"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Props = {
  image: string;
  title: string;
  description: string;
  teamSize: string;
  price: string;
};

export default function CompetitionCard({
  image,
  title,
  description,
  teamSize,
  price,
}: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const canHover = window.matchMedia("(hover: hover)").matches;
    if (canHover) return; // desktop → CSS hover only

    const observer = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      {
        root: null,
        rootMargin: "-40% 0px -40% 0px",
        threshold: 0.01,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`relative group self-start ${active ? "is-active" : ""}`}
    >
      {/* Card shell */}
      <div
        className="
          rounded-3xl bg-[#FBF6EF]
          shadow-md
          transition-all duration-300
          group-hover:bg-background
          group-hover:shadow-xl
          group-[.is-active]:bg-background
          group-[.is-active]:shadow-xl
        "
      >
        {/* Image */}
        <div className="relative h-[300px] w-full rounded-2xl p-4">
            <div className="relative h-full w-full  rounded-xl">
                <Image
                src={image}
                alt={title}
                fill
                className="
                    object-cover transition-transform duration-500
                    group-hover:scale-105
                    group-[.is-active]:scale-105
                    rounded-xl
                "
                />
            </div>
            </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h3 className="text-xl font-heading font-bold text-primary2">
            {title}
          </h3>

          <p className="text-sm text-gray-600 leading-snug">
            {description}
          </p>

          <div className="flex items-center justify-between pt-3 text-sm font-semibold text-primary1">
            <div className="flex items-center gap-2">
              <Image
                src="/images/competitions/persons.svg"
                alt="Team size"
                width={18}
                height={18}
              />
              <span>{teamSize}</span>
            </div>

            <div className="flex items-center gap-2">
              <Image
                src="/images/competitions/price.svg"
                alt="Price"
                width={18}
                height={18}
              />
              <span>{price}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Seamless expanding bottom */}
      <div
        className="
          pointer-events-none
          absolute left-0 right-0 top-full z-20
          -mt-6
          opacity-0 translate-y-2
          transition-all duration-300
          group-hover:opacity-100
          group-hover:translate-y-0
          group-hover:pointer-events-auto
          group-[.is-active]:opacity-100
          group-[.is-active]:translate-y-0
          group-[.is-active]:pointer-events-auto
        "
      >
        <div className="rounded-b-3xl bg-[#F6EFE6] px-5 py-5 shadow-xl space-y-3">
          <button className="w-full rounded-xl border border-primary2 py-3 font-semibold text-primary2 hover:bg-primary2 hover:text-white">
            Register For This
          </button>

          <button className="w-full rounded-xl border border-primary2 py-3 font-semibold text-primary2 hover:bg-primary2 hover:text-white">
            View Competition Guide
          </button>
        </div>
      </div>
    </div>
  );
}
