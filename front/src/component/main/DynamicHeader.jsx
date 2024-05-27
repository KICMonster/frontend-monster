import React, { useState, useEffect } from 'react';
import TopNavBar from './TopNavBar';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import { Link } from 'react-router-dom';

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
  }, []);

  return (
    <header className='header'>
      <div className="headervar">
        <div className="left-section">
          <TopNavBar isShrunk={isShrunk} />
        </div>
        <div className="center-section">
          <Link><div className="logo"></div></Link>
        </div>
        <div className="right-section">
          <SearchBar />
          <LoginButton />
        </div>
      </div>
    </header>
  );
}

export default DynamicHeader;
