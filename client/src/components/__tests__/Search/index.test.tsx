import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Search from '../../Search';

describe('Search component', () => {
  it('renders the Search component with the correct placeholder', () => {
    const { getByPlaceholderText } = render(<Search searchText="" setSearchText={jest.fn()} />);

    const inputElement = getByPlaceholderText('Search');
    expect(inputElement).toBeInTheDocument();
  });

  it('calls setSearchText method when input value changes', () => {
    const setSearchTextMock = jest.fn();
    const { getByPlaceholderText } = render(<Search searchText="" setSearchText={setSearchTextMock} />);

    const inputElement = getByPlaceholderText('Search');
    fireEvent.change(inputElement, { target: { value: 'new search text' } });

    expect(setSearchTextMock).toHaveBeenCalledWith('new search text');
  });
});
