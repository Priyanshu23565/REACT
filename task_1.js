import React, { useState } from 'react'; // useState hook import kiya

function App() {
  const [count, setCount] = useState(0); // Counter ke liye state

  // Increment function
  const increment = () => {
    setCount(count + 1); // Count ko increment karna
  };

  // Decrement function
  const decrement = () => {
    setCount(count - 1); // Count ko decrement karna
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>React Counter Example</h1>
      <h2>Current Count: {count}</h2> {/* Dynamic counter display */}
      
      {/* Increment button */}
      <button 
        onClick={increment} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'blue',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          margin: '5px'
        }}
      >
        Increment Counter
      </button>
      
      {/* Decrement button */}
      <button 
        onClick={decrement} 
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          backgroundColor: 'red',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          margin: '5px'
        }}
      >
        Decrement Counter
      </button>
    </div>
  );
}

export default App;
