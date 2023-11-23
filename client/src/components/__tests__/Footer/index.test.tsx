import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../Footer';

describe('Footer component', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Footer />);
  });

  it('renders the footer message correctly', () => {
    const { getByText } = component;
    const expectedMessage = 'All prices are in euros (€) including VAT and shipping costs.';
    expect(getByText(expectedMessage)).toBeInTheDocument();
  });
});
