// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import './styles/Grid.css';

// function Grid() {
//   const [cocktails, setCocktails] = useState([]);

//   const fetchAllCocktails = async () => {
//     try {
//       const endpoint = 'https://localhost:9092/api/cocktail';                  
//       const response = await fetch(endpoint);
//       const data = await response.json();
//       setCocktails(data);
//     } catch (error) {
//       console.error('Error fetching cocktails:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAllCocktails();
//   }, []);

//   return (
//     <div className="slider-container">
//       <div className="slider-track">
//         {cocktails.concat(cocktails).map((cocktail, index) => (
//           <Link key={`${cocktail.id}-${index}`} to={`/cocktail/${cocktail.id}`} className="cocktail-link">
//             <div className="cocktail-item">
//               <div className="image-box">
//                 <img src={cocktail.imageUrl || 'default-image-url.jpg'} alt={cocktail.name} className="cocktail-image" />
//               </div>
//               <div className="cocktail-details">
//                 <p>{cocktail.name}</p>
//                 <p>{cocktail.ingredient1}</p>
//                 {/* 원하는 다른 설명도 추가할 수 있습니다 */}
//               </div>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Grid;


import React, { useState } from 'react';
import '../main/styles/Grid.css';
import RecommendedList from './RecommendedList';
import SideMenuMainPage from './SideMenuMainPage';
import { Link } from 'react-router-dom';

function Grid({ cocktails }) {
  // 칵테일 데이터가 존재하지 않는 경우 대비
  if (!cocktails || cocktails.length === 0) {
    return <div>No cocktails available.</div>;
  }

  // 칵테일 배열을 두 배로 연장하여 슬라이더에 연속된 느낌을 줄 수 있도록 설정
  const doubledCocktails = cocktails.concat(cocktails);

  return (
    <>
      <div className="container" style={{ display: 'flex' }}>
        <div className="home-container">
          <h1 className="font">당신을 위한 칵테일</h1>
          <div>한 잔은 이미 초라해진 나를 위하여 또 한잔은 너와 나의 영원했던 사랑을 위하여</div>
          <Link to={'/#'}>Get started</Link>
        </div>
      </div>
      <div className="slider-container">
        <div className="slider-track">
          {doubledCocktails.map((cocktail, index) => (
            <Link key={`${cocktail.id}-${index}`} to={`/cocktail/${cocktail.id}`} className="cocktail-link">
              <div className="cocktail-item">
                <div className="image-box">
                  <img src={cocktail.imageUrl || 'default-image-url.jpg'} alt={cocktail.name} className="cocktail-image" />
                </div>
                <div className="cocktail-details">
                  <p>{cocktail.name}</p>
                  <p>{cocktail.ingredient1}</p>
                  {/* 원하는 다른 설명도 추가할 수 있습니다 */}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default Grid;