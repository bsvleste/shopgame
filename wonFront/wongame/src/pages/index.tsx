import Home, { HomeTemplateProps } from 'templates/Home';
import bannersMock from 'components/BannerSlider/mock';
import gamesMock from 'components/GameCardSlider/mock';
import highlightMock from 'components/Highlight/mock';

function Index(props: HomeTemplateProps) {
  return <Home {...props} />;
}
//getStaticProps=> gera estaticos em build time
//getServeSideProps=> gera via ssr a cada request
export async function getServerSideProps() {
  return {
    props: {
      banner: bannersMock,
      newGames: gamesMock,
      mostPopularGame: gamesMock,
      mostPopularHighligth: highlightMock,
      upcommingMoreGames: gamesMock,
      upcommingHighligth: highlightMock,
      upcommingGames: gamesMock,
      freeGames: gamesMock,
      freeHighligth: highlightMock
    }
  };
}
export default Index;
//Atenção
// os metodos getStaticProps/getSeverside so funcionam em pages
