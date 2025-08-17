import { Star, Filter, Grid3X3, List, Search, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Product {
  id: string
  title: string
  category: string
  price: number
  originalPrice?: number
  rating: number
  reviewCount: number
  image: string
  isOnSale: boolean
  discount?: number
}

interface Category {
  id: string
  name: string
  image: string
  count: number
}

const mockCategories: Category[] = [
  {
    id: "sarees",
    name: "Sarees",
    image: "https://readdy.ai/api/search-image?query=beautiful%20traditional%20silk%20saree%20with%20golden%20border%20and%20intricate%20patterns%20displayed%20elegantly%20on%20mannequin%20in%20boutique%20setting%20with%20soft%20lighting%20and%20clean%20background&width=400&height=500&seq=cat1&orientation=portrait",
    count: 45
  },
  {
    id: "suits",
    name: "Suits",
    image: "https://readdy.ai/api/search-image?query=elegant%20punjabi%20suit%20with%20beautiful%20embroidery%20and%20dupatta%20displayed%20professionally%20in%20boutique%20with%20clean%20modern%20background%20and%20soft%20lighting&width=400&height=500&seq=cat2&orientation=portrait",
    count: 32
  },
  {
    id: "lehengas",
    name: "Lehengas",
    image: "https://readdy.ai/api/search-image?query=stunning%20bridal%20lehenga%20with%20heavy%20embroidery%20and%20beautiful%20colors%20displayed%20in%20luxury%20boutique%20setting%20with%20elegant%20background%20and%20professional%20lighting&width=400&height=500&seq=cat3&orientation=portrait",
    count: 28
  },
  {
    id: "kurtis",
    name: "Kurtis",
    image: "https://readdy.ai/api/search-image?query=modern%20stylish%20kurti%20with%20contemporary%20design%20and%20beautiful%20prints%20displayed%20on%20hanger%20in%20clean%20boutique%20setting%20with%20minimalist%20background&width=400&height=500&seq=cat4&orientation=portrait",
    count: 38
  }
]

const mockProducts: Product[] = [
  {
    id: "1",
    title: "Royal Silk Banarasi Saree",
    category: "Sarees",
    price: 15999,
    originalPrice: 19999,
    rating: 4.8,
    reviewCount: 124,
    image: "https://readdy.ai/api/search-image?query=luxurious%20royal%20blue%20silk%20saree%20with%20golden%20zari%20work%20and%20intricate%20border%20design%20displayed%20elegantly%20on%20mannequin%20in%20premium%20boutique%20setting%20with%20soft%20professional%20lighting&width=300&height=400&seq=prod1&orientation=portrait",
    isOnSale: true,
    discount: 20
  },
  {
    id: "2",
    title: "Designer Anarkali Suit Set",
    category: "Suits",
    price: 8999,
    originalPrice: 12999,
    rating: 4.6,
    reviewCount: 89,
    image: "https://readdy.ai/api/search-image?query=beautiful%20designer%20anarkali%20suit%20with%20heavy%20embroidery%20and%20flowing%20design%20in%20vibrant%20colors%20displayed%20professionally%20in%20boutique%20with%20clean%20background&width=300&height=400&seq=prod2&orientation=portrait",
    isOnSale: true,
    discount: 31
  },
  {
    id: "3",
    title: "Bridal Lehenga Collection",
    category: "Lehengas",
    price: 45999,
    rating: 4.9,
    reviewCount: 67,
    image: "https://readdy.ai/api/search-image?query=stunning%20bridal%20lehenga%20in%20red%20and%20gold%20with%20heavy%20embroidery%20sequins%20and%20beautiful%20dupatta%20displayed%20in%20luxury%20bridal%20boutique%20setting%20with%20elegant%20lighting&width=300&height=400&seq=prod3&orientation=portrait",
    isOnSale: false
  },
  {
    id: "4",
    title: "Cotton Block Print Kurti",
    category: "Kurtis",
    price: 2499,
    originalPrice: 3499,
    rating: 4.4,
    reviewCount: 156,
    image: "https://readdy.ai/api/search-image?query=stylish%20cotton%20kurti%20with%20beautiful%20block%20prints%20and%20modern%20design%20in%20bright%20colors%20displayed%20on%20hanger%20in%20clean%20boutique%20setting&width=300&height=400&seq=prod4&orientation=portrait",
    isOnSale: true,
    discount: 29
  },
  {
    id: "5",
    title: "Chanderi Silk Saree",
    category: "Sarees",
    price: 7999,
    rating: 4.7,
    reviewCount: 92,
    image: "https://readdy.ai/api/search-image?query=elegant%20chanderi%20silk%20saree%20with%20delicate%20patterns%20and%20beautiful%20draping%20displayed%20in%20boutique%20with%20soft%20lighting&width=300&height=400&seq=prod5&orientation=portrait",
    isOnSale: false
  },
  {
    id: "6",
    title: "Punjabi Patiala Suit",
    category: "Suits",
    price: 5499,
    originalPrice: 7999,
    rating: 4.5,
    reviewCount: 78,
    image: "https://readdy.ai/api/search-image?query=traditional%20punjabi%20patiala%20suit%20with%20vibrant%20colors%20and%20beautiful%20embroidery%20displayed%20professionally&width=300&height=400&seq=prod6&orientation=portrait",
    isOnSale: true,
    discount: 31
  },
  {
    id: "7",
    title: "Party Wear Lehenga",
    category: "Lehengas",
    price: 18999,
    originalPrice: 24999,
    rating: 4.6,
    reviewCount: 45,
    image: "https://readdy.ai/api/search-image?query=glamorous%20party%20wear%20lehenga%20with%20sequin%20work%20and%20modern%20design%20in%20boutique%20setting&width=300&height=400&seq=prod7&orientation=portrait",
    isOnSale: true,
    discount: 24
  },
  {
    id: "8",
    title: "Embroidered Georgette Kurti",
    category: "Kurtis",
    price: 3999,
    rating: 4.3,
    reviewCount: 134,
    image: "https://readdy.ai/api/search-image?query=elegant%20georgette%20kurti%20with%20delicate%20embroidery%20and%20modern%20cut%20displayed%20in%20boutique&width=300&height=400&seq=prod8&orientation=portrait",
    isOnSale: false
  }
]

function StarRating({ rating, reviewCount }: { rating: number; reviewCount: number }) {
  return (
    <div className="flex items-center gap-1">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
      <span className="text-sm text-gray-600">({reviewCount})</span>
    </div>
  )
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {product.isOnSale && product.discount && (
            <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 text-white">
              -{product.discount}%
            </Badge>
          )}
        </div>
        <div className="p-6">
          <h3 className="font-semibold text-lg text-gray-800 mb-2 line-clamp-2">
            {product.title}
          </h3>
          <p className="text-sm text-gray-600 mb-3">{product.category}</p>
          <StarRating rating={product.rating} reviewCount={product.reviewCount} />
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-800">
                ₹{product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ₹{product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
          </div>
          <Button className="w-full mt-4 bg-pink-600 hover:bg-pink-700 text-white rounded-xl transition-colors duration-300">
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

function CategoryCard({ category }: { category: Category }) {
  return (
    <Card className="group overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] rounded-xl cursor-pointer">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={category.image}
            alt={category.name}
            className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 group-hover:bg-opacity-20 transition-all duration-300" />
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold mb-1">{category.name}</h3>
            <p className="text-sm opacity-90">{category.count} items</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function CollectionPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Our Collection
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Browse our exquisite range of premium Indian fashion. From traditional sarees to contemporary kurtis, discover timeless elegance crafted with love.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-12 px-6 border-b border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 items-start lg:items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <Select>
                <SelectTrigger className="w-48 rounded-xl">
                  <SelectValue placeholder="All Categories" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="sarees">Sarees</SelectItem>
                  <SelectItem value="suits">Suits</SelectItem>
                  <SelectItem value="lehengas">Lehengas</SelectItem>
                  <SelectItem value="kurtis">Kurtis</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-48 rounded-xl">
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="0-5000">₹0 - ₹5,000</SelectItem>
                  <SelectItem value="5000-15000">₹5,000 - ₹15,000</SelectItem>
                  <SelectItem value="15000-30000">₹15,000 - ₹30,000</SelectItem>
                  <SelectItem value="30000+">₹30,000+</SelectItem>
                </SelectContent>
              </Select>
              
              <Select>
                <SelectTrigger className="w-48 rounded-xl">
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Ratings</SelectItem>
                  <SelectItem value="4+">4+ Stars</SelectItem>
                  <SelectItem value="3+">3+ Stars</SelectItem>
                </SelectContent>
              </Select>
              
              <Button variant="outline" className="rounded-xl">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
            </div>
            
            <div className="flex gap-4 items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input 
                  placeholder="Search products..." 
                  className="pl-10 w-64 rounded-xl"
                />
              </div>
              
              <Select defaultValue="featured">
                <SelectTrigger className="w-48 rounded-xl">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              
              <div className="flex border border-gray-300 rounded-xl">
                <Button variant="ghost" size="sm" className="rounded-l-xl rounded-r-none">
                  <Grid3X3 className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="rounded-r-xl rounded-l-none">
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6">
        {/* Categories Section */}
        <section className="py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Shop by Category
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated collections of traditional and contemporary Indian wear
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockCategories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-2">
                Featured Products
              </h2>
              <p className="text-gray-600">Showing {mockProducts.length} products</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {mockProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-8 py-3 rounded-xl">
              Load More Products
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}