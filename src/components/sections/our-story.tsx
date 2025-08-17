import type { FC } from 'react';
import Image from 'next/image';

const OurStory: FC = () => {
  return (
    <section className="bg-light-pink py-20 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="mb-6 text-[48px] font-bold text-text-dark leading-tight">
              Our Story
            </h2>
            <p className="mb-4 text-base text-text-medium">
              Geeta Collection has been a trusted name in traditional Indian fashion for over two decades. We specialize in creating exquisite handcrafted garments that blend timeless elegance with contemporary style.
            </p>
            <p className="mb-10 text-base text-text-medium">
              From intricate sarees to designer lehengas, each piece in our collection is carefully curated to celebrate the beauty and grace of Indian heritage while embracing modern fashion sensibilities.
            </p>
            <div className="mb-12 flex items-center space-x-16">
              <div>
                <p className="text-4xl font-bold text-primary">20+</p>
                <p className="mt-2 text-text-medium">Years of Excellence</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-primary">10k+</p>
                <p className="mt-2 text-text-medium">Happy Customers</p>
              </div>
            </div>
            <a
              href="https://readdy.link/preview/16605651-9fde-45e3-8e1e-f5812a0c9af8/1798866/about"
              className="inline-block rounded-button bg-primary px-8 py-4 text-base font-medium text-white transition-colors hover:bg-primary/90"
            >
              Learn More
            </a>
          </div>
          <div className="flex items-start justify-center space-x-4 lg:col-span-5">
            <div className="w-[48%]">
              <Image
                src="https://readdy.ai/api/search-image?query=traditional%20indian%20boutique%20interior%20with%20beautiful%20display%20of%20colorful%20sarees%20and%20suits%20hanging%20elegantly%20with%20warm%20lighting%20and%20sophisticated%20decor&width=300&height=400&seq=about1&orientation=portrait"
                alt="Our boutique interior"
                width={300}
                height={400}
                className="h-auto w-full rounded-card object-cover shadow-card"
              />
            </div>
            <div className="w-[48%] pt-12">
              <Image
                src="https://readdy.ai/api/search-image?query=skilled%20artisan%20working%20on%20intricate%20embroidery%20and%20handwork%20on%20traditional%20indian%20garment%20in%20workshop%20setting%20with%20natural%20lighting&width=300&height=400&seq=about2&orientation=portrait"
                alt="Artisan at work"
                width={300}
                height={400}
                className="h-auto w-full rounded-card object-cover shadow-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;