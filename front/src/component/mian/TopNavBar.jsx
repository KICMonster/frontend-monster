import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";


function TopNavBar({ isShrunk }) {
    const handleLogin = () => {
        console.log('로그인 버튼이 클릭되었습니다.');
        // 로그인 처리 로직을 여기에 추가할 수 있습니다.
      };

  return (
    <Navbar className={isShrunk ? 'navbar shrink' : 'navbar expand'}>
      <Navbar.Brand href="#home">
      <div className="logo"></div> {/* 로고 이미지를 사용하는 div */}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#cocktail" className={`nav-link ${isShrunk ? 'shrink' : 'expand'}`}>칵테일</Nav.Link>
        <Nav.Link href="#ingredient" className={`nav-link ${isShrunk ? 'shrink' : 'expand'}`}>재료</Nav.Link>
        <Nav.Link href="#recipes" className={`nav-link ${isShrunk ? 'shrink' : 'expand'}`}>레시피</Nav.Link>
        <Nav.Link href="#articles" className={`nav-link ${isShrunk ? 'shrink' : 'expand'}`}>기사</Nav.Link>
      </Nav>
      
      <button onClick={handleLogin} className="login-button login-button-color">
        로그인
      </button>
      
    </Navbar>
    
  );
}


export default TopNavBar;
