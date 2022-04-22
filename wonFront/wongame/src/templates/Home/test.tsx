import { render, screen } from '@testing-library/react';
import Home from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';

describe('Home', () => {
  it('shoud render menu and footer', () => {
    renderWhitTheme(<Home />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument();
  });
  it('should render the sections', () => {
    renderWhitTheme(<Home />);
    expect(
      screen.getByRole('heading', { name: /Most popular/i })
    ).toBeInTheDocument();
  });
});
