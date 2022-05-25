import { render, screen } from '@testing-library/react';
import GameInfo from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';

const props = {
  title: 'My game Title',
  description: 'Game Description',
  price: '210.00'
};
describe('GameInfo', () => {
  it('shoud render the GameInfo with title, price and description', () => {
    renderWhitTheme(<GameInfo {...props} />);
    expect(
      screen.getByRole('heading', { name: /my game title/i })
    ).toBeInTheDocument();
    expect(screen.getByText(/\$210.00/)).toBeInTheDocument();
    expect(screen.getByText(/game description/i)).toBeInTheDocument();
  });
  it('should render gameinfo with buttons,', () => {
    renderWhitTheme(<GameInfo {...props} />);
    expect(
      screen.getByRole('button', { name: /add to cart/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /whishlist/i })
    ).toBeInTheDocument();
  });
});
