import React from 'react';
import styled from 'styled-components';
import { Player } from './Player';

const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const PlayerList = ({ players }) => {
  if (!players || !players.length) {
    return <div style={{ textAlign: 'center' }}>Loading...</div>;
  }

  return (
    <Div className='players-container'>
      {players.map(player => (
        <Player data-testid='player-name' player={player} key={player.id} />
      ))}
    </Div>
  );
};
