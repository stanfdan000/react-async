import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/here are some good candies to eat/i);
  expect(linkElement).toBeInTheDocument();
});
