"use client"
import { useRouter, useSearchParams } from "next/navigation"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Slider } from "@/components/ui/slider"
import { categories } from "@/lib/products"
import type { FilterState } from "@/types/product"
import { Search } from "lucide-react" // Fixed import to use lucide-react instead of non-existent icons file

interface FilterSidebarProps {
  filters: FilterState
  onFiltersChange: (filters: FilterState) => void
}

export function FilterSidebar({ filters, onFiltersChange }: FilterSidebarProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const updateURL = (newFilters: FilterState) => {
    const params = new URLSearchParams(searchParams.toString())

    // Update URL parameters
    if (newFilters.category !== "all") {
      params.set("category", newFilters.category)
    } else {
      params.delete("category")
    }

    if (newFilters.priceRange[0] > 0) {
      params.set("minPrice", newFilters.priceRange[0].toString())
    } else {
      params.delete("minPrice")
    }

    if (newFilters.priceRange[1] < 1000) {
      params.set("maxPrice", newFilters.priceRange[1].toString())
    } else {
      params.delete("maxPrice")
    }

    if (newFilters.searchQuery) {
      params.set("search", newFilters.searchQuery)
    } else {
      params.delete("search")
    }

    const newURL = params.toString() ? `?${params.toString()}` : "/"
    router.push(newURL, { scroll: false })
  }

  const handleCategoryChange = (category: string) => {
    const newFilters = { ...filters, category }
    onFiltersChange(newFilters)
    updateURL(newFilters)
  }

  const handlePriceRangeChange = (value: number[]) => {
    const newFilters = { ...filters, priceRange: [value[0], value[1]] as [number, number] }
    onFiltersChange(newFilters)
    updateURL(newFilters)
  }

  return (
    <div className="gradient-primary text-white p-8 rounded-2xl shadow-elegant backdrop-blur-sm">
      <div className="flex items-center space-x-2 mb-8">
        <div className="p-2 bg-white/20 rounded-lg">
          <Search className="h-5 w-5 text-white" />
        </div>
        <h2 className="text-2xl font-bold">Filters</h2>
      </div>

      <div className="mb-10">
        <h3 className="text-lg font-semibold mb-6 text-white/90">Category</h3>
        <RadioGroup value={filters.category} onValueChange={handleCategoryChange} className="space-y-4">
          {categories.map((category) => (
            <div key={category.id} className="flex items-center space-x-3 group">
              <RadioGroupItem
                value={category.id}
                id={category.id}
                className="border-2 border-white/60 text-white data-[state=checked]:bg-white data-[state=checked]:text-blue-600 w-5 h-5"
              />
              <Label
                htmlFor={category.id}
                className="text-white cursor-pointer hover:text-white/80 transition-colors font-medium group-hover:translate-x-1 transition-transform duration-200"
              >
                {category.name}
              </Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-6 text-white/90">Price Range</h3>
        <div className="space-y-6">
          <div className="bg-white/10 p-4 rounded-xl backdrop-blur-sm">
            <Slider
              value={filters.priceRange}
              onValueChange={handlePriceRangeChange}
              max={1000}
              min={0}
              step={10}
              className="w-full"
            />
            <div className="flex justify-between text-sm text-white/80 mt-3 font-medium">
              <span className="bg-white/20 px-3 py-1 rounded-full">${filters.priceRange[0]}</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">${filters.priceRange[1]}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Category Display (matching the UI reference) */}
      <div className="border-t border-blue-500 pt-6">
        <h3 className="text-lg font-semibold mb-4">Category</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <div key={`display-${category.id}`} className="flex items-center space-x-2">
              <div
                className={`w-4 h-4 rounded-full border-2 border-white ${
                  filters.category === category.id ? "bg-white" : "bg-transparent"
                }`}
              />
              <button
                onClick={() => handleCategoryChange(category.id)}
                className="text-white hover:text-blue-100 text-left"
              >
                {category.name}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Price Display Section */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-4">Price</h3>
        <div className="bg-blue-700 rounded p-3">
          <div className="flex items-center justify-between">
            <span className="text-blue-100">Range:</span>
            <span className="text-white font-medium">
              ${filters.priceRange[0]} - ${filters.priceRange[1]}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
