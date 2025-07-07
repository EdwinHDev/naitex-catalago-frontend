export type Category = "Motosierras" | "Podadoras" | "Motobomba" | "Generadores Electricos" | "Mangueras de Riego" | "Repuestos" | "Herramientas";

export interface Item {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: string;
  originalPrice?: string;
  discount?: number;
  image: string;
  category: Category;
  stock?: number;
  features?: string[];
  specifications?: Record<string, string>;
}