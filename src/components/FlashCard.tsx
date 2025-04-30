import React, { useState, useEffect, useMemo } from 'react';
import { ChevronLeft, ChevronRight, RotateCw } from 'lucide-react';
import { Capital } from '../data/capitals';

interface FlashCardProps {
  capitals: Capital[];
  isDarkMode: boolean;
}

const FlashCard: React.FC<FlashCardProps> = ({ capitals, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [selectedContinent, setSelectedContinent] = useState<string>("All");
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState<NodeJS.Timeout | null>(null);

  const filteredCapitals = useMemo(() => {
    if (selectedContinent === "All") return capitals;
    return capitals.filter(capital => capital.continent === selectedContinent);
  }, [capitals, selectedContinent]);

  const continents = ["All", "Europe", "Asia", "Africa", "North America", "South America", "Oceania"];

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredCapitals.length);
      setIsAnimating(false);
    }, 300);
  };

  const handlePrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setIsFlipped(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredCapitals.length) % filteredCapitals.length);
      setIsAnimating(false);
    }, 300);
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    
    // Clear existing timer
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
    }
    
    // If card is being flipped to show answer, set timer for auto-advance
    if (!isFlipped) {
      const timer = setTimeout(() => {
        handleNext();
      }, 3000);
      setAutoAdvanceTimer(timer);
    }
  };

  const handleContinentChange = (continent: string) => {
    setSelectedContinent(continent);
    setCurrentIndex(0);
    setIsFlipped(false);
    if (autoAdvanceTimer) {
      clearTimeout(autoAdvanceTimer);
    }
  };

  useEffect(() => {
    return () => {
      if (autoAdvanceTimer) {
        clearTimeout(autoAdvanceTimer);
      }
    };
  }, []);

  const currentCapital = filteredCapitals[currentIndex];

  if (!currentCapital) return null;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h2 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        Country Capitals
      </h2>

      <div className="flex flex-wrap gap-2 mb-6">
        {continents.map((continent) => (
          <button
            key={continent}
            onClick={() => handleContinentChange(continent)}
            className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 ${
              selectedContinent === continent
                ? isDarkMode
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-500 text-white'
                : isDarkMode
                ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {continent}
          </button>
        ))}
      </div>
      
      <div className="relative w-full max-w-sm perspective">
        <div 
          className={`relative preserve-3d transition-transform duration-300 ease-in-out ${isFlipped ? 'rotate-y-180' : ''}`}
          style={{ transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
        >
          {/* Front of card - Country */}
          <div 
            className={`backface-hidden absolute w-full rounded-xl shadow-lg p-6 flex flex-col items-center justify-center min-h-60 cursor-pointer
              ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}
            onClick={handleFlip}
          >
            <p className="text-lg mb-2">What is the capital of:</p>
            <h3 className="text-2xl font-bold text-center">{currentCapital.country}</h3>
            <p className="mt-4 text-sm text-center opacity-70">Click to reveal answer</p>
          </div>
          
          {/* Back of card - Capital */}
          <div 
            className={`backface-hidden absolute w-full rounded-xl shadow-lg p-6 flex flex-col items-center justify-center min-h-60 cursor-pointer rotate-y-180
              ${isDarkMode ? 'bg-gray-700 text-white' : 'bg-blue-50 text-gray-800'}`}
            onClick={handleFlip}
            style={{ transform: 'rotateY(180deg)' }}
          >
            <p className="text-lg mb-2">The capital of {currentCapital.country} is:</p>
            <h3 className="text-2xl font-bold text-center">{currentCapital.capital}</h3>
            <p className="mt-4 text-sm text-center opacity-70">Next card in 3 seconds...</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between items-center w-full max-w-sm mt-6">
        <button 
          onClick={handlePrevious}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-100 hover:bg-blue-200'} transition-colors duration-200`}
          aria-label="Previous card"
        >
          <ChevronLeft className={isDarkMode ? 'text-white' : 'text-blue-700'} />
        </button>
        
        <div className={`text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {currentIndex + 1} / {filteredCapitals.length}
        </div>
        
        <button 
          onClick={handleNext}
          className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-blue-100 hover:bg-blue-200'} transition-colors duration-200`}
          aria-label="Next card"
        >
          <ChevronRight className={isDarkMode ? 'text-white' : 'text-blue-700'} />
        </button>
      </div>
      
      <button
        onClick={handleFlip}
        className={`mt-4 flex items-center gap-2 px-4 py-2 rounded-lg 
          ${isDarkMode ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-500 hover:bg-blue-600'} text-white transition-colors duration-200`}
      >
        <RotateCw size={16} />
        Flip Card
      </button>
    </div>
  );
};

export default FlashCard;