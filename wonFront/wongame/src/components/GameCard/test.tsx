import { fireEvent, screen } from '@testing-library/react';
import GameCard from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';
import theme from 'styles/theme';
const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: '235'
};
describe('GameCard', () => {
  it('shoud render the GameCard', () => {
    renderWhitTheme(<GameCard {...props} />);
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument();
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    );
    expect(screen.getByLabelText(/Add to WishList/i)).toBeInTheDocument();
  });
  it('should render price in label', () => {
    //renderizar o componentes
    renderWhitTheme(<GameCard {...props} />);
    const price = screen.getByText('235');

    //preco nao tenha line-through
    expect(price).not.toHaveStyle({ textDecoration: 'line-through' });
    expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary });
    //preco tenha o background secundarioa;
  });
  it('should render a line-through in price when promocioanl', () => {
    //renderizar o componentes (com promocionalPrice) //200 reais
    renderWhitTheme(<GameCard {...props} promotionalPrice={'15'} />);

    //preco tenha o line-through;
    expect(screen.getByText('235')).toHaveStyle({
      textDecoration: 'line-through'
    });
    //preco novo promocional nao vai ter line-through;
    expect(screen.getByText('15')).not.toHaveStyle({
      textDecoration: 'line-through'
    });
  });
  it('should render a filled Favorite icon when favorite is true', () => {
    //renderizar o componentes
    renderWhitTheme(<GameCard {...props} favorite />);
    expect(screen.getByLabelText(/remove from WishList/i)).toBeInTheDocument();
  });
  it('should call onFav method when fovorite is clicked', () => {
    const onFav = jest.fn();
    //renderizar o componentes
    renderWhitTheme(<GameCard {...props} favorite onFav={onFav} />);

    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(onFav).toBeCalled();
  });
  it('should render a ribbon', () => {
    renderWhitTheme(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    );
    const ribbon = screen.getByText(/My ribbon/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3cd3c1' });
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' });
  });
});
