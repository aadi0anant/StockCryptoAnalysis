import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CryptoAnalysis from './components/CryptoAnalysis';
import StockAnalysis from './components/StockAnalysis';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/crypto" component={CryptoAnalysis} />
          <Route path="/stocks" component={StockAnalysis} />
          <Route path="/" exact>
            <h1>Welcome to Crypto and Stock Analysis</h1>
            <p>Select a page to view data:</p>
            <ul>
              <li><a href="/crypto">Crypto Analysis</a></li>
              <li><a href="/stocks">Stock Analysis</a></li>
            </ul>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;