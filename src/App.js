import React from 'react';
import Routes from './pages/routes/routes.js';
import './App.css';
import { Provider } from 'react-redux';
import store, { history } from './stores/store';
import { ConnectedRouter } from 'connected-react-router';
import Navbar from '../src/components/NavBar';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className='App'>
          <Navbar />
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
