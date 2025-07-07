
import Link from "next/link";
import Search from "./Search";
import { items } from "@/data/item-data";

const Navbar = () => {
  return (
    <nav className="bg-white border-b">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex justify-between items-center py-4 gap-6">
          <Link href="/">
            <span className="text-2xl font-bold text-gray-800">Naitex</span>
          </Link>
          <Search items={items} placeholder="Buscar producto" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
