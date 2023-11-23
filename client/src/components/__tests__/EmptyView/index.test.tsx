import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import EmptyView from '../../EmptyView';

describe('EmptyView Component', () => {
  let component: RenderResult;

  beforeEach(() => {
    const headerText = 'No Products';
    const subText = 'No products available for the selected category';
    component = render(<EmptyView headerText={headerText} subText={subText} />);
  });

  it('renders with provided header and subheader text', () => {
    const { getByText } = component;

    expect(getByText('No Products')).toBeInTheDocument();
    expect(getByText('No products available for the selected category')).toBeInTheDocument();
  });
});
