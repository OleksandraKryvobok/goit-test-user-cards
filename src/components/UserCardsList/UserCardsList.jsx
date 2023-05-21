import { lazy } from "react";
import UserCard from "../UserCard/UserCard";
import { Container, List, Button } from "./UserCardsList.styled";

const Filter = lazy(() => import('../Filter/Filter'));

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