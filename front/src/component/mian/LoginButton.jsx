import React, { useState, useEffect } from 'react';
import '../../App.css'
import { useNavigate } from "react-router-dom";

function LoginButton() {
    let navigate = useNavigate();

    const [token, setToken] = useState(null);

    const handleLoginClick = () => {
        navigate("/login");
    };

    const handleProfileClick = () => {
        navigate("/mypage");
    };

    useEffect(() => {
        // localStorage 토큰을 가져옴 
        const Token = localStorage.getItem('jwt');
        if (Token) {
            setToken(Token);
        }
    }, []);


    return(
        <div>
       {token ? (
                // 토큰이 있을 경우 프로필 버튼
                <button onClick={handleProfileClick} className="login-button login-button-color">프로필</button>
            ) : (
                // 토큰이 없을 경우 로그인 버튼
                <button onClick={handleLoginClick} className="login-button login-button-color">로그인</button>
            )}
      </div>
    );

}

export default LoginButton;