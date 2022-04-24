import { InputHTMLAttributes, useState } from 'react';
import * as S from './styles';
export type CheckboxProps = {
  label?: string;
  labelFor?: string;
  labelColor?: 'white' | 'black';
  isChecked?: boolean;
  onCheck?: (status: boolean) => void;
  value?: string | ReadonlyArray<string> | number;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({
  onCheck,
  isChecked = false,
  label,
  labelFor = '',
  labelColor = 'white',
  value,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  const onChange = () => {
    const status = !checked; // true => false => true
    setChecked(status);

    !!onCheck && onCheck(status);
  };
  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
        onChange={onChange}
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  );
};

export default Checkbox;
