import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import { ScrollReveal } from "../common/ScrollReveal";

const startEarningHighlights = [
  { value: "0%", label: "Market exposure" },
  { value: "24/7", label: "Active strategies" },
  { value: "100%", label: "Automated execution" },
  { value: "Non-Custodial", label: "Full user control" },
] as const;

export default function StartEarningSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 lg:py-36">
        <div className="rounded-4xl bg-linear-to-t from-[#C8EBD3] to-[#F4FAF1] px-4 lg:px-20 py-4 lg:py-16">
          <ScrollReveal
            direction="up"
            duration={700}
            delay={200}
            className="mx-auto flex flex-col items-center text-center gap-5"
          >
            <Typography
              align={"center"}
              variant={"h1"}
              className="text-primary leading-tight"
            >
              Start earning yield today.
            </Typography>
            <Typography
              align={"center"}
              variant={"bodyLarge"}
              className="text-muted-foreground"
            >
              Earn <span className="font-semibold text-primary">7% APY</span>{" "}
              with delta neutral yield bearing stablecoins. <br />
              Secure, automated, institutional-grade.
            </Typography>
            <Button className={"rounded-full text-base px-6 py-6"}>
              Launch App
            </Button>
          </ScrollReveal>
          <div className="mx-auto mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {startEarningHighlights.map((item, i) => (
              <ScrollReveal
                direction="up"
                duration={600}
                delay={100 * (i + 1)}
                threshold={0.2}
                key={item.value}
                className="rounded-3xl border border-white bg-white/20 shadow-md p-8"
              >
                <Typography
                  variant={"h5"}
                  className="text-primary border-none pb-0 text-xl"
                >
                  {item.value}
                </Typography>
                <Typography variant={"bodySmall"} className="mt-1 text-primary">
                  {item.label}
                </Typography>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
