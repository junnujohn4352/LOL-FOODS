import React from 'react';
import { Link } from 'react-router-dom';
import { Utensils, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background/90 backdrop-blur-md border-t border-white/10 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <Utensils className="text-primary w-8 h-8" />
              <span className="logo-font text-2xl tracking-wider text-primary">
                LOL <span className="text-secondary">FOODS</span>
              </span>
            </Link>
            <p className="mt-4 text-gray-400">
              Discover delicious recipes with ingredients you already have.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-secondary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/search" className="text-gray-400 hover:text-secondary transition-colors">
                  Search Recipes
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-secondary transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Breakfast
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Lunch
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Dinner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Desserts
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                  Vegetarian
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <p className="text-gray-400">
              LOL Groups Headquarters<br />
              123 Culinary Street<br />
              Foodie City, FC 12345<br />
              contact@lolfoods.com
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} LOL FOODS. All rights reserved.</p>
          <p className="mt-2">A LOL Groups Company. Created by P Janardhan Reddy.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;