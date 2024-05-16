import React, { useEffect, useState } from 'react';

function MainPage() {
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    // 임시로 데이터베이스에서 가져온 값들
    const fakeCocktails = [
      { name: '모히토', description: '럼을 기반으로 한 상쾌한 칵테일' },
      // 이미지 클릭하면 상세 페이지로 이동
      { name: '마르가리타', description: '테킬라를 기반으로 한 클래식한 칵테일' },
      { name: '핑크 레이디', description: '진을 기반으로 한 부드러운 칵테일' },
    ];
    setCocktails(fakeCocktails);
  }, []);

  return (
    <div className="big-info-box"> {/* 차콜색 투명 박스 추가 */}
      <h5>Cocktail List</h5>
      <ul>
        {cocktails.map((cocktail, index) => (
          <li key={index}>
            <strong>{cocktail.name}</strong>: {cocktail.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MainPage;
