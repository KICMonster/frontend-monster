import React, { useState, useEffect } from 'react';
import './App.css'; 
import TopNavBar from './component/TopNavBar';
import { useNavigate } from 'react-router-dom';
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
