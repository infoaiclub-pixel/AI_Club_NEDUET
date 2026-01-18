import OtherActivityCard from "./miscellaneus/OtherActivityCard";

const activities = [
  {
    icon: "/images/other/exhibition.png",
    title: "Project Exhibition",
    description:
      "Built something cool? Show it off. Exhibit your projects, get feedback, and let people see what you’ve been working on. Participation is completely free.",
  },
  {
    icon: "/images/other/jobfair.png",
    title: "Job Fair",
    description:
      "Meet companies, explore internships, and talk directly with people from the industry. Bring your curiosity, and maybe your resume too.",
  },
  {
    icon: "/images/other/session.png",
    title: "Guest Sessions",
    description:
      "Hear real stories from people working in tech and industry. No heavy lectures, just insights, experiences, and honest advice.",
  },
  {
    icon: "/images/other/theater.png",
    title: "Theater",
    description:
      "Take a break from screens and code. Enjoy live performances that add creativity, energy, and fun to the fest.",
  },
];



export default function OtherActivitiesSection() {
  return (
    <section className="relative w-full bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        {/* Tag */}
        <span className="inline-flex rounded-md border border-lg px-4 py-1 text-sm font-semibold text-primary1">
          OTHER ACTIVITIES
        </span>

        {/* 2x3 GRID */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3 lg:grid-rows-2">
          {/* EMPTY CELL 1 */}
          <div className="invisible h-16 lg:visible lg:h-auto" />

          {/* EMPTY CELL 2 */}
          <div className="invisible h-16 lg:visible lg:h-auto" />

          {/* TOP RIGHT CARD */}
          <div>
            <OtherActivityCard
              icon="/images/other/exhibition.png"
              title="Project Exhibition"
              description="Built something cool? Show it off. Exhibit your projects, get feedback, and let people see what you’ve been working on. Participation is completely free."
            />
          </div>

          {/* BOTTOM ROW — 3 CARDS */}
          <OtherActivityCard
            icon="/images/other/jobfair.png"
            title="Job Fair"
            description="Meet companies, explore internships, and talk directly with people from the industry. Bring your curiosity, and maybe your resume too."
          />

          <OtherActivityCard
            icon="/images/other/session.png"
            title="Guest Sessions"
            description="Hear real stories from people working in tech and industry. No heavy lectures, just insights, experiences, and honest advice."
          />

          <OtherActivityCard
            icon="/images/other/theater.png"
            title="Theater"
            description="Take a break from screens and code. Enjoy live performances that add creativity, energy, and fun to the fest."
          />
        </div>

        {/* LEFT TEXT — ABSOLUTELY POSITIONED IN EMPTY AREA */}
        <div className="pointer-events-none absolute left-6 top-[5rem] max-w-lg font-heading lg:left-[calc((20%)/2)]">
          <h2 className="lg:text-6xl text-4xl font-extrabold leading-tight text-primary2">
            NOT JUST
            <br />
            COMPETITIONS<span className="text-primary1">.</span>
            <br />
            SOMETHING FOR
            <br />
            EVERYONE<span className="text-primary1">.</span>
          </h2>
        </div>
      </div>
    </section>
  );
}
