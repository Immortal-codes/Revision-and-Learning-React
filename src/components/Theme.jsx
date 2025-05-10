import React, { useState } from 'react';

function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    const styles = {
        backgroundColor: isDark ? '#1e1e1e' : '#ffffff',
        color: isDark ? '#f5f5f5' : '#1e1e1e',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        transition: 'all 0.3s ease-in-out',
    };

    return (
        <div style={styles}>
            <h1>{isDark ? 'Dark Mode 🌙' : 'Light Mode ☀️'}</h1>
            <button onClick={toggleTheme} style={{
                padding: '10px 20px',
                fontSize: '16px',
                marginTop: '20px',
                cursor: 'pointer',
            }}>
                Toggle Theme
            </button>
        </div>
    );
}

export default DarkModeToggle;
