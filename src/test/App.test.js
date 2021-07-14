import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import './setupTests.js';
import App from '../App';

test('renders comming soon text', () => {
  render(<App />);
  const welcomeElement = screen.getByText(/Comming Soon/i);
  expect(welcomeElement).toBeInTheDocument();
});
