import { items } from "../data/item-data"
import { Item } from "../types/items"

export const getItemBySlug = (slug: string) => {
  
  return items.find((item) => item.slug === slug)
}

export const getItemsByCategory = (item: Item) => {
  return items.filter((_item) => _item.category === item.category && _item.id !== item.id)
}