"use client"

import type React from "react"

import Image from "next/image"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/types/product"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  const renderStars = (rating: number) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />)
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" className="h-4 w-4 fill-yellow-400/50 text-yellow-400" />)
    }

    const remainingStars = 5 - Math.ceil(rating)
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />)
    }

    return stars
  }

  return (
    <Card className="group h-full shadow-elegant hover:shadow-hover transition-all duration-300 cursor-pointer border-0 gradient-card overflow-hidden">
      <CardContent className="p-0">
        <div className="relative aspect-square bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.title}
            width={300}
            height={300}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
            <Button
              onClick={handleAddToCart}
              size="sm"
              className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 gradient-primary text-white border-0 shadow-lg hover:shadow-xl"
            >
              <ShoppingCart className="h-4 w-4 mr-2" />
              Quick Add
            </Button>
          </div>
        </div>

        <div className="p-6 space-y-3">
          <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200 leading-tight">
            {product.title}
          </h3>

          <div className="flex items-center justify-between">
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
              ${product.price}
            </p>

            {product.rating && (
              <div className="flex items-center space-x-1 bg-yellow-50 px-2 py-1 rounded-full">
                <div className="flex">{renderStars(product.rating.rate)}</div>
                <span className="text-xs text-gray-600 font-medium">({product.rating.count})</span>
              </div>
            )}
          </div>

          <Button
            onClick={handleAddToCart}
            className="w-full gradient-primary text-white border-0 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 font-medium py-2.5"
          >
            <ShoppingCart className="h-4 w-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
