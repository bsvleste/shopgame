import { screen } from '@testing-library/react';
import GameDetails, { GameDetailsProps } from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';

const props: GameDetailsProps = {
  developer: 'different tales',
  platforms: ['linux', 'windows', 'mac'],
  releaseDate: '2020-11-19T23:00:00',
  rating: 'BR0',
  genres: ['action', ' violence']
};
describe('GameDetails', () => {
  it('shoud render the Blocks', () => {
    renderWhitTheme(<GameDetails {...props} />);
    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument();
  });
  it('should render platforms icons', () => {
    renderWhitTheme(<GameDetails {...props} />);
    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument();
  });
  it('should render the formmated date', () => {
    renderWhitTheme(<GameDetails {...props} />);
    expect(screen.getByText('Nov 16, 2019')).toBeInTheDocument();
  });
  it('should render the free rating when BR0', () => {
    renderWhitTheme(<GameDetails {...props} />);
    expect(screen.getByText(/free/i)).toBeInTheDocument();
  });
  it('should render the 18+ rating when BR18', () => {
    renderWhitTheme(<GameDetails {...props} rating="BR18" />);
    expect(screen.getByText(/18\+/i)).toBeInTheDocument();
  });
  it('should render a list of genres', () => {
    renderWhitTheme(<GameDetails {...props} rating="BR18" />);
    expect(screen.getByText('action')).toBeInTheDocument();
  });
});
