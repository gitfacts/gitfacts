import React from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './Panel';
import Graph from './Graph.js';

function App() {
  return (
    <div className="App">
      <aside>
        <header>
          <h1>GitFacts</h1>
        </header>
        <Panel/>
      </aside>
      <main>
        <Graph/>
        <footer>
          <p>          Made By ... ... ... ...
</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
