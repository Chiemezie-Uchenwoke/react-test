import UserSearch from "../components/UserSearch/UserSearch";
import { Link } from "react-router";

const Users = () => {
    return (
        <>  
            <UserSearch />
            <Link to={"/"} className="underline">Return Home</Link>
        </>
    )
};

export default Users;