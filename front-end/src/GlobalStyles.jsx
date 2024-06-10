import { Global, css } from "@emotion/react";

const GlobalStyles = () => (
  <Global
    styles={css`
      h2 {
        font-size: 2rem;
      }
      p,
      label {
        font-size: 1.25rem;
      }
      body {
        margin: 0;
        font-family: "Avenir", sans-serif;
        width: 100%;
        box-sizing: border box;
        background: rgb(119, 84, 158);
        background: linear-gradient(
          354deg,
          rgba(119, 84, 158, 1) 0%,
          rgba(165, 170, 170, 1) 100%
        );
        button {
          display: inline-block;
          outline: none;
          cursor: pointer;
          font-size: 14px;
          line-height: 1;
          border-radius: 500px;
          transition-property: background-color, border-color, color, box-shadow,
            filter;
          transition-duration: 0.3s;
          border: 1px solid transparent;
          letter-spacing: 2px;
          min-width: 160px;
          text-transform: uppercase;
          white-space: normal;
          font-weight: 700;
          text-align: center;
          padding: 10px 48px;
          color: #fff;
          background-color: #66d88e;
          margin-top: 15px;
          :hover {
            transform: scale(1.04);
            background-color: #21e065;
          }
        }
        input {
          padding: 6px 12px;
          background: rgb(31, 32, 35);
          border: 1px solid rgb(60, 63, 68);
          border-radius: 5rem;
          font-size: 13px;
          color: rgb(247, 248, 248);
          height: 25px;
          appearance: none;
          transition: border 0.15s ease 0s;
          :focus {
            outline: none;
            box-shadow: none;
            border-color: rgb(100, 153, 255);
          }
        }
      }
    `}
  />
);

export default GlobalStyles;
