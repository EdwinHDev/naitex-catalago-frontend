"use client"

import { getItemsByCategory } from "@/lib/items"
import Section from "../Home/section/Section"
import { Item } from "@/types/items"
import { useEffect, useState } from "react"

interface RelationProductsProps {
  item: Item
}

const RelationProducts = ({ item }: RelationProductsProps) => {

  const [items, setItems] = useState<Item[]>([])
  
  useEffect(() => {
    const itemsCategory = getItemsByCategory(item)
    setItems(itemsCategory)
  }, [item])

  return (
    <Section title="Productos relacionados" items={items} />
  )
}

export default RelationProducts
