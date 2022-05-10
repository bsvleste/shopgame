import { render, screen } from '@testing-library/react';
import Showcase from '.';
import 'jest-styled-components';

describe('Showcase', () => {
  it('shoud render the Showcase', () => {
    const { container } = render(<Showcase />);
    expect(
      screen.getByRole('heading', { name: /Showcase/i })
    ).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });
});
