import React from 'react';

const HeroSection = () => {
  // NOTE: A plausible high-resolution background image URL was constructed based on the design instructions,
  // as no specific asset was provided for the hero section.
  const heroBackgroundImage = "https://readdy.ai/api/search-image?query=elegant%20woman%20in%20traditional%20saree%20in%20a%20luxury%20boutique%2C%20full%20shot%2C%20cinematic%20lighting&width=1920&height=1080&seq=hero1";

  return (
    <section
      className="relative w-full h-[700px] bg-cover bg-center"
      style={{ backgroundImage: `url('${heroBackgroundImage}')` }}
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true" />
      
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center text-white">
        <h1 className="text-7xl font-bold leading-tight">
          Timeless Elegance
        </h1>
        <p className="mt-4 max-w-2xl text-xl">
          Discover exquisite traditional and contemporary clothing that celebrates
          <br />
          your unique style and grace
        </p>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row">
          <a
            href="/collection"
            className="inline-block w-full min-w-[200px] rounded-xl bg-[#E53E5A] py-4 px-8 text-center text-base font-medium text-white transition-colors hover:bg-opacity-90 sm:w-auto"
          >
            Shop Collection
          </a>
          <a
            href="/about"
            className="inline-block w-full min-w-[200px] rounded-xl border border-white py-4 px-8 text-center text-base font-medium text-white transition-colors hover:bg-white hover:text-black sm:w-auto"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;