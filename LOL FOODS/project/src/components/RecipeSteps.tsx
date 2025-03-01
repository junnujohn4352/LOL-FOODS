import React from 'react';
import { motion } from 'framer-motion';

interface RecipeStepsProps {
  steps: {
    number: number;
    step: string;
    ingredients?: string[];
    equipment?: string[];
  }[];
}

const RecipeSteps: React.FC<RecipeStepsProps> = ({ steps }) => {
  return (
    <div className="space-y-8">
      {steps.map((step) => (
        <motion.div
          key={step.number}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="flex">
            <div className="flex-shrink-0 mr-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary text-white font-bold text-xl">
                {step.number}
              </div>
            </div>
            <div className="card flex-grow">
              <p className="text-white">{step.step}</p>
              
              {(step.ingredients && step.ingredients.length > 0) && (
                <div className="mt-4">
                  <h4 className="text-secondary font-medium mb-2">Ingredients for this step:</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              
              {(step.equipment && step.equipment.length > 0) && (
                <div className="mt-4">
                  <h4 className="text-secondary font-medium mb-2">Equipment needed:</h4>
                  <div className="flex flex-wrap gap-2">
                    {step.equipment.map((item, idx) => (
                      <span key={idx} className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default RecipeSteps;