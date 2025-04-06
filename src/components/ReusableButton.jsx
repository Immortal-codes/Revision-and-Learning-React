// CustomButton.jsx
import React from 'react';

const CustomButton = ({ label, onClick }) => {
    return (
        <button
            onClick={onClick}
            style={{
                padding: '10px 20px',
                margin: '10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
            }}
        >
            {label}
        </button>
    );
};

export default CustomButton;
