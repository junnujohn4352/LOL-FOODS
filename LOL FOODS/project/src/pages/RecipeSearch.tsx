import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Loader2 } from 'lucide-react';
import SearchBar from '../components/SearchBar';
import RecipeCard from '../components/RecipeCard';
import { searchRecipesByIngredients, Recipe } from '../api/recipeApi';

const RecipeSearch: React.FC = () => {
  const location = useLocation();
  const [ingredients, setIngredients] = useState<string>('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [searched, setSearched] = useState<boolean>(false);

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const ingredientsParam = params.get('ingredients');
    
    if (ingredientsParam) {
      setIngredients(ingredientsParam);
      handleSearch(ingredientsParam);
    }
  }, [location.search]);

  const handleSearch = async (searchIngredients: string) => {
    setLoading(true);
    setSearched(true);
    
    try {
      const results = await searchRecipesByIngredients(searchIngredients);
      setRecipes(results);
    } catch (error) {
      console.error('Error searching recipes:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h1 className="logo-font text-4xl md:text-5xl mb-6">
            Find <span className="text-primary">Recipes</span> With Your <span className="text-secondary">Ingredients</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            Enter the ingredients you have, separated by commas, and we'll show you delicious recipes you can make.
          </p>
          <SearchBar onSearch={handleSearch} placeholder="e.g., chicken, rice, tomatoes, onions" />
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center py-20">
            <Loader2 className="w-12 h-12 text-primary animate-spin" />
            <span className="ml-4 text-xl text-white">Finding delicious recipes...</span>
          </div>
        ) : (
          <>
            {searched && (
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">
                  {recipes.length > 0 
                    ? `Found ${recipes.length} recipes with your ingredients` 
                    : 'No recipes found with those ingredients'}
                </h2>
                {recipes.length > 0 && (
                  <p className="text-gray-300">
                    Here are some delicious recipes you can make with {ingredients}
                  </p>
                )}
              </div>
            )}

            {recipes.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {recipes.map((recipe) => (
                  <RecipeCard
                    key={recipe.id}
                    id={recipe.id.toString()}
                    title={recipe.title}
                    image={recipe.image}
                    readyInMinutes={recipe.readyInMinutes || 30}
                    servings={recipe.servings || 4}
                    difficulty={recipe.missedIngredientCount > 3 ? 'Advanced' : recipe.missedIngredientCount > 1 ? 'Intermediate' : 'Easy'}
                  />
                ))}
              </div>
            ) : searched && (
              <div className="text-center py-12">
                <p className="text-xl text-gray-300 mb-6">
                  Try adding more common ingredients or using fewer specific ones.
                </p>
                <p className="text-lg text-gray-400">
                  Popular ingredients to try: chicken, beef, pasta, rice, potatoes, tomatoes, onions
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default RecipeSearch;