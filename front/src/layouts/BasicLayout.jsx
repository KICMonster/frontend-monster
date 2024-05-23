import React, { useState, useEffect } from "react";
import DynamicHeader from "../component/main/DynamicHeader";

function BasicLayout({ children }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(""); // 검색어 상태 추가

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

  return (
    <>
      {/* 헤더 영역 */}
      <div className= "header">
        <DynamicHeader />
      </div>
      <div className="info">
        {children}
      </div>
      <footer className="footer">
        <a href="/customer-service">고객센터</a>
      </footer>
    </>
  );
}

export default BasicLayout;
