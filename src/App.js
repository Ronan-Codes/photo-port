import React from 'react';
// import logo from './logo.svg';
import './App.css';

// Components
import About from './components/About';
import Nav from './components/nav'

// JSX represents HTML
function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
