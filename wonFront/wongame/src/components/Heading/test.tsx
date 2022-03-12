import { screen } from '@testing-library/react';
import { renderWhitTheme } from 'utils/test/helpers';
import 'jest-styled-components';
import Heading from '.';

describe('Heading', () => {
  it('shoud render a black heading by default', () => {
    //renderizar o componentes 'render'
    renderWhitTheme(<Heading>Won Games</Heading>);
    //selecionar o elemento a ser testado  'screen' (queries)
    //expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#030517'
    });
  });
  it('shoud render a white heading when pass', () => {
    //renderizar o componentes 'render'
    renderWhitTheme(<Heading color="white">Won Games</Heading>);
    //selecionar o elemento a ser testado  'screen' (queries)
    //expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      color: '#fafafa'
    });
  });
  it('shoud render a border heading when pass true', () => {
    //renderizar o componentes 'render'
    renderWhitTheme(<Heading lineLeft>Won Games</Heading>);
    //selecionar o elemento a ser testado  'screen' (queries)
    //expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'border-left': '0.7rem solid #F231A5'
    });
  });
  it('shoud render a border heading when pass true', () => {
    //renderizar o componentes 'render'
    renderWhitTheme(<Heading lineBottom>Won Games</Heading>);
    //selecionar o elemento a ser testado  'screen' (queries)
    //expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'border-bottom',
      '0.5rem solid #F231A5',
      {
        modifier: '::after'
      }
    );
  });
  it('shoud render a heading with a small zise', () => {
    //renderizar o componentes 'render'
    //selecionar o elemento a ser testado  'screen' (queries)
    renderWhitTheme(<Heading size="small">Won Games</Heading>);
    //expect
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyle({
      'font-size': '1.6rem'
    });
    expect(screen.getByRole('heading', { name: /won games/i })).toHaveStyleRule(
      'width',
      '3rem',
      {
        modifier: '::after'
      }
    );
  });
});
