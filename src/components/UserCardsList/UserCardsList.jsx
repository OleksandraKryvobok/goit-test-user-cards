import PropTypes from 'prop-types';

import { lazy } from "react";
import { Container, List, Button } from "./UserCardsList.styled";

const Filter = lazy(() => import('../Filter/Filter'));
const UserCard = lazy(() => import('../UserCard/UserCard'));

const UserCardsList = ({ users, onLoadMoreBtnClick, onFollowBtnClick, setFilterValue }) => {
    return (
        <Container>
            <Filter setFilterValue={setFilterValue} />

            <List>
                {users.map(user => {
                    return(
                        <li key={user.id}>
                            <UserCard 
                                info={user} 
                                onFollowBtnClick={onFollowBtnClick} 
                            />
                        </li>
                    )
                })}
            </List>
            <Button onClick={onLoadMoreBtnClick}>Load more</Button>
        </Container>
        
        
    )
};

export default UserCardsList;

UserCardsList.propTypes = {
    users: PropTypes.array.isRequired,
    onLoadMoreBtnClick: PropTypes.func.isRequired,
    onFollowBtnClick: PropTypes.func.isRequired,
    setFilterValue: PropTypes.func,
};