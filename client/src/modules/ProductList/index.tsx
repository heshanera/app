import React, { useEffect, useState } from 'react';
import useGraphqlRequest from '../../hooks/useGraphqlRequest';
import CategoriesList from './CategoriesList';
import ProductGrid from './ProductGrid';
import { getProductListQuery } from '../../services/products/queries/productListQuery';
import { ProductListContentWrapper } from './style';
import { useLocale } from '../../hooks/useLocale';
import { Category, GraphResponse, LocaleContextType, ProductListsResponse, ProductListVariables } from '../../types';

const ProductList: React.FC = () => {
  const { locale }: LocaleContextType = useLocale();

  const [category, setCategory] = useState<Category | null>(null);
  const [variables] = useState<ProductListVariables>({
    ids: '156126',
    locale: locale,
    first: 50,
    offset: 0,
  });

  const { isLoading, data }: GraphResponse<ProductListsResponse> = useGraphqlRequest<
    ProductListsResponse,
    ProductListVariables
  >(getProductListQuery, variables);

  useEffect(() => {
    if (data?.categories) {
      setCategory(data.categories[0]);
    }
  }, [data]);

  return (
    <ProductListContentWrapper data-testid="product-list">
      <CategoriesList isLoading={isLoading} categoriesList={category?.childrenCategories?.list || []} />
      <ProductGrid category={category} isLoading={isLoading} />
    </ProductListContentWrapper>
  );
};

export default ProductList;
