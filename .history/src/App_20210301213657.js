import React from "react"
import Routes from "./pages/routes/routes.js"
import './App.css';
import { Provider } from "react-redux";
import store, { history } from "./stores/store";

function App() {
  return (
    <Provider store={store}>
  <ConnectedRouter history={history}>
    <div className="App">
      <Routes/>
    </div>
    </ConnectedRouter>
    </Provider>
    
  );
}

export default App;
