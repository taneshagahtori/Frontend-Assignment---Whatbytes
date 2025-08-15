"use client"

import { useCart } from "@/contexts/cart-context"
import { Card, CardContent } from "@/components/ui/card"

export function CartSummary() {
  const { items, total, itemCount } = useCart()

  if (items.length === 0) {
    return null
  }

  return (
    <Card className="fixed bottom-4 right-4 w-80 shadow-lg z-50">
      <CardContent className="p-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">
              {itemCount} item{itemCount !== 1 ? "s" : ""} in cart
            </p>
            <p className="text-lg font-bold text-blue-600">${total.toFixed(2)}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-gray-500">+ tax & shipping</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
