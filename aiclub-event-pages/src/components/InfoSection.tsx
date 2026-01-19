// infoSection.tsx
import Image from "next/image";

const cards = [
  { title: "Event Dates", value: "January 27, 28, and 29, 2026", icon: "/images/info-section/calender-logo.svg" },
  { title: "Time", value: "9:00 AM – 5:00 PM", icon: "/images/info-section/time-logo.svg" },
  { title: "Venue", value: "NEDUET Main Campus, Karachi" , icon: "/images/info-section/location-logo.svg"},
  { title: "Registration Deadline", value: "January 25, 2026" , icon: "/images/info-section/deadline-logo.png"},
];

export default function InfoSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center overflow-hidden bg-gradient-to-br from-[#3b0a57] via-[#4a0d6d] to-[#2a043d] px-6 py-12 sm:px-12">
      {/* Orange gradient blobs */}
      
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gradient-to-tr from-orange-500/40 to-orange-600/0 blur-3xl" />

      {/* Main container */}
      <div className="relative mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-24">
          {/* Left */}
          <div className="relative space-y-7 mx-auto">
            <span className="relative isolate  inline-flex w-fit rounded-sm border border-primary2 px-4 py-1 text-sm font-semibold text-orange-400">
                {/* circular glow behind */}
                <span className="pointer-events-none absolute -top-6 -left-6 -z-10 h-80 w-80 rounded-full bg-gradient-to-br from-primary2/50 to-primary2/0 blur-2xl" />
                EVENT DETAILS
                </span>

            <h2 className="text-5xl text-shadow-[0_4px_12px_rgba(0,0,0,0.4)] font-heading font-extrabold leading-[0.95] tracking-tight text-white sm:text-9xl lg:text-[72px]">
              SO, WHEN
              <br />
              AND WHERE
              <br />
              IS IT?
            </h2>

            <button className="rounded-xl bg-gradient-to-r from-orange-500 to-primary2 px-7 py-3.5 font-semibold text-white shadow-lg transition hover:scale-[1.03]">
              Register Now
            </button>

            {/* Mascot (overlaps between columns on lg+) */}
            <div
            className="
                pointer-events-none
                relative mx-auto mt-10 flex justify-center
                lg:absolute lg:mt-0 lg:-bottom-60 lg:left-[60%] lg:z-20 lg:-translate-x-1/2
            "
            >
            <Image
                src="/images/info-section/mascot.svg"
                alt="Mascot"
                width={320}
                height={320}
                priority
                className="h-[220px] w-[220px] sm:h-[260px] sm:w-[260px] lg:h-[320px] lg:w-[320px]"
            />
            </div>
          </div>

          {/* Right cards */}
          <div className="mx-auto w-full max-w-[520px] space-y-6">
            {cards.map((item, i) => (
              <div
                key={i}
                className="flex w-full items-center gap-6 rounded-2xl bg-background px-8 py-6 shadow-lg"
              >
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full ">
                    <Image
                    src={item.icon}
                    alt=""
                    width={30}
                    height={30}
                    className="h-10 w-10"
                    />
                </div>
                <div>
                  <p className="text-lg font-semibold text-primary1">
                    {item.title}
                  </p>
                  <p className="text-base font-medium text-primary2">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
