import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Users, ChefHat, ArrowLeft, Heart, Printer, Share2, Loader2 } from 'lucide-react';
import IngredientsList from '../components/IngredientsList';
import RecipeSteps from '../components/RecipeSteps';
import { getRecipeInformation, RecipeDetail as RecipeDetailType } from '../api/recipeApi';

const RecipeDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [recipe, setRecipe] = useState<RecipeDetailType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<'ingredients' | 'instructions'>('ingredients');

  useEffect(() => {
    const fetchRecipe = async () => {
      if (id) {
        try {
          const data = await getRecipeInformation(parseInt(id));
          setRecipe(data);
        } catch (error) {
          console.error('Error fetching recipe:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchRecipe();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <span className="ml-4 text-xl text-white">Loading recipe...</span>
      </div>
    );
  }

  if (!recipe) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="text-center">
          <p className="text-2xl text-white mb-4">Recipe not found</p>
          <Link to="/search" className="btn-primary">
            Back to Search
          </Link>
        </div>
      </div>
    );
  }

  const ingredients = recipe.extendedIngredients.map(ingredient => ({
    name: ingredient.name,
    amount: `${ingredient.amount} ${ingredient.unit}`,
    image: ingredient.image
  }));

  const steps = recipe.analyzedInstructions[0]?.steps.map(step => ({
    number: step.number,
    step: step.step,
    ingredients: step.ingredients.map(ing => ing.name),
    equipment: step.equipment.map(eq => eq.name)
  })) || [];

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/search" className="inline-flex items-center text-secondary hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            <span>Back to Search</span>
          </Link>
        </div>

        {/* Recipe Header */}
        <div className="mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{recipe.title}</h1>
              
              <div className="flex flex-wrap gap-6 mb-6">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-gray-300">{recipe.readyInMinutes} minutes</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-gray-300">{recipe.servings} servings</span>
                </div>
                <div className="flex items-center">
                  <ChefHat className="w-5 h-5 text-secondary mr-2" />
                  <span className="text-gray-300">
                    {recipe.veryHealthy ? 'Healthy' : recipe.cheap ? 'Budget-friendly' : 'Regular'}
                  </span>
                </div>
              </div>
              
              <div className="mb-6" dangerouslySetInnerHTML={{ __html: recipe.summary }} />
              
              <div className="flex space-x-4">
                <button className="flex items-center text-white bg-primary/20 hover:bg-primary/30 transition-colors px-4 py-2 rounded-full">
                  <Heart className="w-5 h-5 mr-2" />
                  <span>Save</span>
                </button>
                <button className="flex items-center text-white bg-secondary/20 hover:bg-secondary/30 transition-colors px-4 py-2 rounded-full">
                  <Printer className="w-5 h-5 mr-2" />
                  <span>Print</span>
                </button>
                <button className="flex items-center text-white bg-accent/20 hover:bg-accent/30 transition-colors px-4 py-2 rounded-full">
                  <Share2 className="w-5 h-5 mr-2" />
                  <span>Share</span>
                </button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-xl overflow-hidden shadow-2xl"
            >
              <img 
                src={recipe.image} 
                alt={recipe.title} 
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </div>
        
        {/* Tabs */}
        <div className="mb-8 border-b border-white/10">
          <div className="flex space-x-8">
            <button
              className={`pb-4 px-2 font-medium text-lg transition-colors ${
                activeTab === 'ingredients' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('ingredients')}
            >
              Ingredients
            </button>
            <button
              className={`pb-4 px-2 font-medium text-lg transition-colors ${
                activeTab === 'instructions' 
                  ? 'text-primary border-b-2 border-primary' 
                  : 'text-gray-400 hover:text-white'
              }`}
              onClick={() => setActiveTab('instructions')}
            >
              Instructions
            </button>
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mb-12">
          {activeTab === 'ingredients' ? (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Ingredients for {recipe.servings} servings</h2>
              <IngredientsList ingredients={ingredients} />
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Step-by-Step Instructions</h2>
              <RecipeSteps steps={steps} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;