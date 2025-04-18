"use client";

import { useEffect, useRef, useState } from "react";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Heart } from "lucide-react";
import { images } from "../assets/images";
import { cn } from "../lib/utils";
import { Button } from "./ui/button";
import { AnimatedButton } from "./ui/ui";

const PropertySlide = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  const [likedProperties, setLikedProperties] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const toggleLike = (index: number) => {
    setLikedProperties((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="w-full flex flex-col items-center text-white relative">
      <div className="md:w-full font-[family-name:var(--font-geist-sans)]">
        <Carousel
          opts={{ align: "start", loop: true }}
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          className="w-full"
        >
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem
                key={index}
                style={{ position: "relative" }}
                className="pl-1 md:basis-1/2 lg:basis-1/3"
              >
                <div className="p-1">
                  <div className="relative col-span-1 w-full h-[100%] rounded-3xl overflow-hidden">
                    <img
                      src={images.house3}
                      alt="Modern House"
                      className="w-full h-full object-cover"
                    />
                    <Button
                      className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md"
                      onClick={() => toggleLike(index)}
                    >
                      <Heart
                        className={cn(
                          "h-6 w-6 transition-all",
                          likedProperties[index] ? "text-red-500 fill-red-500" : "text-gray-500"
                        )}
                      />
                    </Button>

                  <div className="absolute bottom-4 left-4 bg-white p-4 rounded-2xl shadow-md w-[90%] flex flex-col">
                             <div className="flex justify-between items-center">
                               <p className="text-md md:text-2xl lg:text-3xl text-primary font-semibold">$930,000</p>
                               <AnimatedButton />
                             </div>
                             <div className="flex justify-between text-gray-500 text-xs md:text-md mt-2">
                               <p>289 Lombard Street, <br /> San Francisco, CA 94133</p>
                               <div className="flex space-x-3 text-center">
                                 <p>2,218 <br/> Sq.Ft</p>
                                 <hr className="border border-foreground h-10" />
                                 <p>3 <br /> Beds</p>
                                 <hr className="border border-foreground h-10" />
                                 <p>2 <br/> Baths</p>
                               </div>
                             </div>
                           </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block text-primary pl-1.5 cursor-pointer" />
          <CarouselNext className="hidden md:block text-primary pl-1.5 cursor-pointer" />
        </Carousel>

        <div className="flex justify-center items-center gap-2">
          {api?.scrollSnapList().map((_, i: number) => (
            <span
              key={i}
              className={
                current === i + 1 ? "text-primary text-4xl" : "text-primary opacity-40 text-4xl"
              }
            >
              •
            </span>
          ))}
        </div>
        <div className="text-center mt-4">
  <p className="text-sm text-gray-500 hidden">Slide {current} of {count}</p>
</div>

      </div>
    </div>
  );
};

export default PropertySlide;
