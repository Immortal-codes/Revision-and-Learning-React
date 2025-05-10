import React, { useState } from 'react';

function CounterApp() {

    const [count, setCount] = useState(0);


    const handleIncrement = () => {
        setCount(count + 1);
    };


    const handleDecrement = () => {
        setCount(count - 1);
    };

    return (
        <div style={styles.container}>
            <h1>Counter App</h1>
            <h2>{count}</h2>
            <div>
                <button onClick={handleDecrement} style={styles.button}>-</button>
                <button onClick={handleIncrement} style={styles.button}>+</button>
            </div>
        </div>
    );
}

// Inline styles
const styles = {
    container: {
        textAlign: 'center',
        marginTop: '50px',
    },
    button: {
        padding: '10px 20px',
        margin: '10px',
        fontSize: '20px',
        cursor: 'pointer',
    },
};

export default CounterApp;
