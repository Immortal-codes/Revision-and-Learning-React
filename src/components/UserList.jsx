// src/components/UserList.jsx
import React from "react";
import UserCard from "./UserCard";

const users = [
    { id: 1, name: "Rajan Sharma", email: "rajan@mail.com" },
    { id: 2, name: "Simran Sharma", email: "simran@mail.com" },
    { id: 3, name: "Aman Gupta", email: "aman@mail.com" },
    { id: 4, name: "Neha Verma", email: "neha@mail.com" },
    { id: 5, name: "Ravi Mehta", email: "ravi@mail.com" },
];

const UserList = () => {
    return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h2>User List</h2>
            {users.map((user) => (
                <UserCard key={""} id={user.id} name={user.name} email={user.email} />
            ))}
        </div>
    );
};

export default UserList;
