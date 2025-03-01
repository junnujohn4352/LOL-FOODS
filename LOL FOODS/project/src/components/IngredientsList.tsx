import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'framer-motion';

interface IngredientsListProps {
  ingredients: {
    name: string;
    amount: string;
    image?: string;
  }[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {ingredients.map((ingredient, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex items-center p-3 bg-white/5 rounded-lg border border-white/10"
        >
          {ingredient.image ? (
            <img
              src={`https://spoonacular.com/cdn/ingredients_100x100/${ingredient.image}`}
              alt={ingredient.name}
              className="w-12 h-12 object-cover rounded-full mr-3"
            />
          ) : (
            <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-3">
              <Check className="w-6 h-6 text-secondary" />
            </div>
          )}
          <div>
            <p className="text-white font-medium">{ingredient.name}</p>
            <p className="text-gray-400 text-sm">{ingredient.amount}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default IngredientsList;