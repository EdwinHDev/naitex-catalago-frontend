"use client"

import * as React from "react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Item } from "@/types/items"
import ProductCard from "@/components/shared/ProducCard"

interface SectionCarouselProps extends React.HTMLAttributes<HTMLDivElement> {
  items: Item[]
}

const SectionCarousel = ({ items, ...props }: SectionCarouselProps) => {

  return (
    <Carousel
      className="w-full"
      opts={{
        align: "start",
        loop: true,
      }}
      {...props}
    >
      <CarouselContent className="-ml-1">
        {items.map((item, index) => (
          <CarouselItem
            key={index}
            className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5 2xl:basis-1/6"
          >
            <div className="p-1">
              <ProductCard item={item} />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}

export default SectionCarousel
