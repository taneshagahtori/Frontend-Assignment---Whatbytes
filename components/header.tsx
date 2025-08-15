"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Search, ShoppingCart, User, X, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/contexts/cart-context"

interface HeaderProps {
  onSearch: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get("search") || "")
  const { itemCount } = useCart()

  // Sync search input with URL params
  useEffect(() => {
    const urlSearch = searchParams.get("search") || ""
    setSearchQuery(urlSearch)
  }, [searchParams])

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchQuery)
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setSearchQuery(query)
    onSearch(query)
  }

  const clearSearch = () => {
    setSearchQuery("")
    onSearch("")
  }

  return (
    <header className="gradient-primary shadow-elegant backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-18">
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-white/20 rounded-xl group-hover:bg-white/30 transition-colors duration-200">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-white tracking-tight">ShopHub</h1>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <form onSubmit={handleSearchSubmit} className="relative">
              <div className="relative group">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5 group-focus-within:text-blue-500 transition-colors" />
                <Input
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="w-full pl-12 pr-12 py-3 glass-effect text-gray-900 border-0 rounded-2xl focus:ring-2 focus:ring-white/30 shadow-lg placeholder:text-gray-500 text-base"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100 transition-all"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="flex items-center space-x-3">
            <Link href="/cart">
              <Button
                variant="ghost"
                size="lg"
                className="relative text-white hover:bg-white/20 hover:text-white rounded-xl px-4 py-2 transition-all duration-200"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="ml-2 hidden sm:inline font-medium">Cart</span>
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold shadow-lg animate-pulse">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>

            <Button
              variant="ghost"
              size="lg"
              className="text-white hover:bg-white/20 hover:text-white rounded-xl px-4 py-2 transition-all duration-200"
            >
              <User className="h-5 w-5" />
              <span className="ml-2 hidden sm:inline font-medium">Profile</span>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
