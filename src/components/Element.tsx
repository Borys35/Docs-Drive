import styled from "styled-components";

const Element = styled.div<{ primary?: boolean; hoverable?: boolean }>`
  background-color: ${({ theme, primary = false }) =>
    primary ? theme.colors.primary : theme.colors.backgroundLight};
  box-shadow: 0 0 1rem ${({ theme }) => `${theme.colors.black}12`};
  color: ${({ theme, primary = false }) =>
    primary && theme.colors.backgroundLight};
  border-radius: 0.5em;
  border: ${({ theme, primary }) =>
    !primary ? `1px solid ${theme.colors.grey}` : "none"};
  outline: none;
  cursor: ${({ hoverable = false }) => (hoverable ? "pointer" : "auto")};
  transition: box-shadow 0.15s ease-in-out, transform 0.15s ease-in-out;

  &:hover {
    box-shadow: ${({ theme, hoverable = false }) =>
      hoverable && `0 0 1rem ${theme.colors.black}32`};
    transform: ${({ hoverable = false }) => hoverable && "translateY(-2px)"};
  }
`;

export default Element;
