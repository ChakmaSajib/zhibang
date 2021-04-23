import React from 'react';
import Routes from './routes/routes.js';
import './assets/App.scss';
import { Provider } from 'react-redux';
import store, { history } from './stores/store';
import ReactNotificationsComponent from 'react-notifications-component';

import { ConnectedRouter } from 'connected-react-router';

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div className='App'>
          <ReactNotificationsComponent />
          <Routes />
        </div>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
