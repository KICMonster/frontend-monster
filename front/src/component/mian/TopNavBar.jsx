import React, { useState } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from './SearchBar';


function TopNavBar({ isShrunk }) {

  return (
    <Navbar className={isShrunk ? 'navbar shrink' : 'navbar expand'}>
      <Navbar.Brand href={'/'}>
      <div className="logo"></div> {/* 로고 이미지를 사용하는 div */}
      </Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href={'/ViewPage'} className={`nav-link ${isShrunk ? 'shrink' : 'expand'}`}>칵테일</Nav.Link>
        <Nav.Link href={'/Ingredient'} className={`nav-link ${isShrunk ? 'shrink' : 'expand'}`}>재료</Nav.Link>
        <Nav.Link href={'/TodayCocktail'} className={`nav-link ${isShrunk ? 'shrink' : 'expand'}`}>안주</Nav.Link>
        <Nav.Link href={'/#'} className={`nav-link ${isShrunk ? 'shrink' : 'expand'}`}>나만의 칵테일</Nav.Link>
        
      </Nav>
      {/* <div>
        <button onClick={handleLogin} className="login-button login-button-color">
          로그인
        </button>
      </div> */}
      
    </Navbar>
    
  );
}


export default TopNavBar;
