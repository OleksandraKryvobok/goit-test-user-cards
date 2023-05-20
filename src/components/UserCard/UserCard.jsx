import { Logo, Image, User, Item, Tweets, Followers, Button, Line } from './UserCard.styled';
import image from '../../imgs/word-bubbles.png';
import logo from '../../imgs/logo.svg';
import user from '../../imgs/boy.png';

const UserCard = () => {
    return (
        <Item>
            <Logo src={logo} />
            <Image src={image} />
            <User src={user} />
            <Line></Line>
            <Tweets>777 TWEETS</Tweets>
            <Followers>FOLLOWERS</Followers>
            <Button>FOLLOW</Button>
        </Item>
    );
};

export default UserCard;