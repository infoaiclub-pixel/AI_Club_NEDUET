import Image from "next/image";
import CompetitionCard from "./miscellaneus/competition-card";

const esports = [
  {
    image: "/images/esports/fifa.png",
    title: "FIFA",
    description:
      "No luck involved. Compete head-to-head and prove your skills.",
    teamSize: "1–3 persons",
    price: "Rs. 3000",
  },
  {
    image: "/images/esports/tekken8.png",
    title: "Tekken",
    description:
      "Fast-paced combat with pure mechanics and reaction time.",
    teamSize: "1–3 persons",
    price: "Rs. 3000",
  },

];

export default function EsportsSection() {
  return (
    <section className="relative w-full min-h-screen  bg-primary1">
      {/* Background mask */}
      <div className="absolute inset-0">
        <Image
          src="/images/esports/backdrop.png"
          alt=""
          fill
          className="object-cover opacity-40 mix-blend-multiply"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center font-heading">
          <span className="inline-flex rounded-sm border border-primary2 px-4 py-1 text-sm font-semibold tracking-wide text-primary2">
            E-SPORTS
          </span>

          <h2 className="mt-6 text-4xl font-heading font-extrabold leading-tight text-background sm:text-5xl">
            NO LUCK INVOLVED.
            <br />
            JUST PURE GAMEPLAY.
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {esports.map((game) => (
            <CompetitionCard
              key={game.title}
              image={game.image}
              title={game.title}
              description={game.description}
              teamSize={game.teamSize}
              price={game.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
