import Image from "next/image"
import { getItemBySlug } from "@/lib/items"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Check } from "lucide-react"
import RelationProducts from "@/components/products/RelationProducts"

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function Page({ params }: PageProps) {

  const { slug } = await params

  const item = getItemBySlug(slug)

  if (!item) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-164px)]">
        <h1 className="text-2xl font-bold text-gray-800">Producto no encontrado</h1>
        <p className="text-gray-600">Lo sentimos, el producto que buscas no se encuentra disponible.</p>
        <Link href="/" className="mt-4">
          <Button>Volver al inicio</Button>
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white min-h-[calc(100vh-164px)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver al catálogo
          </Link>
        </div>
        
        <div className="lg:grid lg:grid-cols-2 lg:gap-16">
          {/* Galería de imágenes */}
          <div className="mb-10 lg:mb-0">
            <div className="aspect-square w-full rounded-xl bg-gray-200 overflow-hidden shadow-lg p-6 flex items-center justify-center">
              <Image
                src={item.image}
                alt={item.name}
                width={800}
                height={800}
                className="w-full h-full object-contain object-center transition-transform duration-300 hover:scale-105 mix-blend-multiply"
                priority
              />
            </div>
          </div>
          
          {/* Información del producto */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h1>
            
            <div className="mt-6">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
                ${item.price}
                {item.originalPrice && (
                  <span className="ml-3 text-xl text-gray-500 line-through">${item.originalPrice}</span>
                )}
              </h2>
              
              {item.stock && (
                <div className="flex items-center text-sm text-gray-700 mb-6">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  <span>En stock ({item.stock} unidades disponibles)</span>
                </div>
              )}
              
              <div className="prose max-w-none text-gray-600 mb-8">
                <p className="text-lg">{item.description}</p>
              </div>
              
              {/* Características */}
              {item.features && item.features.length > 0 && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Características principales</h3>
                  <ul className="space-y-3">
                    {item.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Especificaciones técnicas */}
              {item.specifications && (
                <div className="mt-8 border-t border-gray-200 pt-8">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Especificaciones técnicas</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <dl className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                      {Object.entries(item.specifications).map(([key, value]) => (
                        <div key={key} className="sm:col-span-1">
                          <dt className="text-sm font-medium text-gray-500">{key}</dt>
                          <dd className="mt-1 text-sm text-gray-900">{value}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>
      <div className="mt-20 container mx-auto px-4 md:px-0">
        <RelationProducts item={item} />
      </div>
    </div>
  )
}