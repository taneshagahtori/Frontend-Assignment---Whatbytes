import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-600 text-white mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Filters Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Filters</h3>
            <div className="space-y-2">
              <Link href="/?category=all" className="block text-blue-100 hover:text-white">
                All
              </Link>
              <Link href="/?category=electronics" className="block text-blue-100 hover:text-white">
                Electronics
              </Link>
              <Link href="/?category=clothing" className="block text-blue-100 hover:text-white">
                Clothing
              </Link>
              <Link href="/?category=home" className="block text-blue-100 hover:text-white">
                Home
              </Link>
            </div>
          </div>

          {/* About Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <div className="space-y-2">
              <Link href="/about" className="block text-blue-100 hover:text-white">
                About Us
              </Link>
              <Link href="/contact" className="block text-blue-100 hover:text-white">
                Contact
              </Link>
            </div>
          </div>

          {/* Follow Us Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-blue-700 p-2 rounded-full hover:bg-blue-800 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-500 mt-8 pt-8 text-center">
          <p className="text-blue-100">© 2025 Tanesha Gahtori. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
