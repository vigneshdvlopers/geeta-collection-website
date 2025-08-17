import Image from 'next/image';

const categories = [
  {
    title: 'Sarees',
    description: 'Elegant traditional sarees',
    imageUrl: 'https://readdy.ai/api/search-image?query=beautiful%20traditional%20silk%20saree%20with%20golden%20border%20and%20intricate%20patterns%20displayed%20elegantly%20on%20mannequin%20in%20boutique%20setting%20with%20soft%20lighting%20and%20clean%20background&width=400&height=500&seq=cat1&orientation=portrait',
    alt: 'Elegant traditional silk saree displayed on a mannequin in a boutique',
  },
  {
    title: 'Suits',
    description: 'Designer suits & salwars',
    imageUrl: 'https://readdy.ai/api/search-image?query=elegant%20punjabi%20suit%20with%20beautiful%20embroidery%20and%20dupatta%20displayed%20professionally%20in%20boutique%20with%20clean%20modern%20background%20and%20soft%20lighting&width=400&height=500&seq=cat2&orientation=portrait',
    alt: 'Elegant punjabi suit with embroidery displayed on a mannequin',
  },
  {
    title: 'Lehengas',
    description: 'Bridal & party lehengas',
    imageUrl: 'https://readdy.ai/api/search-image?query=stunning%20bridal%20lehenga%20with%20heavy%20embroidery%20and%20beautiful%20colors%20displayed%20in%20luxury%20boutique%20setting%20with%20elegant%20background%20and%20professional%20lighting&width=400&height=500&seq=cat3&orientation=portrait',
    alt: 'Stunning bridal lehenga with heavy embroidery displayed in a luxury boutique',
  },
  {
    title: 'Kurtis',
    description: 'Casual & formal kurtis',
    imageUrl: 'https://readdy.ai/api/search-image?query=modern%20stylish%20kurti%20with%20contemporary%20design%20and%20beautiful%20prints%20displayed%20on%20hanger%20in%20clean%20boutique%20setting%20with%20minimalist%20background&width=400&height=500&seq=cat4&orientation=portrait',
    alt: 'Modern stylish kurti with floral prints hanging on a rack',
  },
];

const ShopCategories = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto max-w-[1200px] px-6 text-center">
        <h2 className="text-[48px] font-bold text-text-dark mb-4">
          Shop by Category
        </h2>
        <p className="text-base text-text-medium mb-12">
          Explore our diverse collection of traditional and contemporary wear
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <div
              key={category.title}
              className="bg-white rounded-[12px] shadow-[0px_4px_12px_rgba(0,0,0,0.1)] overflow-hidden text-center transition-transform duration-300 ease-in-out hover:scale-105"
            >
              <div className="relative aspect-square w-full">
                <Image
                  src={category.imageUrl}
                  alt={category.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[24px] font-bold text-text-dark mb-2">
                  {category.title}
                </h3>
                <p className="text-base text-text-medium">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopCategories;