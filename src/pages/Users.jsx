import BackBtn from "components/BackBtn/BackBtn";
import { getFilteredUsers } from "functions/getFilteredUsers";
import { lazy, useEffect, useMemo, useState } from "react";
import { fetchUser, updateUser } from "services/user-cards-api";

const UserCardsList = lazy(() => import('../components/UserCardsList/UserCardsList'));

const Users = () => {
    const [users, setUsers] = useState([]);
    const [filterValue, setFilterValue] = useState('');
    const [page, setPage] = useState(1);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        async function getUser() {
            try {
                const response = await fetchUser(page);

                if(response.length === 0) {
                    throw new Error('There are no users');
                }

                if(page === 1) {
                    setUsers(response);

                } else {
                    setUsers(users => [...users, ...response]);
                };
            } catch (error) {
                setError(error.message);
            };
        };
        
        getUser();
    }, [page]);

    const onLoadMoreBtnClick = () => {
        setPage(prevState => page + 1);
    };

    function onFollowBtnClick (userInfo) { 
        async function updateUserInfo() {
            try {
                const response = await updateUser({
                    ...userInfo,
                    isFollowing: !userInfo.isFollowing,
                    followers: userInfo.isFollowing ? userInfo.followers - 1 : userInfo.followers + 1
                });

                if(!response) {
                    throw new Error('Please try again');
                };

                const userId = users.findIndex(user => user.id === response.id);
                const newUsers = [...users];
                newUsers[userId] = response;
                setUsers(newUsers);
            } catch (error) {
                setError(error.message);
            };
        };
        
        updateUserInfo();
    };

    const filteredUsers = useMemo(
        () => getFilteredUsers(users, filterValue),
        [users, filterValue]
    );

    return (
        <>
            <BackBtn />
            {filteredUsers.length && <UserCardsList 
                users={filteredUsers}  
                onLoadMoreBtnClick={onLoadMoreBtnClick} 
                onFollowBtnClick={onFollowBtnClick}
                setFilterValue={setFilterValue} 
            />}
            {error && <p>{error}</p>}
        </>
        
    );
};

export default Users;