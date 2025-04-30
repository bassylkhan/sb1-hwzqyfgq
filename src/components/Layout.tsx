import React from 'react';
import Header from './Header';
import FlashCard from './FlashCard';
import AttractionsSlider from './AttractionsSlider';
import FunFacts from './FunFacts';
import QuizSection from './QuizSection';
import { Capital } from '../data/capitals';
import { Attraction } from '../data/attractions';
import { FunFact } from '../data/funFacts';

interface LayoutProps {
  capitals: Capital[];
  attractions: Attraction[];
  funFacts: FunFact[];
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ 
  capitals, 
  attractions, 
  funFacts, 
  isDarkMode,
  toggleTheme 
}) => {
  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <Header onThemeToggle={toggleTheme} />
      
      <main className="flex-grow pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 my-8">
            <div className="flex flex-col items-center">
              <FlashCard capitals={capitals} isDarkMode={isDarkMode} />
            </div>
            
            <div className="flex flex-col items-center">
              <AttractionsSlider attractions={attractions} isDarkMode={isDarkMode} />
            </div>
          </div>
          
          <div className="my-12">
            <QuizSection />
          </div>
        </div>
      </main>
      
      <footer className="mt-auto">
        <FunFacts facts={funFacts} isDarkMode={isDarkMode} />
      </footer>
    </div>
  );
};

export default Layout;