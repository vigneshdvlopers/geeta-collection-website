import Image from 'next/image';
import { Star } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Priya Sharma',
    location: 'Mumbai',
    avatarUrl: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20happy%20indian%20woman%20in%20traditional%20attire%20smiling%20warmly%20with%20clean%20studio%20background%20and%20soft%20lighting&width=100&height=100&seq=test1&orientation=squarish',
    testimonial: '"Absolutely love the quality and craftsmanship! The saree I bought for my wedding was perfect. The team at Geeta Collection made my special day even more memorable."'
  },
  {
    name: 'Anita Patel',
    location: 'Delhi',
    avatarUrl: 'https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elegant%20indian%20woman%20wearing%20designer%20suit%20with%20confident%20smile%20in%20studio%20setting%20with%20neutral%20background&width=100&height=100&seq=test2&orientation=squarish',
    testimonial: '"The designer suits here are exceptional. Great attention to detail and the fit is always perfect. Been a loyal customer for 5 years now!"'
  },
  {
    name: 'Meera Gupta',
    location: 'Bangalore',
    avatarUrl: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20indian%20woman%20with%20traditional%20jewelry%20and%20elegant%20styling%20smiling%20in%20studio%20with%20soft%20lighting&width=100&height=100&seq=test3&orientation=squarish',
    testimonial: '"Found the most beautiful lehenga for my sister\'s wedding here. The staff was so helpful and the customization service is amazing. Highly recommend!"'
  }
];

const Testimonials = () => {
  return (
    <section className="bg-[#2D3B4E] py-20 font-sans">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-12 text-center text-white">
          <h2 className="text-[48px] font-bold leading-tight">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-300">Trusted by thousands of satisfied customers</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex flex-col rounded-xl bg-[#1F2937] p-8 text-white">
              <div className="flex items-center">
                <div className="relative mr-4 h-14 w-14 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatarUrl}
                    alt={`Avatar of ${testimonial.name}`}
                    width={100}
                    height={100}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.location}</p>
                </div>
              </div>
              <div className="my-4 flex items-center">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current text-[#F59E0B]" />
                ))}
              </div>
              <p className="text-gray-300">{testimonial.testimonial}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;