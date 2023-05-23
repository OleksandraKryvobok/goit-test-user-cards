import { Outlet } from "react-router-dom";
import { Header, Container, Nav, StyledLink, Main } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => {
    return (
        <div>
            <Header>
                <Container>
                    <Nav>
                        <StyledLink to="/">Home</StyledLink>
                        <StyledLink to="/tweets">Users</StyledLink>
                    </Nav>
                </Container>
            </Header>
            <Main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </Main>
        </div>
    );
};

export default SharedLayout;