import Button from 'components/Button';
import * as S from './styles';
export type HighligthProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: 'right' | 'left';
};
const Highlight = ({
  title,
  subtitle,
  buttonLink,
  buttonLabel,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighligthProps) => (
  <S.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <S.FloatImage src={floatImage} alt={title} />}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.SubTitle>{subtitle}</S.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
);
export default Highlight;
