"use client"

import type { Product } from "@/types/product"

interface SearchResultsProps {
  products: Product[]
  searchQuery: string
  totalProducts: number
}

export function SearchResults({ products, searchQuery, totalProducts }: SearchResultsProps) {
  const highlightText = (text: string, query: string) => {
    if (!query) return text

    const regex = new RegExp(`(${query})`, "gi")
    const parts = text.split(regex)

    return parts.map((part, index) =>
      regex.test(part) ? (
        <mark key={index} className="bg-yellow-200 text-gray-900 px-1 rounded">
          {part}
        </mark>
      ) : (
        part
      ),
    )
  }

  if (searchQuery && products.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="max-w-md mx-auto">
          <h2 className="text-xl font-semibold text-gray-900 mb-2">No products found</h2>
          <p className="text-gray-600 mb-4">
            We couldn't find any products matching <span className="font-medium text-gray-900">"{searchQuery}"</span>
          </p>
          <div className="text-sm text-gray-500">
            <p>Try:</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Checking your spelling</li>
              <li>Using different keywords</li>
              <li>Using more general terms</li>
              <li>Browsing our categories</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-foreground mb-2">
        {searchQuery ? (
          <>
            Search Results for <span className="text-blue-600">"{highlightText(searchQuery, searchQuery)}"</span>
          </>
        ) : (
          "Product Listing"
        )}
      </h1>
      <p className="text-muted-foreground">
        {products.length} of {totalProducts} product{products.length !== 1 ? "s" : ""}{" "}
        {searchQuery ? "found" : "available"}
      </p>
    </div>
  )
}
