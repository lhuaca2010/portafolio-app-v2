import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';

import NotFound from './containers/NotFound/NotFound';

class App extends React.Component {
  render() {
    return (
      <>
        <HashRouter>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route component={NotFound} />
          </Switch>
        </HashRouter>
      </>
    );
  }
}
export default App;
