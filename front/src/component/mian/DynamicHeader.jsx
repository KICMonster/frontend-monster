import React, { useState, useEffect } from 'react';
import TopNavBar from './TopNavBar';

function DynamicHeader() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isShrunk, setShrunk] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  useEffect(() => {
    const handleScroll = () => {
      setShrunk(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={isShrunk ? 'header shrink' : 'header expand'}>
      <TopNavBar isShrunk={isShrunk} />
       <div className={isShrunk ? 'search-bar-container shrink' : 'search-bar-container expand'}>
        <input
          type="text"
          className={isShrunk ? 'search-input shrink' : 'search-input expand'}
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="칵테일 뀨"
        />
        <button
          className={isShrunk ? 'search-button shrink' : 'search-button expand'}
          onClick={() => console.log("검색: ", searchTerm)}
        >
          검색
        </button>
      </div>
    </header>
  );
}

export default DynamicHeader;



// search-button search-button-color