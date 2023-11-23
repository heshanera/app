import React from 'react';
import { fireEvent, render, within, cleanup } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import CategoriesList from '../../CategoriesList';

type HistoryFunctionMock = {
  push: jest.Mock<void, [string]>;
};

const mockHistoryPush: jest.Mock<void, [string]> = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: (): HistoryFunctionMock => ({
    push: mockHistoryPush,
  }),
}));

describe('CategoriesList Component', () => {
  const categoriesList = [
    { name: 'Category 1', urlPath: 'category1' },
    { name: 'Category 2', urlPath: 'category2' },
  ];

  afterEach(() => {
    cleanup();
  });

  it('renders placeholder when isLoading is true', () => {
    const { getByTestId } = render(<CategoriesList categoriesList={categoriesList} isLoading={true} />, {
      wrapper: BrowserRouter,
    });

    const categoriesListView = getByTestId('categories-list-view');
    expect(categoriesListView).toBeInTheDocument();

    const placeholderElement = within(categoriesListView).getByTestId('placeholder');
    expect(placeholderElement).toBeInTheDocument();
  });

  it('renders categories list when isLoading is false', () => {
    const { container, getAllByText } = render(<CategoriesList categoriesList={categoriesList} isLoading={false} />, {
      wrapper: BrowserRouter,
    });
    const sidebar = container.querySelector('.categories-list-view');
    expect(sidebar).toHaveStyle('display: block;');

    const dropdown = container.querySelector('.categories-dropdown-view');
    expect(dropdown).toHaveStyle('display: none;');

    expect(getAllByText('Category 1')).toBeDefined();
    expect(getAllByText('Category 2')).toBeDefined();
  });

  it('navigates to the correct category path when a category is clicked', () => {
    const { getAllByRole } = render(<CategoriesList categoriesList={categoriesList} isLoading={false} />, {
      wrapper: BrowserRouter,
    });

    fireEvent.click(getAllByRole('button')[0]);

    expect(mockHistoryPush).toHaveBeenCalledWith('/catalog/category1');
  });

  it('navigates to the correct category path when a dropdown option is selected', () => {
    const { getAllByTestId } = render(<CategoriesList categoriesList={categoriesList} isLoading={false} />, {
      wrapper: BrowserRouter,
    });

    fireEvent.click(getAllByTestId('category-dropdown-option')[0]);

    expect(mockHistoryPush).toHaveBeenCalledWith('/catalog/category1');
  });
});
