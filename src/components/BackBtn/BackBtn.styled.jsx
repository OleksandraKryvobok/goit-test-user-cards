import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    max-width: 1190px;
    margin-right: auto;
    margin-left: auto;
    padding: 16px 15px;
`;

export const StyledLink = styled(Link)`
    display: inline-block;
    font-size: 14px;
    color: #2c2632;
    background-color: #e5e2ed;
    border: 1px solid #c3c2c2;
    border-radius: 5px;
    padding: 4px 20px;
    cursor: pointer;
    text-decoration: none;

    &:hover,
    :focus {
        color: #EBD8FF;
        background-color: #5a3ba2;
    }
`;