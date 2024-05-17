import React from 'react';
import cocktail from '../../img/Cocktail_02.jpg';
import material from '../../img/logo.png';
import food from '../../img/cocktail.jpg';
import make from '../../img/make.jpg';

const links = [
    { name: '칵테일', imageUrl: cocktail, link: '/ViewPage' },
    { name: '재료', imageUrl: material, link: '/Ingredient' },
    { name: '안주', imageUrl: food, link: '/TodayCocktail' },
    { name: '제조법', imageUrl: make, link: '/craft/mensuration' }
  ];
  
  const CocktailLink = () => {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', maxWidth: '800px', margin: 'auto' }}>
        {links.map((link, index) => (
          <div key={index} style={{ flex: '1 0 50%', maxWidth: '50%', cursor: 'pointer', boxSizing: 'border-box', padding: '10px' }}>
            <a href={link.link} target="_blank" rel="noopener noreferrer">
              <img src={link.imageUrl} alt={link.name} style={{ width: '100%', height: 'auto' }} />
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  export default CocktailLink;
