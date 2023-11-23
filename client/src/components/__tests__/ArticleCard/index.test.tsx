import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ArticleCard from '../../ArticleCard';
import { Article } from '../../../types';

const mockArticle: Article = {
  name: 'Sample Article',
  images: [{ path: 'image1.jpg' }, { path: 'image2.jpg' }],
  prices: {
    regular: {
      value: 1500,
    },
    currency: 'USD',
  },
  variantName: 'Sample variant Name',
};

describe('ArticleCard component', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<ArticleCard article={mockArticle} />);
  });

  it('renders article information correctly', () => {
    const { getByText, getAllByAltText } = component;

    const altTextElements = getAllByAltText('Sample Article');
    altTextElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });
    expect(getByText('Sample Article')).toBeInTheDocument();
    expect(getByText('$15.00')).toBeInTheDocument();
  });

  it('changes selected image when clicking on image in the list', () => {
    const { getAllByAltText } = component;

    let altTextElements = getAllByAltText('Sample Article');

    fireEvent.click(altTextElements[1]);
    altTextElements = getAllByAltText('Sample Article');
    expect(altTextElements[1].classList.contains('active')).toBe(true);
    expect(altTextElements[2].classList.contains('active')).toBe(false);

    fireEvent.click(altTextElements[2]);
    altTextElements = getAllByAltText('Sample Article');
    expect(altTextElements[1].classList.contains('active')).toBe(false);
    expect(altTextElements[2].classList.contains('active')).toBe(true);
  });
});
