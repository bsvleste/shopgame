import { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2';
import { Close as CloseIcon } from '@styled-icons/remix-line/Close';
import Logo from 'components/Logo';
import Button from 'components/Button';
import * as S from './styles';
import MediaMatch from 'components/MediaMatch';

export type MenuProps = {
  userName?: string;
};
const Menu = ({ userName }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="open menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hiddenOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="search icon" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="shopping car icon" />
        </S.IconWrapper>
        {!userName && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a" size="small">
                Sing in
              </Button>
            </Link>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink href="#">Home</S.MenuLink>
          <S.MenuLink href="#">Explore</S.MenuLink>
          {!!userName && (
            <>
              <S.MenuLink href="#">My Account</S.MenuLink>
              <S.MenuLink href="#">Wish List</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!userName && (
          <S.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <S.CreateAcount>Create account</S.CreateAcount>
            </Link>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};
export default Menu;
