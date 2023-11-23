import React, { ChangeEvent, Dispatch } from 'react';
import { useIntl } from 'react-intl';
import { useTheme } from '../../hooks/useTheme';
import { SearchWrapper } from './style';

type Props = {
  searchText: string;
  setSearchText: Dispatch<React.SetStateAction<string>>;
};

const Search: React.FC<Props> = ({ searchText, setSearchText }) => {
  const { formatMessage } = useIntl();
  const { theme } = useTheme();

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchText(event.target.value);
  };

  return (
    <SearchWrapper theme={theme}>
      <input
        id="product-name-search"
        className="search-input"
        type="text"
        value={searchText}
        placeholder={formatMessage({
          id: 'search',
          defaultMessage: 'Search',
        })}
        onChange={handleSearchTextChange}
      />
    </SearchWrapper>
  );
};

export default Search;
