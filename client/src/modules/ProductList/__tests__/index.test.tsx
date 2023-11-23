import React from 'react';
import { render } from '@testing-library/react';
import ProductList from '..';
import mockUseGraphqlRequest from '../../../hooks/useGraphqlRequest';

jest.mock('../../../hooks/useGraphqlRequest', () => ({
  ...jest.requireActual('../../../hooks/useGraphqlRequest'),
  __esModule: true,
  default: jest.fn(),
}));

describe('ProductList Component', () => {
  it('renders product list component by fetching data', async () => {
    const mockReturnValueOnce = jest
      .fn()
      .mockImplementationOnce(() => Promise.resolve({ isLoading: true, data: null }))
      .mockImplementationOnce(() =>
        Promise.resolve({
          isLoading: false,
          data: { categories: [{ childrenCategories: { list: [] } }] },
        }),
      );

    (mockUseGraphqlRequest as jest.Mock).mockReturnValue(mockReturnValueOnce);

    const { container, rerender } = render(<ProductList />);
    expect(mockUseGraphqlRequest).toHaveBeenCalledTimes(1);

    const placeholder = container.querySelector('.placeholder');
    expect(placeholder).toBeDefined();

    await rerender(<ProductList />);

    expect(mockUseGraphqlRequest).toHaveBeenCalledTimes(2);

    const gridHeader = container.querySelector('.grid-header');
    expect(gridHeader).toBeDefined();

    const categoryHeader = container.querySelector('.category-header');
    expect(categoryHeader).toBeDefined();
  });
});
