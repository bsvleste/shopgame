import Link from 'next/link';
import Button from 'components/Button';
import TextField from 'components/TextField';
import { Email, AccountCircle, Lock } from 'styled-icons/material-outlined';
import { FormWrapper, FormLink } from 'components/Form';

const FormSignUp = () => (
  <FormWrapper>
    <form>
      <TextField icon={<AccountCircle />} name="name" placeholder="name" />
      <TextField icon={<Email />} name="email" placeholder="email" />
      <TextField icon={<Lock />} name="password" placeholder="password" />
      <TextField
        icon={<Lock />}
        name="confirmPassword"
        placeholder="Confirm password"
      />
      <Button size="large" fullWidth>
        Sign in now
      </Button>
      <FormLink>
        Already have an account?{' '}
        <Link href="/sign-in">
          <a>Sign In</a>
        </Link>
      </FormLink>
    </form>
  </FormWrapper>
);
export default FormSignUp;
