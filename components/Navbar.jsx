/* eslint-disable @next/next/link-passhref */
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import styled from 'styled-components';
import { StyledContainer } from '../styles/globals';
import Menu from '../components/Menu';
import { useState } from 'react';

const StyledNav = styled.nav`
  background-color: var(--white-color);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
  min-height: 6vh;
  padding: 2rem;
`;

const StyledContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;

  h1 {
    color: var(--vary-blue-color);
    font-size: 3.2rem;
    font-weight: 700;
    text-transform: lowercase;
    cursor: pointer;
  }

  ul {
    display: flex;
    list-style: none;
    font-size: 2rem;
  }

  ul li a {
    color: var(--grayish-blue-color);
    padding: 1.2rem 2.4rem;
    text-decoration: none;
    transition: all 0.3s ease-in;

    &:hover {
      color: var(--dark-grayish-color);
    }
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 15rem;

    .cart img {
      font-size: 3rem;
      cursor: pointer;

      &:hover img {
        color: var(--dark-grayish-color);
      }
    }

    .avatar img {
      margin-left: 4rem;
      cursor: pointer;
      width: 50px;
    }
  }

  @media (max-width: 375px) {
    display: none;
  }
`;

const Navbar = () => {
  return (
    <>
      <StyledNav>
        <StyledContainer>
          <StyledContent>
            <Link href='/'>
              <h1>Sneakers</h1>
            </Link>
            <ul>
              <li>
                <Link href='/collections'>Collections</Link>
              </li>
              <li>
                <Link href='/men'>Men</Link>
              </li>
              <li>
                <Link href='/about'>About</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <div className='profile'>
              <div className='cart'>
                <img src='/images/icon-cart.svg' alt='cart' />
              </div>

              <div className='avatar'>
                <img src='/images/image-avatar.png' alt='avatar' />
              </div>
            </div>
          </StyledContent>
        </StyledContainer>
      </StyledNav>
      <Menu />
    </>
  );
};

export default Navbar;
