import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "../ui/button";

const CardBlog = ({
  title,
  date,
  image,
}: {
  title: string;
  date: string;
  image: string;
}) => {
  return (
    <div className="space-y-6">
      <Image
        width={764}
        height={474}
        loading="eager"
        src={image}
        alt={title}
        className="w-186 h-auto object-cover"
      />
      <Typography
        align={"left"}
        variant={"small"}
        className="text-white bg-primary-100 px-3.5 py-1 rounded-md"
      >
        Tagline
      </Typography>
      <Typography
        align={"left"}
        variant={"bodyLarge"}
        className="text-white text-3xl mt-6 font-bold"
      >
        Harmonix Treasury buyback overview
      </Typography>
      <Typography
        align={"left"}
        variant={"body"}
        className="text-muted-foreground leading-6"
      >
        Harmonix uses protocol revenue and treasury reserves to continuously
        accumulate $HAR and $HYPE. Here is where we stand this quarter.
      </Typography>
    </div>
  );
};

export default function BlogsSection() {
  return (
    <section className="bg-[#122823]">
      <div className="space-y-12 mx-auto py-36 px-4 max-w-7xl">
        <Typography align={"center"} variant={"h1"} className="text-white">
          Latest from{" "}
          <span className="bg-title-gradient bg-clip-text text-transparent">
            Harmonix
          </span>
        </Typography>
        <div className="grid grid-cols-2 gap-6">
          {Array.from({ length: 2 }).map((_, index) => (
            <CardBlog
              key={index}
              title="Harmonix Blog"
              date="2023-08-01"
              image="/images/blog-1.png"
            />
          ))}
        </div>
        <Button
          className={
            "rounded-full text-base p-6 cursor-pointer bg-accent text-accent-foreground"
          }
        >
          View all
        </Button>
      </div>
    </section>
  );
}
