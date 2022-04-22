import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import * as S from './styles';
type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>;

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  icon?: JSX.Element;
  minimal?: boolean;
  as?: React.ElementType;
} & ButtonTypes;

const Button = ({
  minimal = false,
  children,
  size = 'medium',
  fullWidth = false,
  icon,
  ...props
}: ButtonProps) => (
  <S.Wrapper
    {...props}
    minimal={minimal}
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
);
export default Button;
