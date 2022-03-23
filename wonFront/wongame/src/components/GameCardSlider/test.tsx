import { render, screen } from '@testing-library/react';
import GameCardSlider from '.';
import 'jest-styled-components';

describe('GameCardSlider', () => {
  it('shoud render the GameCardSlider', () => {
    const { container } = render(<GameCardSlider />);
    expect(
      screen.getByRole('heading', { name: /GameCardSlider/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
