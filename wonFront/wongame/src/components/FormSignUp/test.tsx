import { screen } from '@testing-library/react';
import FormSignUp from '.';
import 'jest-styled-components';
import { renderWhitTheme } from 'utils/test/helpers';

describe('FormSignIn', () => {
  it('shoud render the FormSignIn', () => {
    renderWhitTheme(<FormSignUp />);
    expect(screen.getByPlaceholderText(/name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/password/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Confirm password')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /sign in now/i })
    ).toBeInTheDocument();
  });
  it('shoud render text to if already have an account', () => {
    renderWhitTheme(<FormSignUp />);
    expect(screen.getByRole('link', { name: /sign up/i })).toBeInTheDocument();
    expect(screen.getByText(/Already have an account/i)).toBeInTheDocument();
  });
});
