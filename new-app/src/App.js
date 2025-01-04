import React from 'react';
import './App.css'; // Import the CSS file for additional styling (optional)

function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Welcome to My React App!</h1>
    </div>
  );
}

const styles = {
  container: {
    backgroundImage: 'url(https://picsum.photos/200/300)', // Use the background image from the public folder
    animation: 'breath 4s linear infinite',
    backgroundSize: 'cover', // Ensure the image covers the entire screen
    backgroundPosition: 'center', // Center the image
    height: '100vh', // Full viewport height
    display: 'flex', // Flexbox for centering content
    justifyContent: 'center', // Center horizontally
    alignItems: 'center', // Center vertically
    color: 'white', // Text color
    textAlign: 'center', // Center text
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    margin: '0',
  },
};

export default App;
