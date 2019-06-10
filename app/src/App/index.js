import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from '../store';
import Items from '../views/Items';
import './index.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <Items />
        </div>
      </Provider>
    );
  }
}

export default App;
