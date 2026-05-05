import { Typography } from "@/components/ui/typography";

const stats = [
  {
    title: "AUM",
    value: "$7M",
  },
  {
    title: "Users",
    value: "13,110",
  },
  {
    title: "Token Holders",
    value: "780",
  },
  {
    title: "Integrations",
    value: "10+",
  },
];

export default function BoxStats() {
  return (
    <section className="rounded-[24px] bg-white p-4 lg:p-5 2xl:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-12 2xl:gap-24 items-center shadow-lg">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="flex flex-col items-center justify-center"
        >
          <Typography
            align={"center"}
            variant={"large"}
            className="text-2xl xl:text-3xl font-bold"
          >
            {stat.value}
          </Typography>
          <Typography align={"center"} variant={"body"} className="">
            {stat.title}
          </Typography>
        </div>
      ))}
    </section>
  );
}
