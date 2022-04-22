import { BannerProps } from 'components/Banner';
import BannerSlider from 'components/BannerSlider';
import { Container } from 'components/Container';
import Footer from 'components/Footer';
import { GameCardProps } from 'components/GameCard';
import GameCardSlider from 'components/GameCardSlider';
import Heading from 'components/Heading';
import Highlight, { HighligthProps } from 'components/Highlight';
import Menu from 'components/Menu';
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
  <section>
    <Container>
      <Menu />
      <S.SectionBanner>
        <BannerSlider items={banner} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          News
        </Heading>
        <GameCardSlider items={newGames} />
      </Container>
    </S.SectionNews>

    <Container>
      <S.SectionMostPopular>
        <Heading lineLeft lineColor="secondary" color="white">
          Most popular
        </Heading>
        <Highlight {...mostPopularHighligth} />
        <GameCardSlider items={mostPopularGame} color="white" />
      </S.SectionMostPopular>
      <S.SectionUpcoming>
        <Heading lineLeft lineColor="secondary" color="white">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} color="white" />
        <Highlight {...upcommingHighligth} />
        <GameCardSlider items={upcommingMoreGames} color="white" />
      </S.SectionUpcoming>
      <S.SectionFreeGames>
        <Heading lineLeft lineColor="secondary" color="white">
          Free Games
        </Heading>
        <Highlight {...freeHighligth} />
        <GameCardSlider items={freeGames} />
      </S.SectionFreeGames>
    </Container>
    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
);

export default Home;
