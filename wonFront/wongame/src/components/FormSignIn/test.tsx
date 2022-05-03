import { screen } from '@testing-library/react';
import FormSignIn from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';

describe('FormSignIn', () => {
  it('shoud render the FormSignIn', () => {
    renderWhitTheme(<FormSignIn />);
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument();
  });
  it('shoud render the Forgot Password link', () => {
    renderWhitTheme(<FormSignIn />);
    expect(
      screen.getByRole('link', { name: /forgot yout password/i })
    ).toBeInTheDocument();
  });
  it('shoud render text to sign up if already have an account', () => {
    renderWhitTheme(<FormSignIn />);
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/dont have an account/i)).toBeInTheDocument();
  });
});
