import { lazy } from "react";

const UserCardsList = lazy(() => import('../components/UserCardsList/UserCardsList'))

const Tweets = () => {
    return (
        <UserCardsList />
    );
};

export default Tweets;