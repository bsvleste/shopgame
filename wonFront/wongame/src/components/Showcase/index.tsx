import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import Highlight, { HighligthProps } from 'components/Highlight';
import * as S from './styles';

export type ShowcaseProps = {
  title?: string;
  highlight?: HighligthProps;
  games?: GameCardProps[];
};
const Showcase = ({ title, highlight, games }: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary" color="white">
        {title}
      </Heading>
    )}
    {!!highlight && <Highlight {...highlight} />}
    {!!games && <GameCardSlider items={games} />}
  </S.Wrapper>
);
export default Showcase;
