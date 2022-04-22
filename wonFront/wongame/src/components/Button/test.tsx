import { screen } from '@testing-library/react';
import { renderWhitTheme } from 'utils/test/helpers';
import { AddShoppingCart } from '@styled-icons/material/AddShoppingCart';
import Button from '.';

describe('Button', () => {
  it('should render medium size bottom by default ', () => {
    const { container } = renderWhitTheme(<Button>Buy Now</Button>);
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '4rem',
      padding: '0.8rem 3.2rem',
      'font-size': '1.4rem'
    });
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render small size bottom when passed ', () => {
    renderWhitTheme(<Button size="small">Buy Now</Button>);
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      height: '3rem',
      'font-size': '1.2rem'
    });
  });
  it('should render large size bottom when passed ', () => {
    renderWhitTheme(<Button size="large">Buy Now</Button>);
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      padding: '0.8rem 4.8rem',
      height: '5rem',
      'font-size': '1.6rem'
    });
  });
  it('should render a fullwidth version ', () => {
    renderWhitTheme(<Button fullWidth>Buy Now</Button>);
    expect(screen.getByRole('button', { name: /Buy now/i })).toHaveStyle({
      width: '100%'
    });
  });
  it('should render a icon version ', () => {
    renderWhitTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />}>Buy Now</Button>
    );
    expect(screen.getByText(/Buy now/i)).toBeInTheDocument();
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });
  it('should render a miniaml version ', () => {
    renderWhitTheme(
      <Button icon={<AddShoppingCart data-testid="icon" />} minimal>
        Buy Now
      </Button>
    );
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyle({
      background: 'none',
      color: '#f231a5'
    });
    expect(screen.getByRole('button', { name: /buy now/i })).toHaveStyleRule(
      'background',
      'none',
      {
        modifier: ':hover'
      }
    );
  });
  it('should render Button as link', () => {
    const { debug, container } = renderWhitTheme(
      <Button as="a" href="/link">
        Buy now
      </Button>
    );
    debug(container);
    expect(screen.getByRole('link', { name: /buy now/i })).toHaveAttribute(
      'href',
      '/link'
    );
  });
});
