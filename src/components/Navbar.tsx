import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { RootState } from "../redux/store";
import Element from "./Element";

const StyledNavbar = styled(Element)`
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: ${({ theme }) => `1.25rem ${theme.horizontalPadding}`};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Navbar = () => {
  const loggedIn = useSelector((state: RootState) => state.auth.loggedIn);

  return (
    <StyledNavbar>
      <Link to="/">
        <h6>Docs Drive</h6>
      </Link>
      {loggedIn ? (
        <Link to="/profile">Profile</Link>
      ) : (
        <Link to="/sign-in">Sign in</Link>
      )}
    </StyledNavbar>
  );
};

export default Navbar;
