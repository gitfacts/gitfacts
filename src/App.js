import React from 'react';
import './App.css';
import Panel from './Panel';
import Graph from './Graph.js';
import ApolloClient from 'apollo-boost';

const apiURL = "https://api.github.com/graphql"



function App() {
  const gitAPIclient = new ApolloClient({
    uri: apiURL
  })
  return (
    <div className="App">
      <aside>
        <header>
          <h1>GitFacts</h1>
        </header>
        <Panel />
      </aside>
      <main>
        <Graph client={gitAPIclient} />
        <footer>
          <p>          Made By ... ... ... ...
</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
