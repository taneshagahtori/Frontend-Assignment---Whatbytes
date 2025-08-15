# Whatbytes E-commerce Frontend

A modern, responsive e-commerce application built with Next.js, featuring advanced filtering, search functionality, and cart management.

## 🚀 Features

### Core Functionality
- **Product Listing**: Responsive grid layout (3 columns desktop, 2 tablet, 1 mobile)
- **Advanced Filtering**: Category filters and price range slider
- **Real-time Search**: Debounced search with highlighting and smart matching
- **URL-based Filters**: Shareable URLs with filter states (`?category=electronics&price=0-1000`)
- **Shopping Cart**: Full cart management with localStorage persistence
- **Product Details**: Dynamic routing for individual product pages (`/product/[id]`)
- **Responsive Design**: Mobile-first approach with Tailwind CSS

### Technical Implementation
- **Client-side State Management**: React Context for cart state
- **localStorage Persistence**: Cart state survives browser sessions
- **Conditional Rendering**: Smart "no products found" messaging
- **String Matching**: Enhanced search across title, description, and category
- **Performance Optimized**: Debounced search and efficient filtering

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4
- **UI Components**: shadcn/ui component library
- **Icons**: Lucide React
- **State Management**: React Context + useReducer
- **TypeScript**: Full type safety
- **Persistence**: localStorage for cart state

## 📱 Pages & Routes

### 1. Home Page (`/`)
- **Header**: Logo, search bar, cart icon with badge, profile avatar
- **Sidebar**: Category filters (All, Electronics, Clothing, Home) and price range slider
- **Product Grid**: Responsive product cards with images, titles, prices, ratings, and "Add to Cart" buttons
- **Footer**: Links and social media icons

### 2. Product Detail Page (`/product/[id]`)
- **Product Image**: Large product image carousel
- **Product Info**: Title, price, description, category, ratings
- **Quantity Selector**: Increment/decrement controls
- **Add to Cart**: Quantity-aware cart addition
- **Reviews Section**: Customer feedback display

### 3. Cart Page (`/cart`)
- **Cart Items**: List of added products with images and details
- **Quantity Controls**: Update item quantities or remove items
- **Price Summary**: Itemized breakdown with subtotal, tax, and total
- **Checkout**: Proceed to checkout functionality
- **Empty State**: Helpful messaging when cart is empty

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb) - Headers, buttons, links
- **Secondary**: White/Gray - Backgrounds and text
- **Accent**: Red - Cart badges and alerts
- **Success**: Green - Confirmations

### Typography
- **Headings**: Bold, hierarchical sizing
- **Body**: Clean, readable font with proper line height
- **UI Elements**: Consistent button and form styling

### Layout
- **Mobile-first**: Responsive breakpoints
- **Grid System**: CSS Grid and Flexbox
- **Spacing**: Consistent padding and margins
- **Cards**: Elevated product cards with hover effects

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone <repository-url>
   cd ecommerce-frontend
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Project Structure

\`\`\`
├── app/
│   ├── cart/
│   │   └── page.tsx          # Cart page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx      # Product detail page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page
│   └── globals.css           # Global styles
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── header.tsx            # Site header
│   ├── footer.tsx            # Site footer
│   ├── filter-sidebar.tsx    # Filter controls
│   ├── product-grid.tsx      # Product grid layout
│   ├── product-card.tsx      # Individual product cards
│   └── search-results.tsx    # Search result display
├── contexts/
│   └── cart-context.tsx      # Cart state management
├── hooks/
│   └── use-debounce.ts       # Debounce hook
├── lib/
│   ├── products.ts           # Sample product data
│   └── utils.ts              # Utility functions
└── types/
    └── product.ts            # TypeScript interfaces
\`\`\`

## 🔧 Key Features Implementation

### URL-based Filtering
\`\`\`typescript
// Example URLs:
// /?category=electronics&minPrice=100&maxPrice=500&search=phone
// /?category=clothing&search=shirt
\`\`\`

### Cart Persistence
\`\`\`typescript
// Cart state automatically saves to localStorage
// Survives browser refresh and sessions
\`\`\`

### Advanced Search
\`\`\`typescript
// Searches across:
// - Product titles
// - Descriptions  
// - Categories
// With debouncing and highlighting
\`\`\`

### Responsive Design
\`\`\`css
/* Mobile-first breakpoints */
grid-cols-1 md:grid-cols-2 lg:grid-cols-3
\`\`\`

## 🎯 Assignment Requirements Completed

✅ **Filtering logic** for categories and price  
✅ **Search filtering** with string matching  
✅ **URL-based filters** (`?category=electronics&price=0-1000`)  
✅ **Client-side state management** for cart (React Context)  
✅ **Dynamic routing** for product detail pages (`/product/[id]`)  
✅ **Conditional rendering** (no products found messaging)  
✅ **localStorage persistence** for cart state  
✅ **Responsive design** with Tailwind CSS  
✅ **Lucide React icons** throughout the application  

## 🌐 Live Demo

[Deploy to Vercel](https://vercel.com) - Click the deploy button to see the live application.

## 📝 Development Notes

- **Performance**: Debounced search prevents excessive filtering
- **Accessibility**: Proper ARIA labels and keyboard navigation
- **SEO**: Semantic HTML and proper meta tags
- **Error Handling**: Graceful fallbacks for missing products
- **Type Safety**: Full TypeScript coverage

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
