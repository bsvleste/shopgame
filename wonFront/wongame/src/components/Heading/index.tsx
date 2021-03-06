import * as S from './styles';
export type HeadingProps = {
  children: React.ReactNode;
  color?: 'white' | 'black';
  lineLeft?: boolean;
  lineBottom?: boolean;
  size?: 'small' | 'medium' | 'huge';
  lineColor?: LineColors;
};
export type LineColors = 'primary' | 'secondary';
const Heading = ({
  children,
  color = 'black',
  lineLeft = false,
  lineBottom = false,
  size = 'medium',
  lineColor = 'primary'
}: HeadingProps) => (
  <S.Wrapper
    size={size}
    color={color}
    lineBottom={lineBottom}
    lineLeft={lineLeft}
    lineColor={lineColor}
  >
    {children}
  </S.Wrapper>
);
export default Heading;
