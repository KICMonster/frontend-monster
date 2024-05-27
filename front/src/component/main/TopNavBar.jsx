import React, { useState } from 'react';
import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from 'react-router-dom';

function TopNavBar({ isShrunk }) {

  return (
    <Navbar className={isShrunk ? 'navbar shrink' : 'navbar expand'}>

      <Nav className="mr-auto">
        <Link to='/ViewPage'>칵테일 </Link>
        <Dropdown>
          <Dropdown.Toggle variant="transparent" >
            정보
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/history">역사</Dropdown.Item>
            <Dropdown.Item as={Link} to="/craft/mensuration">튜토리얼</Dropdown.Item>
            <Dropdown.Item as={Link} to="/trendNews">뉴스</Dropdown.Item>
            <Dropdown.Item as={Link} to="/weather">날씨?test</Dropdown.Item>
            <Dropdown.Item as={Link} to="/chart">차트</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle variant="transparent" >
            컨텐츠
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item as={Link} to="/#">무작위 칵테일</Dropdown.Item>
            <Dropdown.Item as={Link} to="/customcocktail">커스텀 칵테일</Dropdown.Item>
            <Dropdown.Item as={Link} to="/tastestart">취향 조사</Dropdown.Item>
            <Dropdown.Item as={Link} to="/mapsearch">칵테일 바 찾기</Dropdown.Item>
            <Dropdown.Item as={Link} to="/custom-cocktail">테스트하는뭐시기</Dropdown.Item>
            <Dropdown.Item as={Link} to="/mypage">마이페이지테스트</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Nav>
    </Navbar>

  );
}


export default TopNavBar;
