import React from "react";

const StatusBadge = ({ isOnline }) => {
    
    return (
        <div>
            {isOnline ? (
                <p style={{ color: "green" }}>🟢 Online</p>
            ) : (
                <p style={{ color: "red" }}>🔴 Offline</p>
            )}
        </div>
    );
};

export default StatusBadge;
