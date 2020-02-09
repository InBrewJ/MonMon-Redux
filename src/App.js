import React from 'react';
import monster from './static/img/monster.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={monster} className="App-logo" alt="logo" />
        <p>
          <i>freedom from money monsters</i>
        </p>
      </header>
    </div>
  );
}

export default App;
