import Button from 'components/Button';
import Heading from 'components/Heading';
import Ribbon from 'components/Ribbon';
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material';
import * as S from './styles';
export type GameInfoProps = {
  title: string;
  description: string;
  price: string;
};
const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <S.Description>{description}</S.Description>
    <S.ButtonWrapper>
      <Ribbon color="secondary">{`$${price}`}</Ribbon>
      <Button icon={<AddShoppingCart />} size="large">
        Add to Cart
      </Button>
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Whishlist
      </Button>
    </S.ButtonWrapper>
  </S.Wrapper>
);
export default GameInfo;
