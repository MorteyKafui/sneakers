/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/link-passhref */
import Link from 'next/link';
import styled from 'styled-components';
import { StyledContainer } from '../styles/globals';

const MobileNav = styled.nav`
  @media (max-width: 375px) {
    display: block;
    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.06);
    padding: 1.2rem 0;

    .menu-items {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 5rem;

      h1 {
        font-size: 6rem;
      }

      .cog img {
        width: 30px;
        margin-left: 4rem;
      }

      .user img {
        width: 80px;
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
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
