import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '..';

jest.mock('../../../hooks/useGraphqlRequest', () => ({
  __esModule: true,
  default: jest.fn(),
}));

describe('ProductList Component', () => {
  it('renders product list component by fetching data', () => {
    const mockUseGraphqlRequest = require('../../../hooks/useGraphqlRequest').default;
    mockUseGraphqlRequest.mockReturnValueOnce(Promise.resolve({ isLoading: true, data: null })).mockReturnValueOnce(
      Promise.resolve({
        isLoading: false,
        data: { categories: [{ childrenCategories: { list: [] } }] },
      }),
    );

    const { container, rerender } = render(<ProductList />);
    expect(require('../../../hooks/useGraphqlRequest').default).toHaveBeenCalledTimes(1);

    const placeholder = container.querySelector('.placeholder');
    expect(placeholder).toBeDefined();

    rerender(<ProductList />);

    expect(mockUseGraphqlRequest).toHaveBeenCalledTimes(2);

    const gridHeader = container.querySelector('.grid-header');
    expect(gridHeader).toBeDefined();

    const categoryHeader = container.querySelector('.category-header');
    expect(categoryHeader).toBeDefined();
  });
});
