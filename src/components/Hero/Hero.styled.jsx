import { styled } from "styled-components";
import heroImg from '../../imgs/sky.jpg';

export const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 90vh;
    background-image: url(${heroImg});
    background-repeat: no-repeat;
    background-size: cover;
`;

export const Container = styled.div`
    max-width: 1190px;
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
`;

export const Title = styled.h1`
    color: #fff;
`;