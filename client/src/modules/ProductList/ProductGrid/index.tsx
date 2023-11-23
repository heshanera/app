import React, { ReactElement, useState } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import ArticleCard from '../../../components/ArticleCard';
import EmptyView from '../../../components/EmptyView';
import Placeholder from '../../../components/Placeholder';
import Search from '../../../components/Search';
import useProductFilter from '../../../hooks/useProductFilter';
import { Article, Category } from '../../../types';
import { ProductGridWrapper } from './style';

type Props = {
  category: Category | null;
  isLoading: boolean;
};

const articles: Article[] = [];

const ProductGrid: React.FC<Props> = ({ category, isLoading }) => {
  const { formatMessage }: { formatMessage: IntlShape['formatMessage'] } = useIntl();

  const [searchText, setSearchText] = useState<string>('');

  const filteredProducts: Article[] = useProductFilter(searchText, category?.categoryArticles?.articles || articles);

  const renderPlaceholder = (): ReactElement => {
    const placeholderCards: number[] = Array.from({ length: 20 }, (_, index: number) => index);

    return (
      <div>
        <h2>
          <Placeholder width="50%" height="50px" borderRadius="12px" />
        </h2>
        <div className="product-grid">
          {placeholderCards.map((_, index: number) => (
            <Placeholder key={index} width="minmax(250px, 1fr)" height="400px" borderRadius="12px" />
          ))}
        </div>
      </div>
    );
  };

  const renderProductGrid = (): ReactElement => (
    <div>
      <div className="grid-header">
        <h2>{`${category?.name || ''} (${category?.articleCount || 0})`}</h2>
        <Search searchText={searchText} setSearchText={setSearchText} />
      </div>
      {filteredProducts?.length > 0 ? (
        <div className="product-grid">
          {filteredProducts.map((article: Article, index: number) => (
            <ArticleCard key={`${article?.name}-${index}`} article={article} />
          ))}
        </div>
      ) : (
        <EmptyView
          headerText={formatMessage({
            id: 'noProducts',
            defaultMessage: 'No Products',
          })}
          subText={formatMessage({
            id: 'noProductsSubMessage',
            defaultMessage: 'No products available for the selected category',
          })}
        />
      )}
    </div>
  );

  return <ProductGridWrapper>{isLoading ? renderPlaceholder() : renderProductGrid()}</ProductGridWrapper>;
};

export default ProductGrid;
