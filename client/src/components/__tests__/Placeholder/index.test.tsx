import React from 'react';
import { render } from '@testing-library/react';
import Placeholder from '../../Placeholder';

describe('Placeholder component', () => {
  it('renders placeholder component', () => {
    const { getByTestId } = render(<Placeholder />);
    expect(getByTestId('placeholder')).toBeInTheDocument();
  });

  it('renders with specified height and width', () => {
    const { getByTestId } = render(<Placeholder height="100px" width="200px" />);
    const placeholder = getByTestId('placeholder');
    expect(placeholder).toHaveStyle('height: 100px');
    expect(placeholder).toHaveStyle('width: 200px');
  });

  it('renders with specified border radius', () => {
    const { getByTestId } = render(<Placeholder borderRadius="10px" />);
    const placeholder = getByTestId('placeholder');
    expect(placeholder).toHaveStyle('border-radius: 10px');
  });

  it('renders with text when provided', () => {
    const { getByText } = render(<Placeholder text="Loading..." />);
    const textElement = getByText('Loading...');
    expect(textElement).toBeInTheDocument();
  });

  it('does not render text when not provided', () => {
    const { queryByText } = render(<Placeholder />);
    const textElement = queryByText('Loading...');
    expect(textElement).not.toBeInTheDocument();
  });
});
