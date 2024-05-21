import React, { useState } from 'react';
import Gam from "../../img/gam.jpg";
import Guaka from "../../img/guaka.jpg";
import Fruit from "../../img/fruit.jpg";
import Lagu from "../../img/lagu.jpg";
import Nacho from "../../img/nacho.jpg";

function SideMenuMainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sideMenus = [
    { id: 1, name: "감바스 알 아히요", image: Gam, link: "" },
    { id: 2, name: "과일 플래터", image: Fruit, link: "" },
    { id: 3, name: "과카몰리", image: Guaka, link: "" },
    { id: 4, name: "나초 치즈", image: Nacho, link: "" },
    { id: 5, name: "라구 파스타", image: Lagu, link: "u" },
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sideMenus.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === sideMenus.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="side-menu-container">
      <button onClick={handlePrevClick} className="arrow-button left">&#9664;</button>
      <a href={sideMenus[currentIndex].link} target="_blank" rel="noopener noreferrer">
        <img src={sideMenus[currentIndex].image} alt={sideMenus[currentIndex].name} />
      </a>
      <button onClick={handleNextClick} className="arrow-button right">&#9654;</button>
    </div>
  );
}

export default SideMenuMainPage;
