import { StyledLink } from "./Header.styled";

export default function Header() {
    return <div>
        <StyledLink to="/" end>
          Home
        </StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
    </div>
}