import React, { useState } from "react";
import BasicLayout from "../../layouts/BasicLayout";
import '../../component/main/styles/mycocktail.css';
import { Link } from "react-router-dom";

function MyCocktail() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([
    { id: 1, name: "", amount: "" },
    { id: 2, name: "", amount: "" },
    { id: 3, name: "", amount: "" },
    { id: 4, name: "", amount: "" },
    { id: 5, name: "", amount: "" }
  ]);
  const [error, setError] = useState(null);

  const handleInputChange = (id, field, value) => {
    console.log(`재료 ${id} 필드 ${field}를 값 ${value}로 업데이트합니다.`);
    setIngredients(prevIngredients =>
      prevIngredients.map(ingredient =>
        ingredient.id === id ? { ...ingredient, [field]: value } : ingredient
      )
    );
  };

  const addIngredient = () => {
    const newId = ingredients.length + 1;
    console.log(`새로운 재료를 ID ${newId}로 추가합니다.`);
    setIngredients(prevIngredients => [
      ...prevIngredients,
      { id: newId, name: "", amount: "" }
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log("제목:", title, "내용:", description, "재료:", ingredients, "로 폼을 제출합니다.");
      // 제출 로직 구현
    } catch (error) {
      console.error("오류 발생:", error);
      setError(error.message);
    }
  };

  return (
    <BasicLayout>
      <div className="MyBoard">
        <div className="MyContainer">
          <div className="MyLeft">
            <div className="MyIngredientSection">
              <h2>추가하실 재료</h2>
              <button type="button" onClick={addIngredient} className="MyAddButton">
                재료 추가하기
              </button>
              <div className="MyIngredientsContainer">
                {ingredients.map(ingredient => (
                  <div key={ingredient.id} className="MyFormGroup">
                    <div className="MyIngredientRow">
                      <input
                        type="text"
                        placeholder={`재료 ${ingredient.id} 이름`}
                        value={ingredient.name}
                        onChange={(e) =>
                          handleInputChange(ingredient.id, "name", e.target.value)
                        }
                        className="MyIngredientInput"
                      />
                      <input
                        type="text"
                        placeholder="재료의 양"
                        value={ingredient.amount}
                        onChange={(e) =>
                          handleInputChange(ingredient.id, "amount", e.target.value)
                        }
                        className="MyAmountInput"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="MyRight">
            <form onSubmit={handleSubmit} className="MyForm">
              <div className="MyFormGroup">
                <label className="MyLabel">제목을 입력해주세요</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="MyInput"
                />
              </div>
              <div className="MyFormGroup">
                <label className="MyLabel">내용</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="MyTextarea"
                />
              </div>
              <div className="MyFormGroup">
                <label className="MyLabel">이미지 첨부</label>
                <input type="file" className="MyFileInput" />
              </div>
              <div className="MyButtonGroup">
                <button type="submit" className="MySubmitButton">
                  등록
                </button>
                <Link to={'/customcocktail'}>
                  <button type="button" className="MyCancelButton">
                    취소
                  </button>
                </Link>
              </div>
              {error && <p className="MyError">{error}</p>}
            </form>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

export default MyCocktail;