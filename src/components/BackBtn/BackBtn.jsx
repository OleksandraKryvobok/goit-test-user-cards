import { Container, StyledLink } from "./BackBtn.styled";

const BackBtn = () => {
    return(
        <Container>
            <StyledLink to={'/'}>Go back</StyledLink>
        </Container>
    );
};

export default BackBtn;