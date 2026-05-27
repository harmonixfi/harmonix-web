"use client";

import { Typography } from "@/components/ui/typography";
import { Button } from "../ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import { Mail } from "lucide-react";
import { ScrollReveal } from "../common/ScrollReveal";
import { HARMONIX_CONFIG_LINK } from "@/constants/common";

const topicOptions = [
  { value: "general", label: "General" },
  { value: "partnership", label: "Partnership" },
  { value: "press", label: "Press" },
  { value: "support", label: "Support" },
] as const;

export default function ContactUsSection() {
  return (
    <section className="bg-muted overflow-x-hidden">
      <div className="grid gap-8 lg:gap-16 lg:grid-cols-2 lg:items-center">
        <ScrollReveal
          direction="right"
          duration={700}
          delay={100}
          distance={100}
          threshold={0.3}
          className="py-10 lg:py-36 mx-auto max-w-md px-4"
        >
          <Typography
            variant="small"
            className="text-muted-foreground font-medium"
          >
            Contact us
          </Typography>
          <Typography
            variant="h1"
            className="mt-3 border-none pb-0 text-primary lg:text-5xl"
          >
            Get in touch
          </Typography>
          <Typography variant="body" className="mt-4 text-muted-foreground">
            Have questions about our vaults, strategies, or partnerships? Reach
            out to us, and our team will get back to you shortly.
          </Typography>

          <div className="mt-8 flex items-center gap-3 text-sm text-foreground">
            <Mail className="size-5 text-muted-foreground" />
            <Link
              href="#"
              className="underline text-base underline-offset-4 transition-colors hover:text-primary"
            >
              hello@harmonix.fi
            </Link>
          </div>
        </ScrollReveal>

        <div className="bg-neutral-200">
          <ScrollReveal
            direction="left"
            duration={700}
            delay={100}
            distance={100}
            threshold={0.3}
            className="py-10 lg:py-36 px-4"
          >
            <form className="mx-auto max-w-md space-y-5">
              <div className="space-y-2">
                <Label className="text-sm text-foreground">Name</Label>
                <Input
                  placeholder="Name"
                  className="h-9 bg-white"
                  autoComplete="name"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-foreground">Email</Label>
                <Input
                  type="email"
                  placeholder="Email"
                  className="h-9 bg-white"
                  autoComplete="email"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-foreground">Topic</Label>
                <Select>
                  <SelectTrigger className="w-full bg-white !h-9">
                    <SelectValue placeholder="Placeholder" />
                  </SelectTrigger>
                  <SelectContent>
                    {topicOptions.map((t) => (
                      <SelectItem key={t.value} value={t.value}>
                        {t.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label className="text-sm text-foreground">Message</Label>
                <textarea
                  placeholder="Type your message"
                  className="min-h-28 w-full resize-none rounded-lg border border-input bg-white px-2.5 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                />
              </div>

              <div className="flex items-start gap-3 pt-1">
                <Checkbox defaultChecked />
                <Typography
                  variant="bodySmall"
                  className="text-muted-foreground leading-5"
                >
                  By selecting this you agree to our{" "}
                  <Link
                    href={HARMONIX_CONFIG_LINK.docs}
                    className="underline underline-offset-4 transition-colors text-foreground"
                  >
                    Privacy Policy
                  </Link>
                  .
                </Typography>
              </div>

              <Button className="h-10 w-full rounded-full">Send message</Button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
