import { Box, styled } from "@mui/material";
import logo from "../utils/logo.png";

const StyledHeader = styled("header")(() => ({
  display: "flex",
  borderBottom: "1px solid black",
  padding: "1%",
}));

const StyledImg = styled("img")(() => ({
  height: "20%",
  width: "20%",
}));

const Header = () => {
  return (
    <StyledHeader>
      <StyledImg src={logo} />
    </StyledHeader>
  );
};

export default Header;
