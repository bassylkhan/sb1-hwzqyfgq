import React, { useState, useEffect, useRef } from 'react';
import { FunFact } from '../data/funFacts';

interface FunFactsProps {
  facts: FunFact[];
  isDarkMode: boolean;
}

const FunFacts: React.FC<FunFactsProps> = ({ facts, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const timerId = useRef<number | null>(null);

  const rotateFacts = () => {
    setIsVisible(false);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facts.length);
      setIsVisible(true);
    }, 500);
  };

  useEffect(() => {
    const initialDelay = setTimeout(() => {
      timerId.current = window.setInterval(rotateFacts, 30000);
    }, 2000);

    return () => {
      if (initialDelay) clearTimeout(initialDelay);
      if (timerId.current) clearInterval(timerId.current);
    };
  }, []);

  return (
    <div className={`w-full py-6 ${isDarkMode ? 'bg-gray-800' : 'bg-blue-50'}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h2 className={`text-xl font-bold mb-3 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Fun Geography Fact
          </h2>
          
          <div 
            className={`min-h-16 flex items-center transition-opacity duration-500 ${
              isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <p className={`text-center text-lg ${isDarkMode ? 'text-blue-200' : 'text-blue-700'}`}>
              {facts[currentIndex].fact}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FunFacts;