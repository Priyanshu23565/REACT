import React from 'react';

function App() {
  const imageUrl = "https://www.google.example.com/logo.png";
  const altText = "Logo";

  return (
    <div>
      <h1 className="heading">Welcome to React!</h1>
      <img src={imageUrl} alt={altText} />
      <p style={{ color: 'blue', fontSize: '18px' }}>This is a paragraph in React (JSX).</p>
      <button disabled={true}>Click Me</button>
    </div>
  );
}

export default App;
