import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../Header';

describe('Header component', () => {
  it('renders the header content correctly', () => {
    const { getByText } = render(<Header />);

    const expectedHeaderContent = 'home24';
    expect(getByText(expectedHeaderContent)).toBeInTheDocument();
  });

  it('renders the LanguageSelector component', () => {
    const { getByTestId } = render(<Header />);

    const languageSelectorComponent = getByTestId('language-selector');
    expect(languageSelectorComponent).toBeInTheDocument();
  });
});
