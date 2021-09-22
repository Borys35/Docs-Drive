import Modal from "react-modal";
import { createGlobalStyle } from "styled-components";
import theme from "./theme";

Modal.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: `${theme.colors.black}88`,
  },
  content: {
    position: "absolute",
    backgroundColor: `${theme.colors.background}`,
    boxShadow: `0 0 24px ${theme.colors.black}22`,
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    border: `1px solid ${theme.colors.grey}`,
    borderRadius: ".5rem",
    outline: "none",
    padding: "2rem",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
};

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: ${({ theme }) => theme.fontFamilies.body};
  }

  body {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.black}
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.black};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fontFamilies.heading}
  }

  h1 {
    font-size: 3rem;
  }

  h2 {
    font-size: 2.75rem;
  }

  h3 {
    font-size: 2.5rem;
  }

  h4 {
    font-size: 2rem;
  }

  h5 {
    font-size: 1.75rem;
  }

  h6 {
    font-size: 1.5rem;
  }
`;

export default GlobalStyle;
