import React from 'react';
import { render } from '@testing-library/react';
import EmptyView from '../../EmptyView';

describe('EmptyView Component', () => {
  it('renders with provided header and subheader text', () => {
    const headerText = 'No Products';
    const subText = 'No products available for the selected category';

    const { getByText } = render(<EmptyView headerText={headerText} subText={subText} />);

    expect(getByText(headerText)).toBeInTheDocument();
    expect(getByText(subText)).toBeInTheDocument();
  });
});
