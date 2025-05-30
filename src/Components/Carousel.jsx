import * as React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MovieCarouselItem } from "./MovieCarouselItem";
import Swiper from "swiper";

export const MovieCarousel = ({ nowPlayingMovie }) => {
  return (
    <div>
      <Carousel className="w-screen ">
        <CarouselContent>
          {nowPlayingMovie.map((movie, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <MovieCarouselItem movie={movie} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-5 top-50%" />
        <CarouselNext className="right-5 top-50%" />
      </Carousel>
    </div>
  );
};
