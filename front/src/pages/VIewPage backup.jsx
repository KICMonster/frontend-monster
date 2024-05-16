import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";

function ViewPage() {
  const [cocktails, setCocktails] = useState([]);

  // 모든 칵테일 값을 불러와서 상태에 설정하는 함수
  const fetchAllCocktails = () => {
    // 여기에 칵테일 데이터를 불러오는 로직을 작성하세요
    // 예를 들어 fetch나 axios 등을 사용하여 API를 호출하여 데이터를 가져올 수 있습니다.
    // 이 예시에서는 더미 데이터를 사용합니다.
    const dummyData = [
      { id: 1, name: "마티니", ingredients: ["진", "마티니 버무스", "올리브"], image: "martini.jpg" },
      { id: 2, name: "모히또", ingredients: ["럼", "라임 주스", "민트", "설탕", "탄산수"], image: "mojito.jpg" },
      { id: 3, name: "칵테일3", ingredients: ["재료1", "재료2", "재료3"], image: "cocktail3.jpg" },
      // 더 많은 칵테일 데이터가 있다면 여기에 추가하세요
      /* cocktailId -> ??? 페이지 이동할때 필요함 ( /api/cocktail/3 ) , 우리가 분별할때
      img : 현민이랑 상의 -> onclickEvent
      */
    ];
    setCocktails(dummyData);
  };

  useEffect(() => {
    fetchAllCocktails(); // 컴포넌트가 마운트되면 모든 칵테일 데이터를 불러옴
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  return (
    <BasicLayout>
      {/* 모든 칵테일 데이터를 가로로 표시 */}
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {cocktails.map(cocktail => (
          <div key={cocktail.id} style={{ width: "300px", margin: "10px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
            {/* 칵테일 이미지 */}
            <img src={cocktail.image} alt={cocktail.name} style={{ width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
            <div style={{ padding: "20px" }}>
              <h2>{cocktail.name}</h2>
              <p>재료: {cocktail.ingredients.join(", ")}</p>
            </div>
          </div>
        ))}
      </div>
    </BasicLayout>
  );
}

export default ViewPage;
