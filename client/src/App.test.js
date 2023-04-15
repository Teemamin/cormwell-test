import { render, screen } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux'
import store from './store';

const ReduxProvider = ({ children, reduxStore }) => (
  <Provider store={store}>{children}</Provider>
)

test('renders learn react link', () => {
  render(<ReduxProvider><App /></ReduxProvider>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
