import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  width: 20rem;
  height: 10rem;
  background: #0f0f0f;
  color: #e3e3e5;
  margin: 1rem;
  box-shadow: 4px 4px 5px black;
  border-radius: 3px;

  h2 {
    border-bottom: 1px solid #e3e3e5;
    width: 70%;
    padding: 0.5rem 0;
  }

  ul {
    display: flex;
    flex-direction: column;
    padding: 0.5rem 0;

    li {
      list-style: none;
      font-size: 1.2rem;
      padding: 0.1rem 0;
      font-weight: bold;

      span {
        padding: 0 0.3rem;
        color: #ddd;
        font-weight: 100;
      }
    }
  }
`;

export const Player = ({ player }) => (
  <Div className='player-card'>
    <h2>{player.id + 1}</h2>
    <ul>
      <li data-testid='player-name'>
        <span>Name:</span> {player.name}
      </li>
      <li data-testid='player-country'>
        <span>Country:</span> {player.country}
      </li>
      <li>
        <span>Searches:</span> {player.searches}
      </li>
    </ul>
  </Div>
);
