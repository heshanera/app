import React, { useState } from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { useTheme } from '../../hooks/useTheme';
import { Article, Image, ThemeContextProps } from '../../types'; // TODO: check
import { ArticleCardWrapper } from './style';

type Props = {
  article: Article;
};

const ArticleCard: React.FC<Props> = ({ article }) => {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const { theme }: ThemeContextProps = useTheme();

  const { formatNumber }: { formatNumber: IntlShape['formatNumber'] } = useIntl();
  const { formatMessage }: { formatMessage: IntlShape['formatMessage'] } = useIntl();

  const handleAddToCart = (): void => {
    // TODO: implement add to cart
  };

  const handleSelectImage = (index: number) => (): void => {
    setSelectedImage(index);
  };

  return (
    <ArticleCardWrapper theme={theme}>
      <div className="product-image">
        <img loading="lazy" alt={article?.name} src={article?.images[selectedImage].path} />
      </div>
      <div className="images-list">
        {article?.images?.map((image: Image, index: number) => (
          <section key={image?.path} onClick={handleSelectImage(index)} role="button">
            <img
              loading="lazy"
              className={index === selectedImage ? 'active' : ''}
              alt={article?.name}
              src={image?.path}
            />
          </section>
        ))}
      </div>
      <div className="product-name">{article?.name}</div>
      <div>
        {formatNumber(article?.prices?.regular?.value / 100, {
          style: 'currency',
          currency: article?.prices?.currency,
        })}
      </div>
      <button onClick={handleAddToCart} className="add-to-cart-button">
        {`${formatMessage({ id: 'addToCart', defaultMessage: 'Add to cart' })}`}
      </button>
    </ArticleCardWrapper>
  );
};

export default ArticleCard;
