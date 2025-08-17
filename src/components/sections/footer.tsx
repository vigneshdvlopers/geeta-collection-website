import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#2D3B4E] text-white">
            <div className="max-w-[1200px] mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Brand & Social */}
                    <div>
                        <h3 className="text-2xl font-bold text-primary">Geeta Collection</h3>
                        <p className="mt-4 text-gray-300 text-sm leading-relaxed">
                            Discover the finest collection of traditional and contemporary clothing that celebrates elegance and style.
                        </p>
                        <div className="flex space-x-4 mt-6">
                            <Link href="#" aria-label="Facebook link">
                                <Facebook className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            </Link>
                            <Link href="#" aria-label="Instagram link">
                                <Instagram className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            </Link>
                            <Link href="#" aria-label="Twitter link">
                                <Twitter className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
                            </Link>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="font-semibold text-base text-white">Quick Links</h4>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Shop Now</Link></li>
                            <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                            <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Contact</Link></li>
                        </ul>
                    </div>
                    
                    {/* Column 3: Categories */}
                    <div>
                        <h4 className="font-semibold text-base text-white">Categories</h4>
                        <ul className="mt-4 space-y-3">
                            <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Sarees</Link></li>
                            <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Suits</Link></li>
                            <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Lehengas</Link></li>
                            <li><Link href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Kurtis</Link></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="font-semibold text-base text-white">Contact Info</h4>
                        <ul className="mt-4 space-y-3">
                            <li className="flex items-center">
                                <Phone className="w-4 h-4 mr-3 text-gray-300 flex-shrink-0" />
                                <span className="text-sm text-gray-300">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="w-4 h-4 mr-3 text-gray-300 flex-shrink-0" />
                                <span className="text-sm text-gray-300">info@geetacollection.com</span>
                            </li>
                            <li className="flex items-center">
                                <MapPin className="w-4 h-4 mr-3 text-gray-300 flex-shrink-0" />
                                <span className="text-sm text-gray-300">Mumbai, Maharashtra</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-16 pt-6 flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-gray-400 text-center sm:text-left mb-4 sm:mb-0">
                        © 2024 Geeta Collection. All rights reserved.
                    </p>
                    <div>
                        <a href="https://readdy.ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-100 text-gray-700 rounded-full py-1.5 px-3 shadow hover:bg-gray-200 transition-colors">
                            <span className="text-xs mr-2 font-medium">Designed by</span>
                            <Image src="https://public.readdy.ai/gen_page/watermark.png" alt="Readdy Logo" width={60} height={16} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;