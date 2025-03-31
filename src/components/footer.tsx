import { Mail, Phone, MapPin, Send } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand & About */}
        <div>
          <h2 className="text-2xl font-bold text-white">Housify</h2>
          <p className="mt-4 text-sm">
            Helping you find the perfect home with ease. Trust us for a seamless and rewarding real estate experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Quick Links</h3>
          <ul className="mt-4 space-y-2">
            <li><a href="#home" className="hover:text-white transition">Home</a></li>
            <li><a href="#properties" className="hover:text-white transition">Properties</a></li>
            <li><a href="#about" className="hover:text-white transition">About Us</a></li>
            <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact & Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Contact Us</h3>
          <div className="mt-4 space-y-2">
            <p className="flex items-center gap-2"><MapPin className="h-5 w-5" /> 123 Main Street, City</p>
            <p className="flex items-center gap-2"><Phone className="h-5 w-5" /> (123) 456-7890</p>
            <p className="flex items-center gap-2"><Mail className="h-5 w-5" /> support@housify.com</p>
          </div>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-white transition">< FaFacebook/></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      {/* Newsletter Subscription */}
      <div className="max-w-7xl mx-auto mt-10 border-t border-gray-700 pt-6 text-center">
        <h3 className="text-lg font-semibold text-white">Subscribe to Our Newsletter</h3>
        <div className="flex justify-center mt-4">
          <div className="relative w-full max-w-md">
            <Input type="email" placeholder="Enter your email" className="pr-12" />
            <Button className="absolute right-0 top-0 h-full px-4 bg-primary text-white">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6 text-gray-500">
        &copy; {new Date().getFullYear()} Housify. All rights reserved.
      </div>
    </footer>
  );
};
