import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import 'jest-styled-components';

type ReactIntl = {
  formatNumber: jest.Mock<string>;
  formatMessage: jest.Mock<string>;
};

jest.mock('react-intl', () => {
  const getDefaultFormatNumber = (value: number, options: Intl.NumberFormatOptions): string => {
    return new Intl.NumberFormat(undefined, options).format(value);
  };

  const getDefaultFormatMessage = ({ defaultMessage }: { defaultMessage: string }): string => {
    return defaultMessage;
  };

  return {
    useIntl: (): ReactIntl => ({
      formatNumber: jest.fn(getDefaultFormatNumber),
      formatMessage: jest.fn(getDefaultFormatMessage),
    }),
  };
});

jest.mock('react-router-dom', () => ({
  useHistory: jest.fn(),
  useLocation: jest.fn(),
}));
