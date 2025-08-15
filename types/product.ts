export interface Product {
  id: string
  title: string
  price: number
  description: string
  category: string
  image: string
  rating?: {
    rate: number
    count: number
  }
}

export interface CartItem extends Product {
  quantity: number
}

export interface FilterState {
  category: string
  priceRange: [number, number]
  searchQuery: string
}
