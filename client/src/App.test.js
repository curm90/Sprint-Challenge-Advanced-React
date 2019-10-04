import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import * as rtl from '@testing-library/react';
import App from '../src/App';

let tools;

beforeEach(() => {
  rtl.cleanup();
  tools = rtl.render(<App />);
});

describe('App component', () => {
  it('should debug component', () => {
    tools.debug();
  });

  it('renders without crashing', () => {
    rtl.render(<App />);
  });

  it('player data fetched and displaying', async () => {
    const { getAllByTestId, getAllByText } = rtl.render(<App />);
    await rtl.waitForElement(() => getAllByTestId('player-name'));
    await rtl.waitForElement(() => getAllByTestId('player-country'));
    await rtl.waitForElement(() => getAllByText(/searches/i));
  });
});
