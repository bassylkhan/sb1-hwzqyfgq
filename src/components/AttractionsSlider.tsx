import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Attraction } from '../data/attractions';

interface AttractionsSliderProps {
  attractions: Attraction[];
  isDarkMode: boolean;
}

const AttractionsSlider: React.FC<AttractionsSliderProps> = ({ attractions, isDarkMode }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 15000);

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleNext = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % attractions.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + attractions.length) % attractions.length);
    
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500);
  };

  const currentAttraction = attractions[currentIndex];

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h2 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
        World Attractions
      </h2>
      
      <div className="relative w-full overflow-hidden rounded-xl shadow-lg">
        <div 
          className={`relative w-full aspect-[4/3] transition-opacity duration-500 ${isTransitioning ? 'opacity-80' : 'opacity-100'}`}
        >
          <img 
            src={currentAttraction.imageUrl} 
            alt={currentAttraction.name}
            className="w-full h-full object-cover"
          />
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
            <h3 className="text-xl font-bold">{currentAttraction.name}</h3>
            <p className="text-sm">{currentAttraction.location}</p>
          </div>
        </div>
        
        <div className={`p-4 ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'}`}>
          <p>{currentAttraction.description}</p>
        </div>
        
        <button 
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white/100 transition-colors duration-200"
          onClick={handlePrevious}
          aria-label="Previous attraction"
        >
          <ChevronLeft className="text-gray-800" />
        </button>
        
        <button 
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 rounded-full bg-white/80 hover:bg-white/100 transition-colors duration-200"
          onClick={handleNext}
          aria-label="Next attraction"
        >
          <ChevronRight className="text-gray-800" />
        </button>
        
        <div className="absolute bottom-16 left-0 right-0 flex justify-center space-x-2">
          {attractions.map((_, index) => (
            <button 
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AttractionsSlider;