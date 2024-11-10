import { useState } from 'react';

function Counter() {
    // Initialize state for count
    const [count, setCount] = useState(0);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p>Current Count: {count}</p>
            {/* Increment Button */}
            <button onClick={() => setCount(count + 1)} style={{ margin: '5px', padding: '10px 20px' }}>
                Increment
            </button>
            {/* Decrement Button */}
            <button onClick={() => setCount(count - 1)} style={{ margin: '5px', padding: '10px 20px' }}>
                Decrement
            </button>
            {/* Reset Button */}
            <button onClick={() => setCount(0)} style={{ margin: '5px', padding: '10px 20px' }}>
                Reset
            </button>
        </div>
    );
}

export default Counter;