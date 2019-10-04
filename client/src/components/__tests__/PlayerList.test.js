import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { PlayerList } from '../PlayerList';

afterEach(cleanup);

describe('Playerlist component', () => {
  it('render loading when no players', () => {
    const { getByText } = render(<PlayerList />);
    expect(getByText(/loading.../i)).toBeInTheDocument();
  });

  // Doesnt work yet :(
  it('renders players', () => {
    const fakePlayers = [{ id: 1, name: 'Alex', id: 2, name: 'Megan' }];
    const { getAllByTestId } = render(<PlayerList players={fakePlayers} />);
    const playerNames = getAllByTestId('player-name').map(
      div => div.textContent
    );
    const fakplayernames = fakePlayers.map(player => player.name);
    expect(playerNames).toEqual(fakplayernames);
  });
});
