import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle` 

:root{
  --primary-color:hsl(26, 100%, 55%);
  --secondary-color:hsl(25, 100%, 94%);
  --white-color:hsl(0, 0%, 100%);
  --dark-grayish--color:hsl(219, 9%, 45%);
  --grayish-blue-color: hsl(220, 14%, 75%);
  --vary-blue-color:hsl(220, 13%, 13%)
}

 *{
   box-sizing: border-box;
   margin: 0;
   padding: 0;

 }


 html{
  font-size: 62.5%;

 }

 body{
  font-family: 'Kumbh Sans', sans-serif;
   font-weight: 400;
   background: var(--white-color);
 }

`;

export const StyledContainer = styled.div`
  padding: 0 5rem;
  max-width: 144rem;
  margin: 0 auto;
`;

export default GlobalStyles;
