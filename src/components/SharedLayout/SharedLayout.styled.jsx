import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    padding: 24px 0;
    border-bottom: 1px solid #000;
`;

export const Container = styled.div`
    max-width: 1190px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
`;


export const Main = styled.main`
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    gap: 60px;
`;

export const StyledLink = styled(NavLink)`
    font-size: 26px;
    text-decoration: none;
    color: #000;

    &.active {
        color: #8f70d8;
    }

    &:hover, 
    :focus {
        text-decoration: underline;
    }
`;