import React from "react"
import Routes from "./pages/routes/routes.js"
import './App.css';
import { Provider } from "react-redux";

function App() {
  return (
    <Provider>
    <div className="App">
      <Routes/>
    </div>
    </Provider>
  );
}

export default App;
