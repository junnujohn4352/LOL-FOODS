import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, Users, Globe, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-background to-background/80">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="logo-font text-5xl md:text-6xl mb-6">
              About <span className="text-primary">LOL</span> <span className="text-secondary">FOODS</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Revolutionizing the way you cook with ingredients you already have
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 bg-background/90">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 text-white">Our Story</h2>
              <p className="text-gray-300 mb-4">
                LOL FOODS was founded in 2023 by P Janardhan Reddy with a simple mission: to help people create delicious meals with ingredients they already have in their kitchen.
              </p>
              <p className="text-gray-300 mb-4">
                As part of LOL Groups, we're committed to reducing food waste and making cooking more accessible and enjoyable for everyone. Our innovative recipe search technology allows users to input the ingredients they have on hand and discover amazing recipes they can make right away.
              </p>
              <p className="text-gray-300">
                What started as a small project has grown into a platform loved by home cooks around the world, helping them save money, reduce waste, and enjoy the creative process of cooking.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-xl border border-white/10"
            >
              <h3 className="text-2xl font-bold mb-6 text-white">Company Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Founded By</h4>
                    <p className="text-gray-300">P Janardhan Reddy</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Utensils className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Company Name</h4>
                    <p className="text-gray-300">LOL Groups</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Globe className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Headquarters</h4>
                    <p className="text-gray-300">123 Culinary Street, Foodie City, FC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-white mb-1">Our Mission</h4>
                    <p className="text-gray-300">To reduce food waste and make cooking accessible and enjoyable for everyone.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-b from-background/90 to-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Our Values</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              At LOL FOODS, we're guided by these core principles in everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Sustainability",
                description: "We're committed to reducing food waste by helping people use what they already have."
              },
              {
                title: "Innovation",
                description: "We continuously improve our recipe algorithms to provide the best possible suggestions."
              },
              {
                title: "Accessibility",
                description: "We believe good food should be accessible to everyone, regardless of cooking experience."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card h-full"
              >
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-white">Meet Our Founder</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              The visionary behind LOL FOODS
            </p>
          </motion.div>

          <div className="max-w-md mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="card text-center"
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80" 
                  alt="P Janardhan Reddy" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-white mb-1">P Janardhan Reddy</h3>
              <p className="text-secondary mb-4">Founder & CEO</p>
              <p className="text-gray-300">
                With a passion for cooking and technology, Janardhan created LOL FOODS to solve the common problem of "what to cook with what I have." His vision has transformed how people approach cooking at home.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;