import axios from 'axios';

// This is where you would add your Rapid API key
const RAPID_API_KEY = "8f3b71303fmsh966a231dbaa8ebap123038jsned6cf3669a65"; // Replace with your actual API key

// Base URL for Spoonacular API through RapidAPI
const api = axios.create({
  baseURL: 'https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com',
  headers: {
    'X-RapidAPI-Key': RAPID_API_KEY,
    'X-RapidAPI-Host': 'spoonacular-recipe-food-nutrition-v1.p.rapidapi.com'
  }
});

export interface Recipe {
  id: number;
  title: string;
  image: string;
  imageType: string;
  usedIngredientCount: number;
  missedIngredientCount: number;
  missedIngredients: any[];
  usedIngredients: any[];
  unusedIngredients: any[];
  likes: number;
  readyInMinutes?: number;
  servings?: number;
  sourceUrl?: string;
}

export interface RecipeDetail {
  id: number;
  title: string;
  image: string;
  servings: number;
  readyInMinutes: number;
  sourceName: string;
  sourceUrl: string;
  spoonacularScore: number;
  healthScore: number;
  pricePerServing: number;
  cheap: boolean;
  creditsText: string;
  dairyFree: boolean;
  gaps: string;
  glutenFree: boolean;
  instructions: string;
  ketogenic: boolean;
  lowFodmap: boolean;
  occasions: string[];
  sustainable: boolean;
  vegan: boolean;
  vegetarian: boolean;
  veryHealthy: boolean;
  veryPopular: boolean;
  whole30: boolean;
  weightWatcherSmartPoints: number;
  dishTypes: string[];
  extendedIngredients: any[];
  summary: string;
  analyzedInstructions: {
    name: string;
    steps: {
      number: number;
      step: string;
      ingredients: any[];
      equipment: any[];
    }[];
  }[];
}

export const searchRecipesByIngredients = async (ingredients: string, number: number = 12): Promise<Recipe[]> => {
  try {
    const response = await api.get('/recipes/findByIngredients', {
      params: {
        ingredients,
        number,
        ranking: 1,
        ignorePantry: true
      }
    });
    return response.data;
  } catch (error) {
    // Avoid logging the full error object which may contain non-cloneable properties
    console.error('Error searching recipes:', error instanceof Error ? error.message : 'Unknown error');
    // For demo purposes, return mock data if API call fails
    return getMockRecipes();
  }
};

export const getRecipeInformation = async (id: number): Promise<RecipeDetail> => {
  try {
    const response = await api.get(`/recipes/${id}/information`, {
      params: {
        includeNutrition: false
      }
    });
    return response.data;
  } catch (error) {
    // Avoid logging the full error object which may contain non-cloneable properties
    console.error('Error getting recipe details:', error instanceof Error ? error.message : 'Unknown error');
    // For demo purposes, return mock data if API call fails
    return getMockRecipeDetail(id);
  }
};

// Mock data for demonstration purposes
const getMockRecipes = (): Recipe[] => {
  return [
    {
      id: 1,
      title: "Chicken Tikka Masala",
      image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      imageType: "jpg",
      usedIngredientCount: 3,
      missedIngredientCount: 2,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 1200,
      readyInMinutes: 45,
      servings: 4
    },
    {
      id: 2,
      title: "Vegetable Stir Fry",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageType: "jpg",
      usedIngredientCount: 5,
      missedIngredientCount: 1,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 850,
      readyInMinutes: 30,
      servings: 2
    },
    {
      id: 3,
      title: "Pasta Carbonara",
      image: "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageType: "jpg",
      usedIngredientCount: 4,
      missedIngredientCount: 3,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 1050,
      readyInMinutes: 25,
      servings: 3
    },
    {
      id: 4,
      title: "Chocolate Chip Cookies",
      image: "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageType: "jpg",
      usedIngredientCount: 6,
      missedIngredientCount: 0,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 1500,
      readyInMinutes: 40,
      servings: 24
    },
    {
      id: 5,
      title: "Beef Tacos",
      image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      imageType: "jpg",
      usedIngredientCount: 3,
      missedIngredientCount: 4,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 980,
      readyInMinutes: 35,
      servings: 4
    },
    {
      id: 6,
      title: "Greek Salad",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
      imageType: "jpg",
      usedIngredientCount: 5,
      missedIngredientCount: 1,
      missedIngredients: [],
      usedIngredients: [],
      unusedIngredients: [],
      likes: 750,
      readyInMinutes: 15,
      servings: 2
    }
  ];
};

const getMockRecipeDetail = (id: number): RecipeDetail => {
  return {
    id: id,
    title: "Chicken Tikka Masala",
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80",
    servings: 4,
    readyInMinutes: 45,
    sourceName: "LOL Foods",
    sourceUrl: "#",
    spoonacularScore: 92,
    healthScore: 85,
    pricePerServing: 243.5,
    cheap: false,
    creditsText: "LOL Foods",
    dairyFree: false,
    gaps: "no",
    glutenFree: true,
    instructions: "1. Marinate chicken. 2. Cook sauce. 3. Combine and simmer.",
    ketogenic: false,
    lowFodmap: false,
    occasions: ["dinner", "indian cuisine"],
    sustainable: false,
    vegan: false,
    vegetarian: false,
    veryHealthy: true,
    veryPopular: true,
    whole30: false,
    weightWatcherSmartPoints: 12,
    dishTypes: ["lunch", "main course", "main dish", "dinner"],
    extendedIngredients: [
      {
        id: 1001,
        name: "chicken",
        amount: 1.5,
        unit: "pounds",
        image: "chicken.jpg"
      },
      {
        id: 1002,
        name: "yogurt",
        amount: 1,
        unit: "cup",
        image: "yogurt.jpg"
      },
      {
        id: 1003,
        name: "tomato sauce",
        amount: 2,
        unit: "cups",
        image: "tomato-sauce.jpg"
      },
      {
        id: 1004,
        name: "garam masala",
        amount: 2,
        unit: "tablespoons",
        image: "garam-masala.jpg"
      },
      {
        id: 1005,
        name: "heavy cream",
        amount: 1,
        unit: "cup",
        image: "heavy-cream.jpg"
      },
      {
        id: 1006,
        name: "rice",
        amount: 2,
        unit: "cups",
        image: "rice.jpg"
      }
    ],
    summary: "Chicken Tikka Masala is a delicious Indian dish featuring marinated chicken in a creamy tomato sauce. It's perfect for a family dinner and pairs well with rice or naan bread.",
    analyzedInstructions: [
      {
        name: "",
        steps: [
          {
            number: 1,
            step: "In a large bowl, combine yogurt, lemon juice, garam masala, cumin, and salt. Add chicken pieces and marinate for at least 1 hour, preferably overnight.",
            ingredients: ["yogurt", "lemon juice", "garam masala", "cumin", "chicken"],
            equipment: ["bowl"]
          },
          {
            number: 2,
            step: "Preheat oven to 500°F (260°C). Thread chicken onto skewers and place on a baking sheet. Bake for 12-15 minutes until slightly charred and cooked through.",
            ingredients: ["chicken"],
            equipment: ["oven", "skewers", "baking sheet"]
          },
          {
            number: 3,
            step: "Meanwhile, heat oil in a large pan over medium heat. Add onion and cook until soft, about 5 minutes. Add garlic and ginger, cook for 1 minute until fragrant.",
            ingredients: ["oil", "onion", "garlic", "ginger"],
            equipment: ["pan"]
          },
          {
            number: 4,
            step: "Add tomato sauce, garam masala, paprika, and sugar. Simmer for 10-15 minutes until sauce thickens.",
            ingredients: ["tomato sauce", "garam masala", "paprika", "sugar"],
            equipment: []
          },
          {
            number: 5,
            step: "Stir in heavy cream and cooked chicken pieces. Simmer for another 5 minutes until heated through.",
            ingredients: ["heavy cream", "chicken"],
            equipment: []
          },
          {
            number: 6,
            step: "Garnish with fresh cilantro and serve with rice or naan bread.",
            ingredients: ["cilantro", "rice"],
            equipment: []
          }
        ]
      }
    ]
  };
};