import React, { useState } from 'react';
import BasicLayout from '../layouts/BasicLayout';
import './MyPage.css';

function MyPage() {
    const [nickname, setNickname] = useState();
    const [profileImage, setProfileImage] = useState(null);
  
    const handleNicknameChange = (e) => {
      setNickname(e.target.value);
    };
  
    const handleImageChange = (e) => {
      if (e.target.files && e.target.files[0]) {
        setProfileImage(URL.createObjectURL(e.target.files[0]));
      }
    };
  
    return (
      <BasicLayout>
        <div className="myPage">
          <h2>프로필 수정</h2>
          <p>대표 프로필과 별명을 수정하실 수 있습니다.</p>
          <div className="profile-section">
            <div className="profile-picture">
              <img src={profileImage || 'default-profile.png'} alt="Profile" />
              <input type="file" onChange={handleImageChange} />
              <button>사진변경</button>
              
              <button>삭제</button>
            </div>
            <div className="nickname-section">
              <label>별명</label>
              <input type="text" value={nickname} onChange={handleNicknameChange} />
            </div>
          </div>
          <div className="buttons">
            <button>적용</button>
            <button>취소</button>
          </div>
        </div>
      </BasicLayout>
    );
  }
  
  export default MyPage;