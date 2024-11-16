import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Developer",
  "Data Scientist",
  "Software Developer",
  "Full Stack Developer",
  "Machine Learning Engineer",
  "Cloud Engineer",
  "Network Engineer",
  "Database Administrator",
];

const CategoryCarousel = () => {
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg-basis-1/3">
              <Button variant="outline" className="rounded-full">
                {cat}
              </Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-200 p-2 rounded-full shadow-md cursor-pointer transition-transform duration-200 hover:bg-gray-300 hover:scale-105">
          <span>&larr;</span>
        </CarouselPrevious>

        <CarouselNext className="bg-gray-200 p-2 rounded-full shadow-md cursor-pointer transition-transform duration-200 hover:bg-gray-300 hover:scale-105">
          <span>&rarr;</span>
        </CarouselNext>
      </Carousel>
    </div>
  );
};

export default CategoryCarousel;