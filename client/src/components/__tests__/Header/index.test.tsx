import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../../Header';

describe('Header component', () => {
  let component: RenderResult;

  beforeEach(() => {
    component = render(<Header />);
  });

  it('renders the header content correctly', () => {
    const { getByText } = component;

    const expectedHeaderContent = 'home24';
    expect(getByText(expectedHeaderContent)).toBeInTheDocument();
  });

  it('renders the LanguageSelector component', () => {
    const { getByTestId } = component;

    const languageSelectorComponent = getByTestId('language-selector');
    expect(languageSelectorComponent).toBeInTheDocument();
  });
});
