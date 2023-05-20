// import { useRef } from "react";
// import { StyledLink } from "./UserCardsList.styled";

import UserCard from "../UserCard/UserCard";
import './'

const UserCardsList = () => {
    // const backLinkLocationRef = useRef(location.state?.from);

    return (
        // <StyledLink to={backLinkLocationRef.current}>Go back</StyledLink>
        <ul>
            <UserCard />
        </ul>
    )
};

export default UserCardsList;