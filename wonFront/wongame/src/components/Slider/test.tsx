import 'match-media-mock';
import { render, screen } from '@testing-library/react';
import Slider from '.';
import 'jest-styled-components';

describe('Slider', () => {
  it('shoud render children as slider', () => {
    const { container } = render(
      <Slider settings={{ slidesToShow: 1, infinite: false }}>
        <p>item1</p>
        <p>item2</p>
      </Slider>
    );
    expect(screen.getByText(/item1/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    );
    expect(screen.getByText(/item2/i).parentElement?.parentElement).toHaveClass(
      'slick-slide'
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
