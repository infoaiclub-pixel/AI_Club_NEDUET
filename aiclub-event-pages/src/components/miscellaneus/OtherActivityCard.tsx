import Image from "next/image";

type Props = {
  icon: string;
  title: string;
  description: string;
};

export default function OtherActivityCard({
  icon,
  title,
  description,
}: Props) {
  return (
    <div className="rounded-2xl bg-background p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4">
        <Image
          src={icon}
          alt={title}
          width={40}
          height={40}
        />
      </div>

      <h3 className="mb-2 font-heading text-lg font-bold text-primary1">
        {title}
      </h3>

      <p className="text-sm leading-relaxed text-secondary1">
        {description}
      </p>
    </div>
  );
}
