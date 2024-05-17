import React, { useState, useEffect } from "react";
import BasicLayout from "../layouts/BasicLayout";
import { Link } from "react-router-dom";

function ViewPage() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchAllCocktails = () => {
    const dummyData = [
      { id: 1, name: "마티니", ingredients: ["진", "마티니 버무스", "올리브"], image: "martini.jpg" },
      { id: 2, name: "모히또", ingredients: ["럼", "라임 주스", "민트", "설탕", "탄산수"], image: "mojito.jpg" },
      { id: 3, name: "칵테일3", ingredients: ["재료1", "재료2", "재료3"], image: "cocktail3.jpg" },
      { id: 1, name: "마티니", ingredients: ["진", "마티니 버무스", "올리브"], image: "martini.jpg" },
      { id: 2, name: "모히또", ingredients: ["럼", "라임 주스", "민트", "설탕", "탄산수"], image: "mojito.jpg" },
      { id: 3, name: "칵테일3", ingredients: ["재료1", "재료2", "재료3"], image: "cocktail3.jpg" },
      // 더 많은 칵테일 데이터가 있다면 여기에 추가하세요
    ];
    setCocktails(dummyData);
    setLoading(false);
  };

  useEffect(() => {
    fetchAllCocktails();
  }, []);

  const groupCocktails = () => {
    const groupedCocktails = [];
    const size = 5;
    for (let i = 0; i < cocktails.length; i += size) {
      groupedCocktails.push(cocktails.slice(i, i + size));
    }
    return groupedCocktails;
  };

  return (
    <BasicLayout>
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
          {groupCocktails().map((group, index) => (
            <div key={index} style={{ display: "flex" }}>
              {group.map(cocktail => (
                <div key={cocktail.id} style={{ width: "200px", margin: "10px", backgroundColor: "#fff", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
                  <Link to={cocktail.name === "마티니" ? "/cocktail/martini" : "#"} style={{ textDecoration: 'none', color: 'inherit' }}>
                    <img src={cocktail.image} alt={cocktail.name} style={{ width: "100%", borderTopLeftRadius: "8px", borderTopRightRadius: "8px" }} />
                    <div style={{ padding: "20px" }}>
                      <h2>{cocktail.name}</h2>
                      <p>재료: {cocktail.ingredients.join(", ")}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </BasicLayout>
  );
}

export default ViewPage;
