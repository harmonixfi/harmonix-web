"use client";

import * as React from "react";
import {
  type CarouselApi,
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Typography } from "@/components/ui/typography";
import Image from "next/image";
import { Button } from "../ui/button";
import useSWR from "swr";
import { getBlogsFromParagraph } from "@/api/blogs";
import Link from "next/link";
import dayjs from "dayjs";

import { toUtcDate } from "@/lib/date";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import BlogsSectionSkeleton from "./BlogsSectionSkeleton";
import { ScrollReveal } from "../common/ScrollReveal";

const URL_PARAGRAPH = process.env.NEXT_PUBLIC_PARAGRAPH_URL_PAGE ?? "";
const PARAGRAPH_HARMONIX_ID =
  process.env.NEXT_PUBLIC_PARAGRAPH_HARMONIX_ID ?? "";

const CardBlog = ({
  title,
  date,
  image,
  subTitle,
  slug,
}: {
  title: string;
  subTitle: string;
  date: string;
  image: string;
  slug: string;
}) => {
  return (
    <div className="">
      <Image
        width={764}
        height={474}
        loading="eager"
        src={image}
        alt={title}
        className="w-full lg:w-186 h-auto object-cover rounded-3xl mb-6"
      />
      <Typography
        align={"left"}
        variant={"small"}
        className="text-white bg-primary-100 px-3.5 py-1 rounded-md"
      >
        {dayjs(toUtcDate(Number(date))).format("MMM DD, YYYY")}
      </Typography>
      <Link
        href={`${URL_PARAGRAPH}/${slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Typography
          align={"left"}
          variant={"bodyLarge"}
          className="text-white text-3xl mt-4 font-bold cursor-pointer hover:underline"
        >
          {title}
        </Typography>
      </Link>
      <Typography
        align={"left"}
        variant={"body"}
        className="text-muted-foreground leading-6 mt-2 line-clamp-3"
      >
        {subTitle}
      </Typography>
    </div>
  );
};

export default function BlogsSection() {
  const { isLoading: isLoadingGetBlogPosts, data: blogPosts } = useSWR(
    PARAGRAPH_HARMONIX_ID
      ? ["get-blog-posts-from-paragraph", PARAGRAPH_HARMONIX_ID]
      : null,
    () => getBlogsFromParagraph(PARAGRAPH_HARMONIX_ID, 5),
  );

  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null,
  );
  const [snapCount, setSnapCount] = React.useState(0);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);

  React.useEffect(() => {
    if (!carouselApi) return;

    const sync = () => {
      setSnapCount(carouselApi.scrollSnapList().length);
      setCanScrollPrev(carouselApi.canScrollPrev());
      setCanScrollNext(carouselApi.canScrollNext());
    };

    sync();
    carouselApi.on("reInit", sync);
    carouselApi.on("select", sync);

    return () => {
      carouselApi.off("reInit", sync);
      carouselApi.off("select", sync);
    };
  }, [carouselApi]);

  const totalSlides = snapCount || blogPosts?.items?.length || 0;

  return (
    <section className="bg-[#122823]">
      <div className="space-y-8 lg:space-y-12 mx-auto py-10 lg:py-36 px-4 max-w-7xl">
        <ScrollReveal direction="up" duration={800} delay={200}>
          <Typography align={"center"} variant={"h1"} className="text-white">
            Latest from{" "}
            <span className="bg-title-gradient bg-clip-text text-transparent">
              Harmonix
            </span>
          </Typography>
        </ScrollReveal>

        <ScrollReveal
          direction="left"
          duration={800}
          delay={300}
          distance={70}
          threshold={0.3}
        >
          <Carousel
            setApi={setCarouselApi}
            opts={{
              align: "start",
              containScroll: "trimSnaps",
              dragFree: true,
            }}
          >
            <CarouselContent className="p-1 ml-0">
              {isLoadingGetBlogPosts ? (
                <BlogsSectionSkeleton />
              ) : (
                blogPosts?.items?.map?.((post, index) => (
                  <CarouselItem
                    key={`index-${index}-${post.id}`}
                    className="pl-4 pr-1 lg:px-4 lg:basis-3xl"
                  >
                    <CardBlog
                      key={index}
                      title={post.title}
                      subTitle={post.subtitle}
                      date={post.publishedAt}
                      image={post.imageUrl}
                      slug={post.slug}
                    />
                  </CarouselItem>
                ))
              )}
            </CarouselContent>
          </Carousel>
        </ScrollReveal>

        {totalSlides > 1 ? (
          <div className="-mt-5 flex items-center justify-between">
            <Link
              href={URL_PARAGRAPH}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className={
                  "rounded-full text-base p-6 cursor-pointer bg-accent text-accent-foreground"
                }
              >
                View all
              </Button>
            </Link>

            <div className="flex items-center gap-2">
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="rounded-full bg-white size-8"
                disabled={!canScrollPrev}
                onClick={() => carouselApi?.scrollPrev()}
                aria-label="Previous slide"
              >
                <ArrowLeftIcon className="size-4" />
              </Button>
              <Button
                type="button"
                variant="outline"
                size="icon-sm"
                className="rounded-full bg-white size-8"
                disabled={!canScrollNext}
                onClick={() => carouselApi?.scrollNext()}
                aria-label="Next slide"
              >
                <ArrowRightIcon className="size-4" />
              </Button>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
