import { screen } from '@testing-library/react';
import { renderWhitTheme } from 'utils/test/helpers';

import Footer from '.';

describe('Footer', () => {
  it('should rende 4 column topics', () => {
    const { container } = renderWhitTheme(<Footer />);
    expect(
      screen.getByRole('heading', { name: /contact/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /follow us/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /links/i })).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /location/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
