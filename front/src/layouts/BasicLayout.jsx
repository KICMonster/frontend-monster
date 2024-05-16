// BasicLayout.js

import React, { useState, useEffect } from "react";
import BasicMenu from "../component/BasicMenu";


function BasicLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

  // 스크롤 이벤트를 감지하여 헤더 상태 업데이트
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 검색어 변경 핸들러
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // 검색 폼 제출 핸들러
  const handleSubmit = (event) => {
    event.preventDefault();
    // 여기에 검색 처리 로직을 추가하세요
    console.log("검색어:", searchQuery);
    // 검색 처리 로직을 완료한 후에 필요하면 결과를 업데이트하세요
  };

  return (
    <>
      {/* 헤더 영역 */}
      <div className={isScrolled ? "header scrolled" : "header"}>
        <BasicMenu />
        <div>
          {/* 로그인 */}
          <a href="/login">로그인</a>
        </div>
        
      </div>

      {/* 검색 폼 */}
      <div className="search-form-container">
        <form onSubmit={handleSubmit} className="search-form">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            placeholder="검색어를 입력하세요..."
            className="search-input"
          />
          <button type="submit" className="search-button">검색</button>
        </form>
      </div>

      {/* 정보 영역 */}
      <div className="info">
        {/* 메인 페이지 칵테일 재료 카테고리 */}
        <div className="cocktail-categories">
          {/* 칵테일 재료 목록 */}
          {/* 여기에 칵테일 재료 목록이 들어갈 예정입니다. */}
        </div>

        {/* 카테고리 아래에 있는 자식 컴포넌트 렌더링 */}
        {children}
      </div>

      {/* 푸터 영역 */}
      <footer className="footer">
        <a href="/customer-service">고객센터</a>
      </footer>
    </>
  );
}

export default BasicLayout;
