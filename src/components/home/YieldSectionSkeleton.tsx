"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CarouselItem } from "@/components/ui/carousel";

const items = Array.from({ length: 3 });

export default function YieldSectionSkeleton() {
  return (
    <>
      {items.map((_, index) => (
        <CarouselItem
          key={`yield-skeleton-${index}`}
          className="lg:px-4 lg:basis-lg"
        >
          <Card className="p-8 shadow-md rounded-3xl">
            <CardHeader className="p-0">
              <CardTitle className="space-y-4">
                <div className="h-3 w-28 rounded bg-muted animate-pulse" />
                <div className="h-9 w-24 rounded bg-muted animate-pulse" />
                <div className="space-y-2">
                  <div className="h-3 w-full rounded bg-muted animate-pulse" />
                  <div className="h-3 w-11/12 rounded bg-muted animate-pulse" />
                  <div className="h-3 w-9/12 rounded bg-muted animate-pulse" />
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="py-8 px-6 rounded-3xl bg-linear-to-t from-[#F4FAF1] via-[#C8EBD3] to-[#F4FAF1] space-y-6">
              <div className="flex justify-center items-center">
                <div className="size-16 rounded-full bg-white/60 ring-1 ring-white/70 animate-pulse" />
              </div>

              <div className="mx-auto h-4 w-44 rounded bg-white/55 animate-pulse" />

              <div className="bg-green-50 p-6 flex justify-between rounded-3xl">
                <div className="space-y-2">
                  <div className="h-3 w-10 rounded bg-white/70 animate-pulse" />
                  <div className="h-4 w-28 rounded bg-white/70 animate-pulse" />
                </div>
                <div className="space-y-2 text-right">
                  <div className="ml-auto h-3 w-10 rounded bg-white/70 animate-pulse" />
                  <div className="ml-auto h-4 w-14 rounded bg-white/70 animate-pulse" />
                </div>
              </div>

              <div className="space-y-2">
                <div className="mx-auto h-3 w-16 rounded bg-white/55 animate-pulse" />
                <div className="flex justify-center gap-2">
                  {Array.from({ length: 3 }).map((__, rewardIndex) => (
                    <div
                      key={`yield-skeleton-reward-${index}-${rewardIndex}`}
                      className="size-8 rounded-full bg-white/60 ring-1 ring-white/70 animate-pulse"
                    />
                  ))}
                </div>
              </div>

              <div className="h-12 w-full rounded-full bg-primary/15 animate-pulse" />
            </CardContent>
          </Card>
        </CarouselItem>
      ))}
    </>
  );
}
