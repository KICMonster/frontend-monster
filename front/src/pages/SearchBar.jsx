import React, { useState, useEffect } from 'react';
import '../component/mian/styles/main.css'; 

import CocktailLink from '../component/mian/CocktailLink';
import InteractiveImage from '../component/mian/InteractiveImage';
import ImageClicker from '../component/mian/ImageClicker';
import DynamicHeader from '../component/mian/DynamicHeader';

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');


  return (
    
    <div>
      
      <DynamicHeader />
      
      <ImageClicker />

      <InteractiveImage />

      <CocktailLink />
    </div>
  );
}

export default SearchBar;
