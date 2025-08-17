import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';

type Product = {
  name: string;
  image: string;
  discount: string;
  reviews: number;
  price: string;
  originalPrice: string;
  rating: number;
};

const products: Product[] = [
  {
    name: 'Royal Silk Saree',
    image: 'https://readdy.ai/api/search-image?query=luxurious%20royal%20blue%20silk%20saree%20with%20golden%20zari%20work%20and%20intricate%20border%20design%20displayed%20elegantly%20on%20mannequin%20in%20premium%20boutique%20setting%20with%20soft%20professional%20lighting&width=300&height=400&seq=prod1&orientation=portrait',
    discount: '31% OFF',
    reviews: 124,
    price: '₹8,999',
    originalPrice: '₹12,999',
    rating: 4,
  },
  {
    name: 'Designer Anarkali Suit',
    image: 'https://readdy.ai/api/search-image?query=beautiful%20designer%20anarkali%20suit%20with%20heavy%20embroidery%20and%20flowing%20design%20in%20vibrant%20colors%20displayed%20professionally%20in%20boutique%20with%20clean%20background&width=300&height=400&seq=prod2&orientation=portrait',
    discount: '31% OFF',
    reviews: 89,
    price: '₹5,499',
    originalPrice: '₹7,999',
    rating: 4,
  },
  {
    name: 'Bridal Lehenga Set',
    image: 'https://readdy.ai/api/search-image?query=stunning%20bridal%20lehenga%20in%20red%20and%20gold%20with%20heavy%20embroidery%20sequins%20and%20beautiful%20dupatta%20displayed%20in%20luxury%20bridal%20boutique%20setting%20with%20elegant%20lighting&width=300&height=400&seq=prod3&orientation=portrait',
    discount: '31% OFF',
    reviews: 67,
    price: '₹24,999',
    originalPrice: '₹35,999',
    rating: 4,
  },
  {
    name: 'Cotton Print Kurti',
    image: 'https://readdy.ai/api/search-image?query=stylish%20cotton%20kurti%20with%20beautiful%20block%20prints%20and%20modern%20design%20in%20bright%20colors%20displayed%20on%20hanger%20in%20clean%20boutique%20setting&width=300&height=400&seq=prod4&orientation=portrait',
    discount: '32% OFF',
    reviews: 203,
    price: '₹1,299',
    originalPrice: '₹1,899',
    rating: 4,
  },
];

const StarRating = ({ rating, totalStars = 5 }: { rating: number; totalStars?: number }) => {
  return (
    <div className="flex items-center">
      {[...Array(totalStars)].map((_, index) => (
        <Star
          key={index}
          size={20}
          strokeWidth={0}
          fill={index < rating ? '#F59E0B' : '#E5E7EB'}
          className={index < rating ? 'text-gold' : 'text-gray-200'}
        />
      ))}
    </div>
  );
};

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="group bg-white rounded-xl shadow-[0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden transition-transform duration-300 ease-in-out hover:scale-[1.03]">
      <div className="relative">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={400}
          className="w-full h-auto object-cover aspect-[3/4]"
        />
        <div className="absolute top-4 left-4 bg-primary text-white text-sm font-medium py-1 px-3 rounded-md">
          {product.discount}
        </div>
      </div>
      <div className="p-4 flex flex-col space-y-2">
        <h3 className="text-[24px] font-medium text-text-dark leading-tight">{product.name}</h3>
        <div className="flex items-center gap-2">
          <StarRating rating={product.rating} />
          <span className="text-sm text-text-medium">({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold text-text-dark">{product.price}</span>
          <span className="text-base text-text-medium line-through">{product.originalPrice}</span>
        </div>
        <button className="mt-2 w-full bg-primary text-white py-3 rounded-xl text-base font-medium hover:bg-opacity-90 transition-colors">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

const FeaturedCollection = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h2 className="text-[48px] font-bold text-text-dark leading-tight">
            Featured Collection
          </h2>
          <p className="mt-4 text-lg text-text-medium">
            Handpicked favorites from our latest arrivals
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;