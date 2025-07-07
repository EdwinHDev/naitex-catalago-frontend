"use client"

import { Item } from "@/types/items";
import { Input } from "../ui/input";
import { SearchIcon } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

interface SearchProps {
  items: Item[]
  placeholder?: string
}

const Search = ({ items, placeholder }: SearchProps) => {

  const router = useRouter()

  const divRef = useRef<HTMLDivElement | null>(null);

  const [value, setValue] = useState("")
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<Item | null>(null)
  const [openPreviousResults, setOpenPreviousResults] = useState(false)
  const [previousResults, setPreviousResults] = useState<string[]>([])

  useEffect(() => {
    if(value){
      setOpen(true)
    }else{
      setOpen(false)
    }
  }, [ value ]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setOpen(false);
        setOpenPreviousResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const saveLastResults = (results: string) => {
    const lastResults = localStorage.getItem("lastResults")
    if(lastResults){
      const lastResultsArray = JSON.parse(lastResults)

      if(lastResultsArray.includes(results)) return

      const newLastResultsArray = [...lastResultsArray, results]
      localStorage.setItem("lastResults", JSON.stringify(newLastResultsArray))
    }else{
      localStorage.setItem("lastResults", JSON.stringify([results]))
    }
  }

  const handlePreviousResults = () => {
    const lastResults = localStorage.getItem("lastResults")
    console.log(lastResults)
    if(lastResults){
      const lastResultsArray = JSON.parse(lastResults)
      setPreviousResults(lastResultsArray)
      setOpenPreviousResults(true)
    }
  }

  return (
    <div className="relative max-w-[300px] w-full" ref={divRef}>
      <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
      <Input
        placeholder={placeholder || "Buscar"}
        className="pr-8"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onClick={(e) => {
          e.stopPropagation()
          handlePreviousResults()
        }}
      />
      <div className="absolute top-10 w-full z-10 border border-gray-200 rounded-md bg-white shadow-lg max-h-[200px] overflow-y-auto" style={{ display: open || openPreviousResults ? "block" : "none" }}>
        {
          open && items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())).slice(0, 10).map((item, index) => (
            <div
              key={index}
              className="py-1 hover:bg-gray-100 cursor-pointer px-2 line-clamp-1"
              onClick={() => {
                setSelected(item)
                setOpen(false)
                saveLastResults(item.name)
                router.push(`/${item.slug}`)
              }}
            >
              {item.name}
            </div>
          ))
        }
        {
          /* Si no hay resultados mostrar un mensaje */
          items.filter((item) => item.name.toLowerCase().includes(value.toLowerCase())).length === 0 && (
            <div className="py-1 px-2 text-gray-500">
              No se encontraron resultados
            </div>
          )
        }
        {
          !open && openPreviousResults && previousResults.map((result, index) => (
            <div
              key={index}
              className="py-1 hover:bg-gray-100 cursor-pointer px-2 line-clamp-1"
              onClick={() => {
                setOpenPreviousResults(false)
              }}
            >
              {result}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Search;
