import { FC } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";

const Children = styled.div`
  padding: ${({ theme }) => `3rem ${theme.horizontalPadding}`};
`;

const Layout: FC = ({ children }) => {
  return (
    <main>
      <Navbar />
      <Children>{children}</Children>
      <p style={{ textAlign: "center", padding: "4rem 0 1.5rem" }}>
        &copy; {new Date().getFullYear()} Borys Kaczmarek |{" "}
        <a href="/">Source code</a> | <a href="/">E-mail</a>
      </p>
    </main>
  );
};

export default Layout;
