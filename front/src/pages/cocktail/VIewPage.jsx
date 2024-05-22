import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

function ViewPage() {
  const [cocktails, setCocktails] = useState([]);
  const [filter, setFilter] = useState('');

  const fetchAllCocktails = async () => {
    try {
      const endpoint = 'https://localhost:9092/api/cocktail';                  
      const response = await fetch(endpoint);
      const data = await response.json();
      setCocktails(data);
    } catch (error) {
      console.error('Error fetching cocktails:', error);
    }
  };

  useEffect(() => {
    fetchAllCocktails();
  }, []);

  // 필터링된 칵테일 목록을 계산
  const filteredCocktails = cocktails.filter(cocktail => {
    return filter === '' || cocktail.ingredient1 === filter;
  });

  // 필터 옵션 설정 함수
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  return (
    <BasicLayout>
      <div>
        <button onClick={() => handleFilterChange('Vodka')}>Vodka</button>
        <button onClick={() => handleFilterChange('Apple juice')}>Apple juice</button>
        <button onClick={() => handleFilterChange('Rum')}>Rum</button>
        <button onClick={() => handleFilterChange('')}>Reset Filter</button>
      </div>
      <div className="cocktail-list" style={styles.cocktailList}>
        {filteredCocktails.map(cocktail => (
          <Link key={cocktail.id} to={`/cocktail/${cocktail.id}`} style={styles.cocktailLink}>
            <div style={styles.cocktailItem}>
              <div style={styles.imageBox}>
                <img src={cocktail.recommend || 'default-image-url.jpg'} alt={cocktail.name} style={styles.cocktailImage} />
              </div>
              <h2 style={styles.cocktailName}>{cocktail.name}</h2>
            </div>
          </Link>
        ))}
      </div>
    </BasicLayout>
  );
}

const styles = {
  cocktailList: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)", // 가로로 5개씩 나열
    gridGap: "10px", // 각 칵테일 간의 간격
    padding: "20px", // 전체적인 여백 추가
  },
  cocktailLink: {
    textDecoration: 'none',
    color: 'inherit',
  },
  cocktailItem: {
    textAlign: "center",
    margin: "auto", // 박스를 가운데 정렬
  },
  imageBox: {
    width: "302px", // 이미지 박스의 가로 크기를 302px로 설정
    height: "202px", // 이미지 박스의 세로 크기를 202px로 설정
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)", // 그림자 효과 추가
    margin: "0 auto", // 이미지를 가운데 정렬
  },
  cocktailImage: {
    width: "100%", // 이미지가 이미지 박스에 가득 차도록 설정
    height: "100%", // 이미지가 이미지 박스에 가득 차도록 설정
    objectFit: "cover", // 이미지가 자동으로 크기를 맞춤
  },
  cocktailName: {
    margin: "10px 0 0 0",
    fontSize: "16px",
    fontWeight: "bold",
  },
};

export default ViewPage;