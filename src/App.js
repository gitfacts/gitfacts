import React from 'react';
import './App.css';
import Panel from './Panel';
import Graph from './Graph.js';
import {TOKEN} from "./secrets"

import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const apiURL = "https://api.github.com/graphql"

const httpLink = createHttpLink({
  uri: apiURL,
});

const authLink = setContext((_, { headers }) => {
  const token = TOKEN  
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    }
  }
});

function App() {
  const gitAPIclient = new ApolloClient({
    link: authLink.concat(httpLink),
  cache: new InMemoryCache()
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
