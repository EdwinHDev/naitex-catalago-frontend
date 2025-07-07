import Carousel from "@/components/Home/Carousel";
import Section from "@/components/Home/section/Section";
import { items } from "@/data/item-data";

export default function Home() {
  return (
    <div className="container mx-auto">
      <Carousel className="mt-6" />
      <Section
        title="Productos disponibles"
        items={ items }
        className="mt-10"
      />
    </div>
  );
}
