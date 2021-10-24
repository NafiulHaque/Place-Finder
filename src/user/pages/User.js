import React from "react"
import UserList from "../components/UserList";



const Users = () => {
    const USERS = [
        {
            id: 'u1',
            name: 'Nafiul Haque',
            image: 'https://firebasestorage.googleapis.com/v0/b/myapp-c3e74.appspot.com/o/82531761_171253510889533_5937920248739138889_n.jpg?alt=media&token=c17d0068-95ec-48df-bb40-2564675904ca',
            places: 3
        }]
    return <UserList items={USERS} />
};

export default Users;