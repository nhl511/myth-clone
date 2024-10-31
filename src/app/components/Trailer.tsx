"use client";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import Fade from "embla-carousel-fade";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Plus } from "lucide-react";
import { convertSecToMin } from "@/lib/utils";

const Trailer = ({ trailer }: { trailer: trailerItem[] }) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState<"next" | "prev">("next");
  const [fadeOut, setFadeOut] = useState(false);
  const [currentSlide, setCurrentSlide] = useState<any>(0);

  const visibleItems = trailer.slice(currentSlide, currentSlide + 3);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      const currentIndex = api.selectedScrollSnap();
      setActiveIndex(currentIndex);
      setAnimating(false);
      setFadeOut(false);

      setTimeout(() => {
        setAnimating(true);
      }, 400);
    };

    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  const scrollPrev = useCallback(() => {
    setSlideDirection("prev");
    setFadeOut(true);

    // Trigger the fade-in immediately after fade-out completes
    setTimeout(() => {
      if (api) {
        api.scrollPrev();
        setAnimating(true); // Trigger fade-in for the new item
      }
    }, 400); // Duration of fadeOutLeft animation
  }, [api]);

  const scrollNext = useCallback(() => {
    setSlideDirection("next");
    setFadeOut(true);

    // Trigger the fade-in immediately after fade-out completes
    setTimeout(() => {
      if (api) {
        api.scrollNext();
        setAnimating(true); // Trigger fade-in for the new item
      }
    }, 400); // Duration of fadeOutLeft animation
  }, [api]);

  return (
    <div className="">
      <Carousel
        className=""
        opts={{
          duration: 0,
          loop: true,
        }}
        setApi={setApi}
        plugins={[Fade()]}
      >
        <CarouselContent>
          {trailer?.map((trailerItem: trailerItem, index: number) => (
            <CarouselItem key={trailerItem.CONTENT_ID}>
              <div className="w-full text-primary-foreground relative">
                <>
                  <Image
                    src={
                      trailerItem.WEBAPP_BACKGROUND_IMAGE ||
                      "https://webappstage.mytv.vn/img/not-found.png"
                    }
                    alt={trailerItem.CONTENT_NAME}
                    layout="responsive"
                    width={100}
                    height={50}
                    quality={100}
                    priority
                  />

                  <div className="absolute top-0 w-full h-full bg-gradient-to-r from-[#121212]/100 to-transparent via-[#121212]/5">
                    <div className="absolute top-1/2 w-full flex justify-between px-5 z-50 text-foreground">
                      <ChevronLeft
                        onClick={scrollPrev}
                        style={{ width: "40px", height: "40px" }}
                        strokeWidth={3}
                        className="hover:text-primary-foreground cursor-pointer"
                      />
                      <ChevronRight
                        onClick={scrollNext}
                        style={{ width: "40px", height: "40px" }}
                        strokeWidth={3}
                        className="hover:text-primary-foreground cursor-pointer"
                      />
                    </div>
                    <div
                      className={`w-[30%] absolute top-1/3 left-20 z-40 ${
                        fadeOut && index === activeIndex
                          ? "fadeOut"
                          : animating && index === activeIndex
                          ? "fadeIn"
                          : ""
                      }`}
                    >
                      {trailerItem.CONTENT_NAME_IMAGE && (
                        <Image
                          src={trailerItem.CONTENT_NAME_IMAGE}
                          alt={trailerItem.CONTENT_NAME}
                          layout="responsive"
                          width={100}
                          height={50}
                          quality={100}
                          priority
                        />
                      )}

                      <div className="flex flex-col gap-3 mt-5">
                        <div className="flex items-center gap-2 text-sm font-bold">
                          <p>2024</p>|<p>{trailerItem.CONTENT_COUNTRY}</p>|
                          <p>
                            {convertSecToMin(
                              Number(trailerItem.CONTENT_DURATION)
                            )}
                          </p>
                        </div>
                        <div>
                          <p className="leading-[1.3] text-base line-clamp-2">
                            {trailerItem.CONTENT_DESC}
                          </p>
                        </div>
                        <div className="flex gap-4 mt-4">
                          <Button
                            className="bg-primary text-xl font-bold hover:bg-primary-hover"
                            size="lg"
                          >
                            <Play />
                            Xem ngay
                          </Button>
                          <Button
                            className="bg-white bg-opacity-15 text-xl font-bold hover:bg-opacity-20"
                            size="lg"
                          >
                            <Plus />
                            Thêm vào DS
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div
                      className={`w-[42%] absolute bottom-0 right-28 z-40 ${
                        slideDirection === "next"
                          ? fadeOut && index === activeIndex
                            ? "fadeOutLeft"
                            : animating && index === activeIndex
                            ? "fadeInRight"
                            : ""
                          : fadeOut && index === activeIndex
                          ? "fadeOutRight"
                          : animating && index === activeIndex
                          ? "fadeInLeft"
                          : ""
                      }`}
                    >
                      {trailerItem.WEBAPP_MAIN_IMAGE && (
                        <Image
                          src={trailerItem.WEBAPP_MAIN_IMAGE}
                          alt={trailerItem.CONTENT_NAME}
                          layout="responsive"
                          width={100}
                          height={50}
                          quality={100}
                          priority
                        />
                      )}
                    </div>
                  </div>
                  <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[#121212]/100 to-transparent via-[#121212]/5"></div>
                </>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default Trailer;
