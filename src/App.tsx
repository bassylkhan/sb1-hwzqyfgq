import React, { useState } from 'react';
import Layout from './components/Layout';
import { capitals } from './data/capitals';
import { attractions } from './data/attractions';
import { funFacts } from './data/funFacts';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <Layout 
      capitals={capitals}
      attractions={attractions}
      funFacts={funFacts}
      isDarkMode={isDarkMode}
      toggleTheme={toggleTheme}
    />
  );
}

export default App;