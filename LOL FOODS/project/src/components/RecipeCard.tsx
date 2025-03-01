import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, ChefHat } from 'lucide-react';
import { motion } from 'framer-motion';

interface RecipeCardProps {
  id: string;
  title: string;
  image: string;
  readyInMinutes?: number;
  servings?: number;
  difficulty?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  image,
  readyInMinutes = 30,
  servings = 4,
  difficulty = 'Easy',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="card group h-full"
    >
      <Link to={`/recipe/${id}`} className="block h-full">
        <div className="relative overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
            <span className="text-white p-4 font-medium">View Recipe</span>
          </div>
        </div>
        
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">{title}</h3>
        
        <div className="flex flex-wrap gap-3 text-sm text-gray-300">
          <div className="flex items-center">
            <Clock size={16} className="mr-1 text-secondary" />
            <span>{readyInMinutes} min</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1 text-secondary" />
            <span>{servings} servings</span>
          </div>
          <div className="flex items-center">
            <ChefHat size={16} className="mr-1 text-secondary" />
            <span>{difficulty}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default RecipeCard;