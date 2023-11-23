import React, { ReactNode } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { useHistory, RouteComponentProps, useLocation } from 'react-router-dom';
import Placeholder from '../../../components/Placeholder';
import { useTheme } from '../../../hooks/useTheme';
import { ArticleCategory, ThemeContextProps } from '../../../types';
import { getCurrentUrlPath } from '../../../utils/locationUtils';
import { CategoriesListWrapper } from './style';

type Props = {
  categoriesList: ArticleCategory[];
  isLoading: boolean;
};

const CategoriesList: React.FC<Props> = ({ categoriesList, isLoading }) => {
  const history: RouteComponentProps['history'] = useHistory();
  const location: RouteComponentProps['location'] = useLocation();
  const { theme }: ThemeContextProps = useTheme();

  const currentCategoryPath: string = getCurrentUrlPath(location?.pathname);

  const { formatMessage }: { formatMessage: IntlShape['formatMessage'] } = useIntl();

  const handleCategoryNavigation = (urlPath: string) => (): void => {
    history.push(`/catalog/${urlPath}`);
  };

  const renderPlaceholder = (): ReactNode => (
    <div>
      <Placeholder width="100%" height="calc(100vh - 300px)" borderRadius="12px" />
    </div>
  );

  const renderCategoriesList = (): ReactNode => (
    <>
      <h3 className="category-header">{`${formatMessage({ id: 'categories', defaultMessage: 'Categories' })}`}</h3>
      <hr />
      <ul className="category-list">
        {categoriesList?.map((category: ArticleCategory) => (
          <li
            className={category?.urlPath === currentCategoryPath ? 'active' : ''}
            key={category?.urlPath}
            onClick={handleCategoryNavigation(category?.urlPath)}
            role="button"
          >
            <div>{category?.name}</div>
          </li>
        ))}
      </ul>
    </>
  );

  const renderCategoriesDropdown = (): ReactNode => (
    <select id="category-dropdown" defaultValue="">
      <option value="" disabled>
        {`${formatMessage({ id: 'categories', defaultMessage: 'Categories' })}`}
      </option>
      {categoriesList.map((option: ArticleCategory) => (
        <option
          data-testid="category-dropdown-option"
          onClick={handleCategoryNavigation(option?.urlPath)}
          key={option?.urlPath}
          value={option?.urlPath}
        >
          {option?.name}
        </option>
      ))}
    </select>
  );

  return (
    <CategoriesListWrapper theme={theme}>
      <div data-testid="categories-list-view" className="categories-list-view">
        {isLoading ? renderPlaceholder() : renderCategoriesList()}
      </div>
      <div className="categories-dropdown-view">{isLoading ? renderPlaceholder() : renderCategoriesDropdown()}</div>
    </CategoriesListWrapper>
  );
};

export default CategoriesList;
