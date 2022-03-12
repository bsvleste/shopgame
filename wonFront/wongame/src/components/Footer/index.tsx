import Link from 'next/link';
import * as S from './styles';
import Logo from '../../components/Logo';
import Heading from '../../components/Heading';
const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />
    <S.Content>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact
        </Heading>
        <a href="malito:sac@wongames.com">sac@wongames.com</a>
      </S.Column>

      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Follow us
        </Heading>
        <nav aria-labelledby="social media">
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Instagram
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Facebook
          </a>
          <a href="#" target="_blank" rel="noopenner, noreferrer">
            Twitter
          </a>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Links
        </Heading>
        <nav aria-labelledby="social media">
          <Link href="#">
            <a>Home</a>
          </Link>
          <Link href="#">
            <a>Store</a>
          </Link>
          <Link href="#">
            <a>Buscar</a>
          </Link>
          <Link href="#">
            <a>Home</a>
          </Link>
        </nav>
      </S.Column>
      <S.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Location
        </Heading>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
        <span>Lorem ipsum</span>
      </S.Column>
    </S.Content>
    <S.Copyright>@Todos os direitos reservados</S.Copyright>
  </S.Wrapper>
);
export default Footer;
