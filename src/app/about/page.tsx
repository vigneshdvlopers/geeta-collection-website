import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Award, Users, Calendar, Heart, Shield, Sparkles, Trophy } from 'lucide-react'
import Navigation from "@/components/sections/navigation"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center bg-gradient-to-r from-primary/20 to-primary/10 mt-20">
        <div className="absolute inset-0 bg-[url('https://readdy.ai/api/search-image?query=elegant%20traditional%20indian%20boutique%20interior%20with%20beautiful%20sarees%20and%20traditional%20clothing%20displays%20soft%20warm%20lighting%20luxury%20setting&width=1200&height=600')] bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-[72px] font-bold text-text-dark mb-6 leading-tight">
            About Geeta Collection
          </h1>
          <p className="text-xl text-text-medium max-w-2xl mx-auto leading-relaxed">
            Celebrating over two decades of excellence in traditional Indian fashion, 
            bringing you timeless elegance and contemporary designs
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-light-pink">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-[48px] font-bold text-text-dark mb-8">Our Story</h2>
              <p className="text-text-medium mb-6 leading-relaxed">
                Founded in 2003 by Geeta Sharma, our boutique began as a small dream to bring 
                authentic Indian fashion to modern women. What started as a passion for 
                preserving traditional craftsmanship has grown into a beloved destination 
                for exquisite Indian wear.
              </p>
              <p className="text-text-medium mb-8 leading-relaxed">
                Over the years, we have built lasting relationships with skilled artisans 
                across India, ensuring that each piece tells a story of heritage, quality, 
                and unmatched beauty. Our commitment to excellence has made us a trusted 
                name in Indian fashion.
              </p>
              
              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">20+</div>
                  <div className="text-sm text-text-medium">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10k+</div>
                  <div className="text-sm text-text-medium">Happy Customers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">500+</div>
                  <div className="text-sm text-text-medium">Unique Designs</div>
                </div>
              </div>

              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-[12px]">
                <Link href="/collection">Explore Our Collection</Link>
              </Button>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Image
                src="https://readdy.ai/api/search-image?query=traditional%20indian%20boutique%20interior%20with%20beautiful%20display%20of%20colorful%20sarees%20and%20suits%20hanging%20elegantly%20with%20warm%20lighting%20and%20sophisticated%20decor&width=300&height=400"
                alt="Boutique Interior"
                width={300}
                height={400}
                className="rounded-[12px] shadow-card object-cover"
              />
              <Image
                src="https://readdy.ai/api/search-image?query=skilled%20artisan%20working%20on%20intricate%20embroidery%20and%20handwork%20on%20traditional%20indian%20garment%20in%20workshop%20setting%20with%20natural%20lighting&width=300&height=400"
                alt="Artisan at Work"
                width={300}
                height={400}
                className="rounded-[12px] shadow-card object-cover mt-8"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-text-dark mb-6">Mission & Vision</h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              Guiding principles that drive our passion for traditional Indian fashion
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Heart className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-text-dark">Our Mission</h3>
                </div>
                <p className="text-text-medium leading-relaxed">
                  To preserve and celebrate the rich heritage of Indian fashion by offering 
                  authentic, high-quality traditional wear that empowers women to embrace 
                  their cultural identity while expressing their personal style. We are 
                  committed to supporting local artisans and maintaining the highest 
                  standards of craftsmanship.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <div className="flex items-center mb-6">
                  <Sparkles className="h-8 w-8 text-primary mr-4" />
                  <h3 className="text-2xl font-bold text-text-dark">Our Vision</h3>
                </div>
                <p className="text-text-medium leading-relaxed">
                  To become the most trusted destination for traditional Indian fashion 
                  globally, where every woman can find the perfect outfit that celebrates 
                  her heritage and makes her feel confident and beautiful. We envision a 
                  future where traditional craftsmanship thrives alongside modern design 
                  sensibilities.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-light-pink">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-text-dark mb-6">Meet Our Team</h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              The passionate individuals behind Geeta Collection's success
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <Image
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elegant%20indian%20woman%20founder%20of%20fashion%20boutique%20wearing%20traditional%20saree%20with%20confident%20smile%20in%20boutique%20setting&width=200&height=200"
                  alt="Geeta Sharma"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-text-dark mb-2">Geeta Sharma</h3>
                <p className="text-primary font-medium mb-4">Founder & Creative Director</p>
                <p className="text-text-medium text-sm leading-relaxed">
                  With over 20 years of experience in fashion design and a deep passion 
                  for Indian heritage, Geeta established the boutique to share her love 
                  for traditional craftsmanship with the world.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <Image
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20indian%20woman%20fashion%20designer%20wearing%20elegant%20kurti%20with%20warm%20smile%20in%20design%20studio%20setting&width=200&height=200"
                  alt="Priya Kapoor"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-text-dark mb-2">Priya Kapoor</h3>
                <p className="text-primary font-medium mb-4">Head Designer</p>
                <p className="text-text-medium text-sm leading-relaxed">
                  A graduate from NIFT Delhi, Priya brings contemporary flair to traditional 
                  designs. Her innovative approach has helped create some of our most 
                  popular collections.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <Image
                  src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20indian%20woman%20boutique%20manager%20wearing%20professional%20attire%20with%20friendly%20smile%20in%20retail%20setting&width=200&height=200"
                  alt="Anjali Verma"
                  width={200}
                  height={200}
                  className="rounded-full mx-auto mb-6 object-cover"
                />
                <h3 className="text-xl font-bold text-text-dark mb-2">Anjali Verma</h3>
                <p className="text-primary font-medium mb-4">Customer Experience Manager</p>
                <p className="text-text-medium text-sm leading-relaxed">
                  Anjali ensures every customer receives personalized attention and finds 
                  their perfect outfit. Her dedication to customer satisfaction has earned 
                  us countless loyal customers.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-text-dark mb-6">Awards & Recognition</h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              Celebrating our achievements and industry recognition
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <Card className="text-center p-6 border-0 shadow-card">
              <CardContent className="p-0">
                <Trophy className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-bold text-text-dark mb-2">Best Boutique Award</h4>
                <p className="text-text-medium text-sm">Fashion Week Delhi 2022</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-card">
              <CardContent className="p-0">
                <Award className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-bold text-text-dark mb-2">Excellence in Design</h4>
                <p className="text-text-medium text-sm">Indian Fashion Awards 2021</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-card">
              <CardContent className="p-0">
                <Users className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-bold text-text-dark mb-2">Customer Choice Award</h4>
                <p className="text-text-medium text-sm">Retail Excellence 2020</p>
              </CardContent>
            </Card>

            <Card className="text-center p-6 border-0 shadow-card">
              <CardContent className="p-0">
                <Star className="h-12 w-12 text-gold mx-auto mb-4" />
                <h4 className="font-bold text-text-dark mb-2">5-Star Rating</h4>
                <p className="text-text-medium text-sm">Google Reviews & Social Media</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-light-pink">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-text-dark mb-6">Why Choose Us</h2>
            <p className="text-xl text-text-medium max-w-3xl mx-auto">
              What sets Geeta Collection apart from other fashion boutiques
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <Shield className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-text-dark mb-4">Authentic Quality</h3>
                <p className="text-text-medium leading-relaxed">
                  Every piece is carefully selected and crafted by skilled artisans using 
                  traditional techniques passed down through generations. We guarantee 
                  authenticity and superior quality in every garment.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <Heart className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-text-dark mb-4">Personal Styling</h3>
                <p className="text-text-medium leading-relaxed">
                  Our expert stylists provide personalized consultation to help you find 
                  the perfect outfit for any occasion. We understand that every woman is 
                  unique and deserves individual attention.
                </p>
              </CardContent>
            </Card>

            <Card className="p-8 border-0 shadow-card">
              <CardContent className="p-0">
                <Sparkles className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-xl font-bold text-text-dark mb-4">Exclusive Designs</h3>
                <p className="text-text-medium leading-relaxed">
                  Many of our pieces are exclusive designs that you won't find anywhere 
                  else. We work directly with designers and artisans to create unique 
                  collections that celebrate Indian fashion heritage.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Quotes */}
      <section className="py-20 bg-dark-navy">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-[48px] font-bold text-white mb-6">Customer Love</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Hear what our customers say about their experience with us
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="p-8 bg-white border-0 shadow-card">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-text-medium mb-6 italic">
                  "Geeta Collection is my go-to place for all traditional wear. The quality 
                  is exceptional and the designs are absolutely stunning. I always receive 
                  compliments whenever I wear their outfits!"
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20happy%20indian%20woman%20in%20traditional%20attire%20smiling%20warmly%20with%20clean%20studio%20background%20and%20soft%20lighting&width=50&height=50"
                    alt="Priya Sharma"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-text-dark">Priya Sharma</p>
                    <p className="text-sm text-text-medium">Mumbai</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-card">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-text-medium mb-6 italic">
                  "The personalized service at Geeta Collection is unmatched. They helped 
                  me find the perfect lehenga for my daughter's wedding. The attention to 
                  detail and customer care is exceptional."
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://readdy.ai/api/search-image?query=professional%20portrait%20of%20elegant%20indian%20woman%20wearing%20designer%20suit%20with%20confident%20smile%20in%20studio%20setting%20with%20neutral%20background&width=50&height=50"
                    alt="Anita Patel"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-text-dark">Anita Patel</p>
                    <p className="text-sm text-text-medium">Delhi</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-8 bg-white border-0 shadow-card">
              <CardContent className="p-0">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold fill-current" />
                  ))}
                </div>
                <p className="text-text-medium mb-6 italic">
                  "I've been a customer for over 5 years and I'm always impressed by their 
                  new collections. The fusion of traditional and contemporary styles is 
                  perfect for my lifestyle."
                </p>
                <div className="flex items-center">
                  <Image
                    src="https://readdy.ai/api/search-image?query=professional%20headshot%20of%20young%20indian%20woman%20with%20traditional%20jewelry%20and%20elegant%20styling%20smiling%20in%20studio%20with%20soft%20lighting&width=50&height=50"
                    alt="Meera Gupta"
                    width={50}
                    height={50}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold text-text-dark">Meera Gupta</p>
                    <p className="text-sm text-text-medium">Bangalore</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="text-[48px] font-bold text-text-dark mb-6">
            Ready to Experience the Geeta Collection Difference?
          </h2>
          <p className="text-xl text-text-medium mb-8 max-w-3xl mx-auto">
            Visit our boutique or browse our online collection to discover your perfect 
            traditional outfit. Let us help you celebrate your heritage in style.
          </p>
          <div className="flex justify-center gap-6">
            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-[12px] text-[16px] font-medium">
              <Link href="/collection">Shop Our Collection</Link>
            </Button>
            <Button variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 rounded-[12px] text-[16px] font-medium">
              <Link href="/contact">Visit Our Store</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}