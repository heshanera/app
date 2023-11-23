import React, { ReactElement, ReactNode } from 'react';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

jest.mock('react-router-dom', () => {
  const BrowserRouterMock: React.FC = ({ children }: { children?: ReactNode }): ReactElement => <div>{children}</div>;
  return {
    ...jest.requireActual('react-router-dom'),
    BrowserRouter: BrowserRouterMock,
  };
});

describe('App component', () => {
  test('renders header and footer', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>,
      );
    });

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();

    const footerElement = screen.getByTestId('footer');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders product list when the route is /catalog', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/catalog']}>
          <App />
        </MemoryRouter>,
      );
    });

    const productListElement = screen.getByTestId('product-list');
    expect(productListElement).toBeInTheDocument();
  });

  test('redirects to /catalog when the route is /', async () => {
    await act(async () => {
      render(
        <MemoryRouter initialEntries={['/']}>
          <App />
        </MemoryRouter>,
      );
    });

    const productListElement = screen.getByTestId('product-list');
    expect(productListElement).toBeInTheDocument();
  });
});
