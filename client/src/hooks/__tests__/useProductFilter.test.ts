import { act } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';
import useProductFilter from '../useProductFilter';
import { mockProductsList, mockUpdatedProductsList } from '../__mocks__/productFilterMock';

describe('useProductFilter hook', () => {
  it('returns the initial products when searchText is empty', () => {
    const { result } = renderHook(() => useProductFilter('', mockProductsList));
    expect(result.current).toEqual(mockProductsList);
  });

  it('returns filtered products when searchText is not empty', () => {
    const { result, rerender } = renderHook(
      ({ searchText, productsList }) => useProductFilter(searchText, productsList),
      {
        initialProps: { searchText: '', productsList: mockProductsList },
      },
    );

    act(() => {
      rerender({ searchText: 'Product 1', productsList: mockProductsList });
    });

    expect(result.current).toEqual([mockProductsList[0]]);
  });

  it('returns filtered products when product list changes', () => {
    const { result, rerender } = renderHook(
      ({ searchText, productsList }) => useProductFilter(searchText, productsList),
      {
        initialProps: {
          searchText: 'Product 1',
          productsList: mockProductsList,
        },
      },
    );

    act(() => {
      rerender({ searchText: 'Product', productsList: mockUpdatedProductsList });
    });

    expect(result.current).toEqual([mockUpdatedProductsList[0]]);
  });

  it('returns an empty array when there are no matching products', () => {
    const { result } = renderHook(({ searchText, productsList }) => useProductFilter(searchText, productsList), {
      initialProps: {
        searchText: 'Non-existent',
        productsList: mockProductsList,
      },
    });

    expect(result.current).toEqual([]);
  });
});
