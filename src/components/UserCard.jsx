// src/components/UserCard.jsx
import React from "react";

const UserCard = ({ id, name, email }) => {
    return (
        <div style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "10px",
            boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
            <h3>{id}</h3>
            <h3>{name}</h3>
            <p>{email}</p>
        </div>
    );
};

export default UserCard;
