/**
 * App.test: Basic smoke test for the App component.
 * Note: This test is boilerplate and may need updating
 * to reflect actual rendered content on the page.
 */
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
