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
});
