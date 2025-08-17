"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, Twitter, Send, User, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Navigation from "@/components/sections/navigation";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
    if (!formData.subject.trim()) errors.subject = "Subject is required";
    if (!formData.message.trim()) errors.message = "Message is required";

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: ""
    });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  const faqItems = [
    {
      question: "How can I place an order?",
      answer: "You can place orders through our website, visit our store, or call us directly. We also accept WhatsApp orders."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day return policy for unused items with original tags. Custom-made items are not eligible for returns."
    },
    {
      question: "Do you provide size alterations?",
      answer: "Yes, we provide free minor alterations for purchases above ₹5,000. Additional charges apply for major alterations."
    },
    {
      question: "How long does delivery take?",
      answer: "Local delivery takes 2-3 days, while outstation orders take 5-7 business days. Express delivery is also available."
    },
    {
      question: "Do you have a catalog for bridal wear?",
      answer: "Yes, we have an exclusive bridal collection catalog. Visit our store or schedule an appointment for personalized consultation."
    },
    {
      question: "Can I book an appointment for trial?",
      answer: "Absolutely! We recommend booking appointments for bridal wear trials and personal styling sessions."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#E53E5A] to-[#2D3B4E] py-24 mt-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you. Get in touch with us for any inquiries about our collection, custom orders, or styling consultation.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2">
                      Full Name *
                    </label>
                    <Input
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#E53E5A] focus:border-[#E53E5A] transition-colors ${
                        formErrors.name ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your full name"
                    />
                    {formErrors.name && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#E53E5A] focus:border-[#E53E5A] transition-colors ${
                        formErrors.email ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="Enter your email"
                    />
                    {formErrors.email && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2">
                      Phone Number *
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#E53E5A] focus:border-[#E53E5A] transition-colors ${
                        formErrors.phone ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="+91 98765 43210"
                    />
                    {formErrors.phone && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1F2937] mb-2">
                      Subject *
                    </label>
                    <Input
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#E53E5A] focus:border-[#E53E5A] transition-colors ${
                        formErrors.subject ? "border-red-500" : "border-gray-300"
                      }`}
                      placeholder="How can we help you?"
                    />
                    {formErrors.subject && (
                      <p className="text-red-500 text-sm mt-1">{formErrors.subject}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1F2937] mb-2">
                    Message *
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => handleInputChange("message", e.target.value)}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[#E53E5A] focus:border-[#E53E5A] transition-colors min-h-32 ${
                      formErrors.message ? "border-red-500" : "border-gray-300"
                    }`}
                    placeholder="Tell us more about your inquiry..."
                  />
                  {formErrors.message && (
                    <p className="text-red-500 text-sm mt-1">{formErrors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#E53E5A] hover:bg-[#d63451] text-white py-4 px-8 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-[#1F2937] mb-6">Get in Touch</h2>
                <p className="text-[#6B7280] mb-8">
                  Visit our boutique for a personalized shopping experience or reach out to us through any of the following channels.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-[#E53E5A] p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-1">Visit Our Store</h3>
                    <p className="text-[#6B7280]">
                      123 Fashion Street, Karol Bagh<br />
                      New Delhi - 110005, India
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E53E5A] p-3 rounded-full">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-1">Call Us</h3>
                    <p className="text-[#6B7280]">
                      +91 98765 43210<br />
                      +91 87654 32109
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E53E5A] p-3 rounded-full">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-1">Email Us</h3>
                    <p className="text-[#6B7280]">
                      info@geetacollection.com<br />
                      orders@geetacollection.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-[#E53E5A] p-3 rounded-full">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#1F2937] mb-1">Business Hours</h3>
                    <p className="text-[#6B7280]">
                      Monday - Saturday: 10:00 AM - 8:00 PM<br />
                      Sunday: 11:00 AM - 7:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <h3 className="font-semibold text-[#1F2937] mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-[#E53E5A] p-3 rounded-full text-white hover:bg-[#d63451] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#E53E5A] p-3 rounded-full text-white hover:bg-[#d63451] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="#"
                    className="bg-[#E53E5A] p-3 rounded-full text-white hover:bg-[#d63451] transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Store Location */}
      <section className="py-20 bg-[#FDF2F8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Find Our Store</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Located in the heart of Karol Bagh, our boutique offers a premium shopping experience with personalized styling services.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-[#1F2937] mb-6">Visit Us Today</h3>
              <div className="space-y-4">
                <p className="text-[#6B7280]">
                  Experience our complete collection of traditional and contemporary Indian wear. Our experienced stylists are here to help you find the perfect outfit for any occasion.
                </p>
                <ul className="space-y-2 text-[#6B7280]">
                  <li>• Free styling consultation</li>
                  <li>• In-house alteration services</li>
                  <li>• Custom design options</li>
                  <li>• Bridal appointment services</li>
                </ul>
              </div>
            </div>

            <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-[#E53E5A] mx-auto mb-4" />
                <p className="text-[#6B7280]">Interactive Map</p>
                <p className="text-sm text-[#6B7280]">123 Fashion Street, Karol Bagh</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Booking */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Book an Appointment</h2>
              <p className="text-[#6B7280]">
                Schedule a personalized consultation for bridal wear, custom designs, or styling services.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-[#E53E5A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Bridal Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B7280] mb-6">
                    Complete bridal styling session with our expert designers for your special day.
                  </p>
                  <Button className="w-full bg-[#E53E5A] hover:bg-[#d63451] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Now
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-[#E53E5A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageSquare className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Custom Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B7280] mb-6">
                    Create bespoke outfits tailored to your preferences and measurements.
                  </p>
                  <Button className="w-full bg-[#E53E5A] hover:bg-[#d63451] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule
                  </Button>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="bg-[#E53E5A] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Personal Styling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B7280] mb-6">
                    One-on-one styling session to curate the perfect wardrobe for you.
                  </p>
                  <Button className="w-full bg-[#E53E5A] hover:bg-[#d63451] text-white">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Session
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[#FDF2F8]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F2937] mb-4">Frequently Asked Questions</h2>
            <p className="text-[#6B7280] max-w-2xl mx-auto">
              Find answers to common questions about our services, policies, and products.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {faqItems.map((faq, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-[#1F2937]">{faq.question}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[#6B7280]">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[#6B7280] mb-4">
              Didn't find what you were looking for?
            </p>
            <Button className="bg-[#E53E5A] hover:bg-[#d63451] text-white px-8 py-3">
              <MessageSquare className="w-5 h-5 mr-2" />
              Contact Support
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}