"use client";

import { useEffect, useRef, useState } from "react";
// import {
//   Card,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "./ui/card";
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

const PropertySilde = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
    const [liked, setLiked] = useState(false);


  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="w-full flex flex-col items-center text-white relative">
      <div className="md:w-full   font-[family-name:var(--font-geist-sans)]">

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          setApi={setApi}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        //   className="w-full md:w-[50vw] border-2 border-accent-foreground"
        className="w-full">
          
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
                                    onClick={() => setLiked(!liked)}
                                  >
                                    <Heart
                                      className={cn("h-6 w-6 transition-all", liked ? "text-red-500 fill-red-500" : "text-gray-500")}
                                    />
                                  </Button>
                          
                                  <div className="absolute bottom-4 left-4 bg-white p-4 rounded-2xl shadow-md w-[90%] flex flex-col">
                                      <div className="flex flex-row justify-between"><p className="text-md md:text-3xl text-primary font-semibold">$930,000</p> <AnimatedButton /> </div>
                            <div className="flex flex-row justify-between">        <p className="text-sm text-gray-500">
                                      289 Lombard Street, <br /> San Francisco, <br /> CA 94133
                                    </p>
                                    <div className="flex justify-between mt-2 text-gray-700 text-sm space-x-3 text-center">
                                      <p>2,218 <br/> Sq.Ft</p>
                                      <hr className="border-1 border-foreground h-10" />
                                      <p>3 <br /> Beds</p>
                                      <hr className="border-1 border-foreground h-10" />
                                      <p>2 <br/> Baths</p>
                                    </div></div>
                                 
                                  </div>
                                </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:block text-primary pl-1.5 cursor-pointer" />
          <CarouselNext className="hidden md:block text-primary pl-1.5 cursor-pointer" />
        </Carousel>

        <div className="flex justify-center items-center gap-2 ">
          {api?.scrollSnapList().map((_, i: number) => (
            <span
              key={i}
              className={
                current === i + 1
                  ? "text-primary text-4xl"
                  : "text-primary opacity-40 text-4xl"
              }
            >
              •
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertySilde;