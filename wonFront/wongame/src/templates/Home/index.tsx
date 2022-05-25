import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import { GameCardProps } from 'components/GameCard';
import { HighligthProps } from 'components/Highlight';
import Showcase from 'components/Showcase';
import Base from 'templates/Base';
import * as S from './styles';

export type HomeTemplateProps = {
  banner: BannerProps[];
  newGames: GameCardProps[];
  mostPopularHighligth: HighligthProps;
  mostPopularGame: GameCardProps[];
  upcommingGames: GameCardProps[];
  upcommingHighligth: HighligthProps;
  upcommingMoreGames: GameCardProps[];
  freeGames: GameCardProps[];
  freeHighligth: HighligthProps;
};
const Home = ({
  banner,
  newGames,
  mostPopularGame,
  mostPopularHighligth,
  upcommingMoreGames,
  upcommingHighligth,
  upcommingGames,
  freeGames,
  freeHighligth
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banner} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="New" games={newGames} />
    </S.SectionNews>
    <Showcase
      title="Most Popular"
      highlight={mostPopularHighligth}
      games={mostPopularGame}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcomming" games={upcommingGames} />
      <Showcase highlight={upcommingHighligth} games={upcommingMoreGames} />
    </S.SectionUpcoming>
    <Showcase title="Free Game" highlight={freeHighligth} games={freeGames} />
  </Base>
);

export default Home;
