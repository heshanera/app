import React from 'react';
import { act, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductGrid from '../../ProductGrid';
import { mockEmptyProductCategory, mockProductCategory } from '../../__mocks__/productCategoryMock';

describe('ProductGrid Component', () => {
  it('renders product grid with category information', () => {
    const { getByText } = render(<ProductGrid category={mockProductCategory} isLoading={false} />);

    expect(getByText('Test Category (5)')).toBeInTheDocument();
    expect(getByText('Product 1')).toBeInTheDocument();
    expect(getByText('Product 2')).toBeInTheDocument();
  });

  it('renders placeholder when loading', () => {
    const { getAllByTestId } = render(<ProductGrid category={mockProductCategory} isLoading={true} />);

    expect(getAllByTestId('placeholder')).toBeDefined();
  });

  it('filters products based on search text', async () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <ProductGrid category={mockProductCategory} isLoading={false} />,
    );

    userEvent.type(getByPlaceholderText('Search'), 'Product 1');

    act(() => {
      expect(getByText('Product 1')).toBeInTheDocument();
      expect(queryByText('Product 2')).toBeNull();
    });

    userEvent.type(getByPlaceholderText('Search'), 'Product 2');

    act(() => {
      expect(queryByText('Product 1')).toBeNull();
      expect(getByText('Product 2')).toBeInTheDocument();
    });
  });

  it('renders empty view when no products are available', () => {
    const { getByText } = render(<ProductGrid category={mockEmptyProductCategory} isLoading={false} />);

    expect(getByText('No Products')).toBeInTheDocument();
    expect(getByText('No products available for the selected category')).toBeInTheDocument();
  });
});
