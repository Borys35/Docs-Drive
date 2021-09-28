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
      <Children>
        {children}
        <p style={{ textAlign: "center", padding: "4rem 0 1.5rem" }}>
          &copy; {new Date().getFullYear()} Borys Kaczmarek |{" "}
          <a href="/https://github.com/Borys35/Docs-Drive" target="_blank">
            Source code
          </a>{" "}
          | <a href="mailto:boryskac10@gmail.com">E-mail</a>
        </p>
      </Children>
    </main>
  );
};

export default Layout;
