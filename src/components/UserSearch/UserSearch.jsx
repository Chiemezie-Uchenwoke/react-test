import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../../apis/getUsers";
import UserList from "./UserList";

const UserSearch = () => {
    const [users, setUsers] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const getUserData = async () => {
            const data = await getUsers();
            console.log(data);
            setUsers(data);
        }
        getUserData()
    }, []);

    const filteredUsers = useMemo(() => {
        if (!searchTerm) return users;

        return users.filter(user => user.username === searchTerm);
    }, [users, searchTerm]);

    return (
        <div className="flex flex-col items-center overflow-auto">
            <input 
                type="search" 
                placeholder="search..." 
                className="border outline-0 w-full max-w-[30rem] h-10 px-4 rounded-2xl"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <UserList 
                listItem={filteredUsers}
            />
        </div>
    )
};

export default UserSearch;