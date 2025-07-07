"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"
import {
  Carousel as CarouselComponent,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { cn } from "@/lib/utils"
import { carousel } from "@/config/home"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

interface CarouselProps extends React.HTMLAttributes<HTMLDivElement> {}

const Carousel = ({ className, ...props }: CarouselProps) => {

  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <CarouselComponent
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        plugin.current
      ]}
      className={cn("w-full", className)}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
      {...props}
    >
      <CarouselContent>
        {carousel.map((item, index) => (
          <CarouselItem key={index}>
            <div className="w-full h-[500px] relative rounded-lg overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="w-full h-full object-cover"
              />
              {/* Contenido abajo con todo oscuro degradado */}
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent ">
                <h2 className="text-4xl font-bold text-white">{item.title}</h2>
                <p className="text-lg text-white mb-4">{item.description}</p>
                <Link href={item.href || "#"}>
                  <Button>Ver más</Button>
                </Link>
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselComponent>
  );
};

export default Carousel;
