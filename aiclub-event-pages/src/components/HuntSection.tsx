import Image from "next/image";
import CompetitionCard from "./miscellaneus/competition-card";

export default function HuntSection() {
  return (
    <section className="relative w-full min-h-screen py-10 bg-primary2">
      {/* Background texture / map mask */}
      <div className="absolute inset-0">
        <Image
          src="/images/hunt/treasuremap.png"
          alt=""
          fill
          className="object-cover opacity-55 mix-blend-multiply"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative mx-auto grid min-h-screen max-w-7xl grid-cols-1 place-items-center gap-10 px-6 md:grid-cols-2 md:gap-16">

        {/* Left copy */}
        <div className="space-y-10 font-heading">
          <span className="inline-flex rounded-sm border  px-4 py-1 text-md font-semibold tracking-wide text-white">
            GAMES
          </span>

          <h2 className="text-5xl font-extrabold leading-tight text-white text-shadow-[0_4px_12px_rgba(0,0,0,0.4)] sm:text-6xl">
            THINK YOU’RE
            <br />
            GOOD AT
            <br />
            PUZZLES?
          </h2>

          <h2 className="text-5xl font-extrabold text-primary1">
            PROVE IT<span className="text-white">.</span></h2>
          
        </div>

        <div  className="my-auto">
            <CompetitionCard image= "/images/hunt/treasurehunt.png"
            title= "Treasure Hunt"
            description=
            "Follow clues, solve riddles, and explore different spaces to reach the final prize."
            teamSize= "1-3 persons"
            price= "Rs. 1500"  />
        </div>
   
      </div>
    </section>
  );
}
