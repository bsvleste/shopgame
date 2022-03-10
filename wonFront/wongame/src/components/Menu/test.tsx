import { fireEvent, screen } from '@testing-library/react';
import { renderWhitTheme } from 'utils/test/helpers';

import Menu from '.';

describe('<Menu/>', () => {
  it('shoud render the Menu', () => {
    renderWhitTheme(<Menu />);
    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/search icon/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/shopping car icon/i)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument();
  });
  it('shoud handle the opec/close mobile menu', () => {
    renderWhitTheme(<Menu />);
    //selecionar o menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true });
    //verificar se o menu esta escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
    //clicar no botao de abrir o menu e verificar se ele abriu
    fireEvent.click(screen.getByLabelText(/open menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({ opacity: 1 });
    //clicar no botao de fechar o menu e verificar se o menu fechou
    fireEvent.click(screen.getByLabelText(/Close Menu/i));
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({ opacity: 0 });
  });
  it('shoud show a register box when is log out  ', () => {
    renderWhitTheme(<Menu />);
    expect(screen.queryByText(/My Account/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Wish List/i)).not.toBeInTheDocument();
    expect(screen.getByText(/Login in now/i)).toBeInTheDocument();
    expect(screen.getByText(/Create account/i)).toBeInTheDocument();
  });
  it('shoud show whislist when login  ', () => {
    renderWhitTheme(<Menu userName="bruno" />);
    expect(screen.queryByText(/Login in now/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Create account/i)).not.toBeInTheDocument();
    expect(screen.getByText(/My Account/i)).toBeInTheDocument();
    expect(screen.getByText(/Wish List/i)).toBeInTheDocument();
  });
});
