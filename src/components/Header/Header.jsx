import { StyledLink, HeaderWrap } from "./Header.styled";

export default function Header() {
    return <HeaderWrap>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
    </HeaderWrap>
}