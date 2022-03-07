import { screen, render } from '@testing-library/react';
import { renderWhitTheme } from '../../utils/test/helpers';
import 'jest-styled-components';
import Logo from '.';

describe('Logo', () => {
  it('shoud render a whuite label by default', () => {
    //renderizar o componentes 'render'
    renderWhitTheme(<Logo />);
    //selecionar o elemento a ser testado  'screen' (queries)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#Fafafa'
    });
    //expect
  });
  it('shoud render a black label when pass the theme', () => {
    //renderizar o componentes 'render'
    renderWhitTheme(<Logo color="black" />);
    //selecionar o elemento a ser testado  'screen' (queries)
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      color: '#030517'
    });
    //expect
  });
  it('should render a bigger logo', () => {
    //renderizar o componentes 'render'
    renderWhitTheme(<Logo size="large" />);
    //selecionar o elemento a ser testado  'screen' (queries)
    //expect
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '20rem'
    });
  });
  it('should render a render size is default', () => {
    //renderizar o componentes 'render'
    renderWhitTheme(<Logo />);
    //selecionar o elemento a ser testado  'screen' (queries)
    //expect
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyle({
      width: '11rem'
    });
  });
  it('should render a bigger logo without text if hideOnMobile', () => {
    renderWhitTheme(<Logo hiddenOnMobile />);
    expect(screen.getByLabelText(/won games/i).parentElement).toHaveStyleRule(
      'width',
      '5.8rem',
      {
        media: '(max-width: 768px)'
      }
    );
  });
});
