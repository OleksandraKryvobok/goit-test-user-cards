import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    max-width: 1190px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
`;

export const List = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 16px;
`;

export const Button = styled.button`
    font-size: 18px;
    line-height: 22px;
    color: #EBD8FF;

    padding: 14px 56px;

    background-color: #5a3ba2;
    border: none;
    border-radius: 10px;
    cursor: pointer;

    &:hover,
    :focus {
        color: #2c2632;
        background-color: #e4ddf6;
    }
`;