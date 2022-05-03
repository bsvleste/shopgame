import { forwardRef, AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
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

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  {
    minimal = false,
    children,
    size = 'medium',
    fullWidth = false,
    icon,
    ...props
  },
  ref
) => (
  <S.Wrapper
    ref={ref}
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
export default forwardRef(Button);
