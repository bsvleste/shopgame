import { screen } from '@testing-library/react';
import Showcase from '.';
import 'jest-styled-components';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';
import { renderWhitTheme } from '../../utils/test/helpers';
const props = {
  title: 'Most Popular',
  highlight: highlightMock,
  games: gamesMock.slice(0, 1)
};
describe('Showcase', () => {
  it('shoud render full Showcase', () => {
    renderWhitTheme(<Showcase {...props} />);
    expect(
      screen.getByRole('heading', { name: /Most Popular/i })
    ).toBeInTheDocument();
  });
});
