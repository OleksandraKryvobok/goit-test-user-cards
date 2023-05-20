import { Outlet } from "react-router-dom";
import { Header, Nav, StyledLink } from "./SharedLayout.styled";
import { Suspense } from "react";

const SharedLayout = () => {
    return (
        <div>
            <Header>
                <Nav>
                    <StyledLink to="/">Home</StyledLink>
                    <StyledLink to="/tweets">Tweets</StyledLink>
                </Nav>
            </Header>
            <main>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </div>
    );
};

export default SharedLayout;