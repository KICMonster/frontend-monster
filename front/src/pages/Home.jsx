import React, { useEffect, useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import "../layouts/BasicLayout.css"
import DynamicHeader from '../component/mian/DynamicHeader';
import ImageClicker from '../component/mian/ImageClicker';
import InteractiveImage from '../component/mian/InteractiveImage';
import CocktailLink from '../component/mian/CocktailLink';

function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    const loginLink = document.querySelector('a[href="/login"]');
    const joinLink = document.querySelector('a[href="/join"]');

    if (token) {
      setIsLoggedIn(true);
      if (loginLink) {
        // JWT 토큰이 있으면 로그아웃 링크로 변경합니다.
        loginLink.textContent = 'Logout';
        loginLink.setAttribute('href', '/logout');
        loginLink.addEventListener('click', (e) => {
          e.preventDefault();
          // 로컬 스토리지에서 JWT 토큰을 제거합니다.
          localStorage.removeItem('jwt');
          // 상태를 업데이트합니다.
          setIsLoggedIn(false);
          // 로그인 페이지로 리다이렉트합니다.
          window.location.href = '/login';
        });
      }
      // 조인 링크를 숨깁니다.
      if (joinLink) {
        joinLink.style.display = 'none';
      }
    } else {
      // 로그인하지 않은 상태에서 로그인 링크와 조인 링크를 보여줍니다.
      if (loginLink && joinLink) {
        loginLink.textContent = 'Login';
        loginLink.setAttribute('href', '/login');
        joinLink.style.display = '';
      }
    }
  }, [isLoggedIn]);

  return (
    <BasicLayout >

      <ImageClicker />

      <InteractiveImage />

      <CocktailLink />
      
    </BasicLayout>
  );
}
export default Home;