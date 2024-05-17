import React, { useState, useEffect } from 'react';
import '../../App.css'
import { useNavigate } from "react-router-dom";

function LoginButton() {
    let navigate = useNavigate();

    const handleClick = () => {
        navigate("/login");
    };



    return(
        <div>
        {/* 로그인 */}
        <button onClick={handleClick} className="login-button login-button-color">로그인</button>
      </div>
    );

}

export default LoginButton;