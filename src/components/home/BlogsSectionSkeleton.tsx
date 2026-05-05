"use client";

import { CarouselItem } from "@/components/ui/carousel";

const items = Array.from({ length: 3 });

export default function BlogsSectionSkeleton() {
  return (
    <>
      {items.map((_, index) => (
        <CarouselItem
          key={`blogs-skeleton-${index}`}
          className="pl-4 pr-1 lg:px-4 lg:basis-3xl"
        >
          <div>
            <div className="mb-6 h-60 w-full rounded-3xl bg-white/10 animate-pulse lg:h-72" />

            <div className="h-6 w-28 rounded-md bg-white/10 animate-pulse" />

            <div className="mt-4 space-y-3">
              <div className="h-8 w-4/5 rounded bg-white/10 animate-pulse" />
              {/* <div className="h-8 w-3/5 rounded bg-white/10 animate-pulse" /> */}
            </div>

            <div className="mt-4 space-y-2">
              <div className="h-4 w-full rounded bg-white/10 animate-pulse" />
              <div className="h-4 w-11/12 rounded bg-white/10 animate-pulse" />
              <div className="h-4 w-9/12 rounded bg-white/10 animate-pulse" />
            </div>
          </div>
        </CarouselItem>
      ))}
    </>
  );
}
