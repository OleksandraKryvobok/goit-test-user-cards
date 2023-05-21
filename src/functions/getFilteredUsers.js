export const getFilteredUsers = (users, filterValue) => {
    switch (filterValue) {
        case 'Follow':
            return users.filter(user => !user.isFollowing);
        
        case 'Following':
            return users.filter(user => user.isFollowing);

        default:
            return users;
    };
};

