import Head from 'next/head';

import styled from 'styled-components';
import Navbar from './Navbar';

import { StyledContainer } from '../styles/globals';

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          Sneakers | Welcome to the best place to buy affordable sneakers
        </title>
      </Head>
      <Navbar />
      <StyledContainer>{children}</StyledContainer>
    </>
  );
};

export default Layout;
