import React from 'react';
import { render, fireEvent, RenderResult } from '@testing-library/react';
import { useLocale } from '../../../hooks/useLocale';
import LanguageSelector from '../../LanguageSelector';

jest.mock('../../../hooks/useLocale');
const mockUseLocale = useLocale as jest.Mock;

describe('LanguageSelector component', () => {
  let component: RenderResult;

  beforeEach(() => {
    mockUseLocale.mockReset();
  });

  it('renders LanguageSelector component with options', () => {
    mockUseLocale.mockReturnValue({ locale: 'de_DE', setLocale: jest.fn() });
    component = render(<LanguageSelector />);

    const { getByText } = component;

    expect(getByText('EN')).toBeInTheDocument();
    expect(getByText('DE')).toBeInTheDocument();
  });

  it('handles language change correctly', () => {
    const setLocaleMock = jest.fn();
    mockUseLocale.mockReturnValue({ locale: 'en_US', setLocale: setLocaleMock });
    component = render(<LanguageSelector />);

    const { getByRole } = component;

    const selectElement = getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'de_DE' } });

    expect(setLocaleMock).toHaveBeenCalledWith('de_DE');
  });
});
