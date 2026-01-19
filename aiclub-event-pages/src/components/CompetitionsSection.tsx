import CompetitionCard from "./miscellaneus/competition-card";


const competitions = [
  {
    image: "/images/competitions/webdev.png",
    title: "Website Development",
    description:
      "Upgrade a pre-designed website with advanced features.",
    teamSize: "1–3 persons",
    price: "Rs. 1500",
  },
  {
    image: "/images/competitions/ui-ux.png",
    title: "UI/UX Design",
    description:
      "Design clean and user-friendly interfaces within a given theme.",
    teamSize: "1–3 persons",
    price: "Rs. 1500",
  },
  {
    image: "/images/competitions/datascience.png",
    title: "Data Science & ML",
    description:
      "Solve real-world data problems using your analysis and ML skills.",
    teamSize: "1–2 persons",
    price: "Rs. 1500",
  },
  {
    image: "/images/competitions/dataanalytics.png",
    title: "Data Analytics",
    description:
      "Analyze a provided dataset and extract meaningful insights.",
    teamSize: "1–3 persons",
    price: "Rs. 1500",
  },
  {
    image: "/images/competitions/speedprogramming.png",
    title: "Speed Programming",
    description:
      "Solve logic and algorithm problems under time pressure.",
    teamSize: "1–3 persons",
    price: "Rs. 1500",
  },
  {
    image: "/images/competitions/robowar.png",
    title: "Robo War",
    description:
      "Design robots and compete in an intense robot battle arena.",
    teamSize: "1-3 persons",
    price: "Rs. 1500",
  },
  {
    image: "/images/competitions/appdev.png",
    title: "App Development",
    description:
      "Turn an idea into a working app before the deadline.",
    teamSize: "1-3 persons",
    price: "Rs. 1500",
  },
];


export default function CompetitionSection() {
  return (
    <section className="w-full px-6 py-16 sm:px-10 lg:px-20">
      {/* Header */}
      <div className="mx-auto max-w-3xl text-center space-y-4">
        <span className="inline-flex rounded-md border border-orange-500 px-4 py-1 text-sm font-semibold text-orange-500">
          TECHNICAL COMPETITIONS
        </span>

        <h2 className="text-3xl font-extrabold text-primary1 sm:text-4xl lg:text-5xl">
          READY TO PUT YOUR SKILLS
          <br />
          TO THE TEST?
        </h2>
      </div>

      {/* Cards grid */}
      <div
        className="
          mx-auto mt-12 max-w-6xl
          grid grid-cols-1 gap-10
          md:grid-cols-2
  
          auto-rows-min
        "
      >
        {competitions.map((item, i) => (
          <CompetitionCard key={i} {...item} />
        ))}
      </div>
    </section>
  );
}
