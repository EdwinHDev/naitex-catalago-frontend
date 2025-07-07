
interface CarouselItem {
  image: string;
  title: string;
  description: string;
  href?: string;
}

export const carousel: CarouselItem[] = [
  {
    image: "/images/carousel/tractor.jpg",
    title: "Tractores",
    description: "Trabaja el como nunca antes con la mejor maquinaria de Upata",
    href: "/images/maquinaria",
  },
  {
    image: "/images/carousel/cosmeticos.jpg",
    title: "Cosmeticos",
    description: "Encuentra lo que necesitas para tu cuidado personal",
    href: "/images/cosmeticos",
  },
  {
    image: "/images/carousel/vehiculos.jpg",
    title: "Vehículos",
    description: "Vehículos de la marca Ford para ti",
    href: "/images/vehiculos",
  },
]