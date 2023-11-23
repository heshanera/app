import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from '../../Footer';

describe('Footer component', () => {
  it('renders the footer message correctly', () => {
    const { getByText } = render(<Footer />);
    const expectedMessage = 'All prices are in euros (€) including VAT and shipping costs.';
    expect(getByText(expectedMessage)).toBeInTheDocument();
  });
});
