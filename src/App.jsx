import React, { useEffect } from 'react';
import './App.css';
import Router from './Router';

function App() {
  useEffect(() => {
    if (localStorage.getItem('Token') === null) {
      localStorage.setItem('Token', 100);
    } else if (localStorage.getItem('Token') < 0) {
      localStorage.setItem('Token', 0);
    }
  }, []);

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
