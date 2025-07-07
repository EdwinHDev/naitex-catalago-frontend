
interface CarouselItem {
  image: string;
  title: string;
  description: string;
  href?: string;
  position?: "center" | "bottom";
}

export const carousel: CarouselItem[] = [
  {
    image: "/images/carousel/desmalezadora.jpg",
    title: "Desmalezadora 43cc a gasolina",
    description: "Corta la maleza con facilidad y rapidez",
    href: "/desmalezadora-43cc-a-gasolina",
    position: "bottom",
  },
  {
    image: "/images/carousel/esmeril.jpg",
    title: "Esmeril angular 4-1/2 710w",
    description: "Corta, perfora y desgaste con facilidad",
    href: "/esmeril-angular-4-1-2-710w-12000-rpm-ingco",
    position: "center",
  },
  {
    image: "/images/carousel/herramientas.jpg",
    title: "Herramientas",
    description: "Todo lo que necesitas para tu hogar y tu trabajo",
    href: "/juego-de-dados-46-piezas-con-rachet-milimetrico-estuche-1-4",
    position: "center",
  },
]