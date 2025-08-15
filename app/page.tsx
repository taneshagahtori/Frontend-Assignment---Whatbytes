"use client"

import { useState, useMemo, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { FilterSidebar } from "@/components/filter-sidebar"
import { ProductGrid } from "@/components/product-grid"
import { SearchResults } from "@/components/search-results"
import { Footer } from "@/components/footer"
import { useDebounce } from "@/hooks/use-debounce"
import { products } from "@/lib/products"
import type { FilterState } from "@/types/product"

export default function HomePage() {
  const searchParams = useSearchParams()
  const router = useRouter()

  // Initialize filters from URL params
  const [filters, setFilters] = useState<FilterState>({
    category: searchParams.get("category") || "all",
    priceRange: [
      Number.parseInt(searchParams.get("minPrice") || "0"),
      Number.parseInt(searchParams.get("maxPrice") || "1000"),
    ],
    searchQuery: searchParams.get("search") || "",
  })

  // Debounce search query for better performance
  const debouncedSearchQuery = useDebounce(filters.searchQuery, 300)

  // Update URL when search query changes
  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString())

    if (debouncedSearchQuery) {
      params.set("search", debouncedSearchQuery)
    } else {
      params.delete("search")
    }

    const newURL = params.toString() ? `?${params.toString()}` : "/"
    router.push(newURL, { scroll: false })
  }, [debouncedSearchQuery, searchParams, router])

  // Enhanced filter function with better search matching
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = filters.category === "all" || product.category === filters.category
      const matchesPrice = product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]

      // Enhanced search matching
      const searchLower = debouncedSearchQuery.toLowerCase()
      const matchesSearch =
        debouncedSearchQuery === "" ||
        product.title.toLowerCase().includes(searchLower) ||
        product.description.toLowerCase().includes(searchLower) ||
        product.category.toLowerCase().includes(searchLower)

      return matchesCategory && matchesPrice && matchesSearch
    })
  }, [filters.category, filters.priceRange, debouncedSearchQuery])

  const handleSearch = (query: string) => {
    setFilters((prev) => ({ ...prev, searchQuery: query }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/20">
      <Header onSearch={handleSearch} />

      <main className="container mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          <aside className="lg:w-80 lg:sticky lg:top-24 lg:self-start">
            <FilterSidebar filters={filters} onFiltersChange={setFilters} />
          </aside>

          <div className="flex-1 space-y-8">
            <SearchResults
              products={filteredProducts}
              searchQuery={debouncedSearchQuery}
              totalProducts={products.length}
            />

            {filteredProducts.length > 0 && (
              <div className="animate-fade-in">
                <ProductGrid products={filteredProducts} />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
