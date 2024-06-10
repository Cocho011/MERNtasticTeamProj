import { Global, css } from '@emotion/react';

const GlobalStyles = () => (
    <Global
      styles={css`
        body {
          margin: 0;
          padding: 7%;
          font-family: Arial, sans-serif;
          width:100%;
          box-sizing: border box;
          
        }
      `}
    />
  );


export default GlobalStyles;