import { screen } from '@testing-library/react';
import { renderWhitTheme } from 'utils/test/helpers';
import 'jest-styled-components';
import Ribbon from '.';

describe('Ribbon', () => {
  it('shoud render the text corrctly', () => {
    renderWhitTheme(<Ribbon>Best Seller</Ribbon>);
    expect(screen.getByText(/Best Seller/i)).toBeInTheDocument();
  });
  it('should render with primary color', () => {
    renderWhitTheme(<Ribbon>Best Seller</Ribbon>);
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#f231a5'
    });
  });
  it('should render with secondary color', () => {
    renderWhitTheme(<Ribbon color="secondary">Best Seller</Ribbon>);
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      backgroundColor: '#3cd3c1'
    });
  });
  it('should render with the normal size', () => {
    renderWhitTheme(<Ribbon>Best Seller</Ribbon>);
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '3.6rem',
      fontSize: '1.4rem'
    });
  });
  it('should render with the large size', () => {
    renderWhitTheme(<Ribbon size="small">Best Seller</Ribbon>);
    expect(screen.getByText(/Best Seller/i)).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
