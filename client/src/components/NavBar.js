import React from 'react';
import styled from 'styled-components';
import useDarkMode from '../hooks/useDarkMode';

const Nav = styled.nav`
  align-items: center;
  border-bottom: 1px solid rgb(221, 221, 221);
  display: flex;
  height: 70px;
  justify-content: space-between;
  padding: 0 3%;
  width: 100%;
  box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
  margin-bottom: 2rem;
  background-color: #1f2022;
  border: none;

  h1 {
    color: white;
  }
`;

export const NavBar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <Nav className='navbar'>
      <h1>Womens World Cup</h1>
      <div className='dark-mode__toggle'>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </Nav>
  );
};
