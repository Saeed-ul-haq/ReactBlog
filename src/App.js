import React, { Component } from 'react';
import {HashRouter } from "react-router-dom";


import Blog from './containers/Blog/Blog';

class App extends Component {
  render() {
    return (
      // <BrowserRouter basename="/my-app"></BrowserRouter>
      <HashRouter>
      <div className="App">
        <Blog />
      </div>
      </HashRouter>
    );
  }
}

export default App;
