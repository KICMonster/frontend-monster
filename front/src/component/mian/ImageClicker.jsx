import React, { useState } from 'react';
import defaultImage from '../../img/cocktail.jpg';  // 이미지 파일 import
import newImage from '../../img/logo.png';  // 다른 이미지 파일 import

function ImageClicker() {
  const [image, setImage] = useState(defaultImage); // 초기 이미지 설정

  const handleImageClick = () => {
    // 이미지 클릭 이벤트 핸들러
    setImage(current => current === defaultImage ? newImage : defaultImage); // 클릭 시 새 이미지로 변경
  };

  return (
    <div>
      <img 
        src={image} 
        alt="Clickable" 
        style={{ cursor: 'pointer', width: '100%', height: '1000px' }} 
        onClick={handleImageClick} // 이미지 클릭 이벤트 바인딩
      />
    </div>
  );
}

export default ImageClicker;
