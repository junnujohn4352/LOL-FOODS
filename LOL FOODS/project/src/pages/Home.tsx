import React, { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChefHat, Search, Clock, Award } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

// Lazy load the 3D scene for better performance
const Scene3D = lazy(() => import('../components/3d/Scene3D'));

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleSearch = (ingredients: string) => {
    navigate(`/search?ingredients=${encodeURIComponent(ingredients)}`);
  };

  const features = [
    {
      icon: <Search className="w-8 h-8 text-primary" />,
      title: "Find Recipes by Ingredients",
      description: "Enter the ingredients you have, and we'll show you delicious recipes you can make."
    },
    {
      icon: <ChefHat className="w-8 h-8 text-primary" />,
      title: "Step-by-Step Instructions",
      description: "Follow our detailed cooking instructions with images for each step."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Quick & Easy Recipes",
      description: "Find recipes that fit your schedule, from 15-minute meals to slow-cooked dishes."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Curated Collections",
      description: "Explore our handpicked recipe collections for every occasion and taste."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-background via-background/90 to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="logo-font text-5xl md:text-7xl mb-6 leading-tight">
                <span className="gradient-text">Discover Delicious</span> <br />
                Recipes With What <br />
                You Already Have
              </h1>
              
              <p className="text-lg text-gray-300 mb-8">
                Enter your ingredients and let LOL FOODS find the perfect recipe for you. 
                No more wasting food or wondering what to cook!
              </p>
              
              <div className="mb-8">
                <SearchBar onSearch={handleSearch} />
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Link to="/search" className="btn-primary">
                  Find Recipes
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn More
                </Link>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hidden lg:block"
            >
              <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading 3D Scene...</div>}>
                <Scene3D />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="logo-font text-4xl md:text-5xl mb-4">
              <span className="text-primary">How</span> <span className="text-secondary">It</span> <span className="text-accent">Works</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              LOL FOODS makes cooking easy and fun with these amazing features
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card text-center h-full"
              >
                <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/10">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="logo-font text-4xl md:text-5xl mb-6">
              Ready to <span className="text-primary">Cook</span> Something <span className="text-secondary">Amazing</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-8">
              Enter your ingredients and discover delicious recipes in seconds.
              No more food waste, no more recipe hunting!
            </p>
            <Link to="/search" className="btn-primary">
              Find Recipes Now
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;