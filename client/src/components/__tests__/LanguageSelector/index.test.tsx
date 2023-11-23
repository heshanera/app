import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useLocale } from '../../../hooks/useLocale';
import LanguageSelector from '../../LanguageSelector';

jest.mock('../../../hooks/useLocale');
const mockUseLocale = useLocale as jest.Mock;

describe('LanguageSelector component', () => {
  beforeEach(() => {
    mockUseLocale.mockReset();
  });

  it('renders LanguageSelector component with options', async () => {
    mockUseLocale.mockReturnValue({ locale: 'de_DE', setLocale: jest.fn() });
    const { getByText } = render(<LanguageSelector />);

    expect(getByText('EN')).toBeInTheDocument();
    expect(getByText('DE')).toBeInTheDocument();
  });

  it('handles language change correctly', () => {
    const setLocaleMock = jest.fn();
    mockUseLocale.mockReturnValue({ locale: 'en_US', setLocale: setLocaleMock });

    const { getByRole } = render(<LanguageSelector />);

    const selectElement = getByRole('combobox');
    fireEvent.change(selectElement, { target: { value: 'de_DE' } });

    expect(setLocaleMock).toHaveBeenCalledWith('de_DE');
  });
});
