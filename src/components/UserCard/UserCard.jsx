import PropTypes from 'prop-types';

import image from '../../imgs/word-bubbles.png';
import logo from '../../imgs/logo.svg';

import { Container, Logo, Image, User, Tweets, Followers, Button, Line } from './UserCard.styled';

const UserCard = ({ info, onFollowBtnClick }) => { 
    return (
        <Container >
            <Logo src={logo} />
            <Image src={image} />
            <User src={info.avatar} />
            <Line></Line>
            <Tweets>{new Intl.NumberFormat("en-US").format(info.tweets)} TWEETS</Tweets>
            <Followers>{new Intl.NumberFormat("en-US").format(info.followers)} FOLLOWERS</Followers>
            <Button type="button" onClick={() => onFollowBtnClick(info)} >{info.isFollowing ? 'FOLLOWING' : 'FOLLOW'}</Button>
        </Container>
    );
};

export default UserCard;

UserCard.propTypes = {
    info: PropTypes.object.isRequired,
    onFollowBtnClick: PropTypes.func.isRequired,
};