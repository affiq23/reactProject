// component is a function, which we have to return something inside of (usually JSX template), and then we export it so we can use it in other files
import Navbar from './Navbar';
import Home from './Home';
import React from 'react';

function App() { // has to start with capital letter
  const title = "Welcome to the new blog";
  const likes = 50;
  
  return (
    <div className="App"> 
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App; // export component function so we can use it in other files
