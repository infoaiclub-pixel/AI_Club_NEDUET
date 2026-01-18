import Image from "next/image";

export default function CTASection() {
  return (
    <section className="w-full bg-[#FBF6EF] px-6 py-24">
      <div className="mx-auto flex max-w-7xl flex-col justify-center items-center gap-16 lg:flex-row lg:items-center">
        {/* LEFT – Mascot */}
        <div className="flex-shrink-0">
          <Image
            src="/images/mascot2.png"
            alt="AI Fest Mascot"
            width={260}
            height={260}
            priority
          />
        </div>

        {/* RIGHT – Content */}
        <div className="max-w-2xl font-heading">
          {/* Tag */}
          <span className="inline-flex rounded-sm border border-primary2 px-4 py-1 text-sm font-semibold text-primary2">
            REGISTRATIONS OPEN
          </span>

          {/* Heading */}
          <h2 className="mt-6 text-5xl font-heading font-extrabold leading-tight text-primary1 sm:text-6xl">
            READY TO COMPETE
            <br />
            AT AI FEST 5.0?
          </h2>

          {/* Description */}
          <p className="mt-6 text-base leading-relaxed text-secondary1">
            Join students from across the city for three days of challenges,
            learning, and hands-on experiences. Test your skills, learn
            something new, and compete for exciting prizes. Whether you’re here
            to compete or just explore, there’s something waiting for you.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap gap-4">
            {/* Primary (hover-filled) */}
            <button className="rounded-xl border border-primary2 bg-white px-8 py-3 font-semibold text-primary2 transition hover:bg-primary2 hover:scale-[1.03] hover:shadow-lg hover:text-white" >
              Register Now
            </button>

            {/* Secondary (idle outline → hover fill) */}
            <button className="rounded-xl border border-primary2 bg-white px-8 py-3 font-semibold text-primary2 transition hover:bg-primary2 hover:scale-[1.03] hover:shadow-lg hover:text-white">
              Explore Events
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
