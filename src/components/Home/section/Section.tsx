"use client"

import * as React from "react"
import { Item } from "@/types/items"
import ProductCard from "@/components/shared/ProducCard"
import Link from "next/link"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  items: Item[]
}
const Section = ({ title, description, items, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <header className="flex gap-6 px-4 md:px-0">
        <div className="flex flex-col gap-2 items-end">
          <h2 className="text-2xl font-bold text-gray-800">{title}</h2>
          {
            description && (
              <p className="text-gray-600">{description}</p>
            )
          }
        </div>
      </header>
      <section className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 px-4 md:px-0">
        {
          items.map((item, index) => (
            <Link href={`/${item.slug}`} key={index}>
              <ProductCard item={item} />
            </Link>
          ))
        }
      </section>
    </section>
  )
}

export default Section
