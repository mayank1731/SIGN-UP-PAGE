


import React from 'react';
import styled from 'styled-components';
import logoImage from './images/logo.png'; 

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between; 
  align-items: center; 
  background-color: #87CEEB; 
  padding: 10px 20px; 
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); 
  position: fixed; 
  top: 0; 
  left: 0; 
  right: 0; 
  z-index: 1000;
`;

const Logo = styled.img`
  height: 50px; 
`;

const HomeButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; 
  }
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={logoImage} alt="Logo" /> {/* Use the styled component for logo */}
      <HomeButton onClick={(e) => window.location.href = '/'}>Home</HomeButton>
    </HeaderWrapper>
  );
};

export default Header;
