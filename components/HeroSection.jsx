/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import styled from 'styled-components';
import { StyledContainer } from '../styles/globals';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10rem;
  margin: 4rem 0;

  .img-content {
    padding: 3rem 6rem;
    width: 100%;

    .img img {
      width: 650px;
      height: 700px;
      border-radius: 15px;
      margin-bottom: 3rem;
    }

    .img-cards {
      display: flex;
      gap: 2rem;

      div img {
        border-radius: 10px;
        width: 150px;
        height: 150px;
      }
    }
  }

  @media (max-width: 375px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;

    .img-cards div img {
      display: none;
    }
  }
`;

const StyledHeroContents = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 2rem; */
  align-items: space-between;
  justify-content: flex-start;
  margin-bottom: 20rem;

  .company {
    font-size: 2rem;
    color: var(--primary-color);
    text-transform: uppercase;
    margin-bottom: 2rem;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 3.5rem;
    margin-bottom: 2rem;
    letter-spacing: 1.2px;
    line-height: 1.3;
    color: var(--vary-blue-color);
  }

  .text {
    font-size: 2rem;
    margin-bottom: 2rem;
    line-height: 1.5;
    color: var(--vary-blue-color);
  }

  .price {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1.2rem;
    font-weight: 700;

    p {
      font-size: 2rem;
      letter-spacing: 1px;

      .percent {
        color: var(--primary-color);
        margin-left: 2rem;
        background-color: var(--secondary-color);
        padding: 1rem;
        border-radius: 5px;
        cursor: pointer;
        font-size: 1.4rem;
      }
    }

    .strike span {
      text-decoration: line-through;
      color: var(--grayish-blue-color);
      margin-bottom: 1.3rem;
    }
  }

  @media (max-width: 375px) {
    width: 100%;
    margin: 0;
  }
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  align-items: center;
  max-width: 500px;

  .btn-plus,
  .btn-minus {
    display: inline-block;
    padding: 1rem 1.2rem;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    border-radius: 5px;
    color: var(--primary-color);
    background-color: var(--secondary-color);
  }

  span {
    font-size: 2rem;
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 1.5rem 2rem;
    border: none;
    border-radius: 10px;
    background-color: var(--primary-color);
    box-shadow: 0 2px 5px 3px var(--primary-color);
    color: var(--white-color);
    cursor: pointer;

    span {
      font-size: 2.5rem;
    }

    img {
      margin-right: 2rem;
      color: #fff;
    }
  }
`;

const HeroSection = () => {
  return (
    <StyledHeader>
      <div className='img-content'>
        <div className='img'>
          <img src='/images/image-product-1.jpg' alt='product-1' />
        </div>

        <div className='img-cards'>
          <div>
            <img src='/images/image-product-2.jpg' alt='' />
          </div>
          <div>
            <img src='/images/image-product-3.jpg' alt='' />
          </div>
          <div>
            <img src='/images/image-product-4.jpg' alt='' />
          </div>
          <div>
            <img src='/images/image-product-1.jpg' alt='' />
          </div>
        </div>
      </div>

      <StyledHeroContents>
        <span className='company'>Sneakers Company</span>
        <h1>Fall Limited Edition Sneakers</h1>
        <p className='text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, in
          odio! Neque sapiente vitae iure voluptatum at esse deleniti maiores,
          voluptate numquam voluptatem itaque expedita?
        </p>
        <div className='price'>
          <p>
            {' '}
            $ 125.00 <span className='percent'>50%</span>
          </p>
          <p className='strike'>
            <span>$ 250.00</span>{' '}
          </p>
        </div>
        <StyledButtons>
          <button className='btn-plus'>+</button>
          <span> 0 </span>
          <button className='btn-minus'>-</button>

          <button className='btn'>
            <img className='cart' src='/images/icon-cart.svg' alt='cart icon' />{' '}
            <span>Add to cart</span>
          </button>
        </StyledButtons>
      </StyledHeroContents>
    </StyledHeader>
  );
};

export default HeroSection;
