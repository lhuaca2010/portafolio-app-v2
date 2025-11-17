import React from 'react';
import { HashRouter, BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './containers/Home/Home';

import NotFound from './containers/NotFound/NotFound';

class App extends React.Component {
  render() {
    return <Home />;
  }
}
export default App;
//cambie de browser router a hashrouter -> necesario para deploy en github pages

//al final simnplemente quite "react router" no es necesario ya q es solo de 1 pagina
//ya q tiene problemas con las rutas q github pages, detecta//
