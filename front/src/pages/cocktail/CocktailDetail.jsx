import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BasicLayout from "../../layouts/BasicLayout";

function CocktailDetail() {
  const { cocktailId } = useParams(); // URL 파라미터에서 칵테일 ID 가져오기
  const [cocktail, setCocktail] = useState(null); // 칵테일 상세 정보 상태
  const [error, setError] = useState(null); // 오류 상태

  // 칵테일 상세 정보를 가져오는 함수
  const fetchCocktailDetail = async () => {
    try {
      const endpoint = `https://localhost:9092/api/cocktail/${cocktailId}`;

      const response = await fetch(endpoint);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setCocktail(data);
    } catch (error) {
      console.error('Error fetching cocktail detail:', error);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCocktailDetail(); // 컴포넌트가 마운트되면 칵테일 상세 정보를 가져옴
  }, [cocktailId]); // cocktailId 값이 변경될 때마다 실행되도록 설정

  // 오류가 발생한 경우 오류 메시지를 표시
  if (error) {
    return (
      <BasicLayout>
        <div>Error: {error}</div>
      </BasicLayout>
    );
  }

  // 칵테일 상세 정보가 없는 경우 로딩 상태를 표시
  if (!cocktail) {
    return (
      <BasicLayout>
        <div>Loading...</div>
      </BasicLayout>
    );
  }

  // 칵테일 상세 페이지 컴포넌트 반환
  return (
    <BasicLayout>
      <div style={styles.container}>
        <img src={cocktail.recommend} alt={cocktail.name} style={styles.cocktailImage} />
        <h1 style={styles.cocktailName}>{cocktail.name}</h1>
        <p style={styles.cocktailDescription}>{cocktail.description}</p>
        <h2 style={styles.sectionTitle}>Ingredients:</h2>
        <ul style={styles.ingredientsList}>
          <li>Vodka: {cocktail.measure1}</li>
          <li>Triple sec: {cocktail.measure2}</li>
          <li>Cranberry juice: {cocktail.measure3}</li>
        </ul>
        <h2 style={styles.sectionTitle}>Instructions:</h2>
        <p style={styles.instructions}>{cocktail.instructions}</p>
      </div>
    </BasicLayout>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
  },
  cocktailImage: {
    width: "100%",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  cocktailName: {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px 0",
  },
  cocktailDescription: {
    fontSize: "16px",
    margin: "10px 0",
  },
  sectionTitle: {
    fontSize: "20px",
    fontWeight: "bold",
    margin: "30px 0 10px",
  },
  ingredientsList: {
    listStyleType: "none",
    padding: 0,
    margin: "0 0 30px",
  },
  instructions: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
};

export default CocktailDetail;