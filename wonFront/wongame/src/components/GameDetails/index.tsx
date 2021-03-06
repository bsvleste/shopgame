import { Apple, Windows, Linux } from '@styled-icons/fa-brands';
import Heading from 'components/Heading';
import MediaMatch from 'components/MediaMatch';
import * as S from './styles';

type Platform = 'windows' | 'linux' | 'mac';
type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18';
export type GameDetailsProps = {
  platforms: Platform[];
  developer: string;
  releaseDate: string;
  rating: Rating;
  genres: string[];
};
const GameDetails = ({
  releaseDate,
  platforms,
  developer,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Apple" size={18} />,
    windows: <Windows title="Linux" size={18} />
  };
  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary" color="white">
          Games Details
        </Heading>
      </MediaMatch>
      <S.Content>
        <S.Block>
          <S.Label>{developer}</S.Label>
          <S.Description>Gearbox software</S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Released Date</S.Label>
          <S.Description>
            {new Intl.DateTimeFormat('en-us', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Platform</S.Label>
          <S.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <S.Icon key={icon}>{platformIcons[icon]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>
        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </S.Description>
        </S.Block>
        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};
export default GameDetails;
