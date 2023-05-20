import { styled } from "styled-components";

export const Item = styled.li`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 380px;
    height: 460px;
    padding-top: 28px;

    box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
    border-radius: 20px;
    background: linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%);
`;

export const Logo = styled.img`
    position: absolute;
    top: 20px;
    left: 20px;
    width: 76px;
    height: 22px;
`;

export const Image = styled.img`
    width: 308px;
    height: 168px;
    margin-bottom: 18px;
`;

export const User = styled.img`
    position: absolute;
    top: 178px;
    left: 150px;

    width: 72px;
    height: 72px;
    /* border: 8px solid #EBD8FF;
    border-radius: 50%;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF; */
`;
    
export const Line = styled.div`
    width: 100%;
    height: 8px;
    margin-bottom: 62px;

    background-color: #EBD8FF;
    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #AE7BE3, inset 0px 3.43693px 2.5777px #FBF8FF;
`;

export const Tweets = styled.p`
    margin-bottom: 16px;
`;

export const Followers = styled.p`
    margin-bottom: 26px;
`;

export const Button = styled.button`
    font-weight: 600;
    font-size: 18px;
    line-height: 22px;
    color: #373737;

    padding: 14px 56px;

    border: none;
    border-radius: 10.31px
`;