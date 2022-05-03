import { screen } from '@testing-library/react';
import Auth from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';

describe('Auth', () => {
  it('shoud render logos, title,children', () => {
    renderWhitTheme(
      <Auth title="auth title">
        <input type="text" />
      </Auth>
    );
    expect(screen.getAllByRole('img', { name: /won games/i })).toHaveLength(2);
    expect(
      screen.getByRole('heading', {
        name: /All your favorite games in one place/i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', {
        name: /won is the best and most complete gaming platform./i
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { name: /auth title/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
