import { Card, CardContent } from "../ui/card"
import { Item } from "@/types/items"
import Image from "next/image"
import { Badge } from "../ui/badge"

interface ProductCardProps {
  item: Item
}

const ProductCard = ({ item }: ProductCardProps) => {
  return (
    <Card className="p-1 overflow-hidden hover:scale-105 transition-all h-full flex flex-col select-none">
      <CardContent className="p-1 flex flex-col h-full">
        <div className="w-full relative bg-gray-200 rounded-lg mb-2" style={{ paddingTop: '100%' }}>
          <Badge
            className="absolute top-2 right-2 z-10"
          >{item.category}</Badge>
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={500}
              className="w-full h-full object-contain object-center rounded-lg mix-blend-multiply"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            />
          </div>
        </div>
        <div className="flex flex-col flex-grow px-2">
          <div className="mb-2">
            <p className="text-lg font-semibold mb-1">{item.name}</p>
            <p className="text-gray-600 text-sm line-clamp-3">{item.description}</p>
          </div>
        </div>
        <div className="my-2 pt-2 px-2">
          <p className="text-gray-600 text-sm">Precio</p>
          <p className="text-gray-800 font-bold text-2xl">${item.price}</p>
        </div>
      </CardContent>
    </Card>
  )
}

export default ProductCard
