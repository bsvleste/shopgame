import Link from 'next/link';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { Email, Lock } from 'styled-icons/material-outlined';
import { FormWrapper, FormLink, ForgotPassword } from 'components/Form';

const FormSignIn = () => (
  <FormWrapper>
    <form>
      <TextField
        name="email"
        placeholder="E-mail"
        type="email"
        icon={<Email />}
      />
      <TextField
        name="password"
        placeholder="Password"
        type="password"
        icon={<Lock />}
      />
      <ForgotPassword href="#">Forgot your Password?</ForgotPassword>
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLink>
        Dont have an account?{' '}
        <Link href="/sign-up">
          <a>Sign Up</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);
export default FormSignIn;
