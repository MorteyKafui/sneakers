/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styled from 'styled-components';
import { StyledContainer } from '../styles/globals';

const MobileNav = styled.nav`
  .menu-items {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .cog {
      font-size: 2rem;
    }

    h1 {
      font-size: 4rem;
      justify-self: flex-start;
      cursor: pointer;
    }

    .user img {
      width: 30px;
      cursor: pointer;
    }

    @media (max-width: 375px) {
      .menu-items {
        display: block;
      }
    }
  }
`;

const Menu = () => {
  return (
    <MobileNav>
      <StyledContainer>
        <div className='menu-items'>
          <div className='cog'>
            <img src='/images/icon-menu.svg' alt='menu' />
          </div>
          <Link href='/'>
            <h1>sneakers</h1>
          </Link>
          <div className='cart'>
            <img src='/images/icon-cart.svg' alt='cart' />
          </div>
          <div className='user'>
            <img src='/images/image-avatar.png' alt='avatar' />
          </div>
        </div>
      </StyledContainer>
    </MobileNav>
  );
};

export default Menu;
