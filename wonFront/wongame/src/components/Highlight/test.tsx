import { screen } from '@testing-library/react';
import Highlight from '.';
import { renderWhitTheme } from 'utils/test/helpers';
import 'jest-styled-components';
import * as S from './styles';

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg'
};

describe('Highlight', () => {
  it('shoud render the headings and button', () => {
    renderWhitTheme(<Highlight {...props} />);
    expect(
      screen.getByRole('heading', { name: /Heading 1/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole('heading', { name: /Heading 2/i })
    ).toBeInTheDocument();

    //button label
    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument();
  });
  it('shoud render the background img', () => {
    const { container } = renderWhitTheme(<Highlight {...props} />);
    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage}`
    });
  });
  it('shoud render the float img', () => {
    renderWhitTheme(<Highlight {...props} floatImage="/float-image.png" />);
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    );
  });
  it('shoud render align right floatimage by default', () => {
    const { container } = renderWhitTheme(<Highlight {...props} />);
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    );
    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${S.Content}`
    });
  });
  it('shoud render align left floatimage when passsed', () => {
    const { container } = renderWhitTheme(
      <Highlight alignment="left" {...props} />
    );
    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    );
    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${S.Content}`
    });
  });
});
