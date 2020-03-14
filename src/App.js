import React, {useState} from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/NavBar";

import HomePage from './Pages/Home'
import CounterPage from "./Pages/CounterPage";

const wrapperStyle = {
  marginTop: '40px'
}

const navItems = [
  { navText: "Home", navLink: "" },
  { navText: "Counter", navLink: "Counter" }
];
function App() {
  const [isHidden, setHidden] = useState(true);

  const mobileMenuHandler = () => {
    setHidden(!isHidden)
  }

  return (
    <div className="App container">
      <h1 className="display-3">Axios Demo</h1>
      <p className="lead text-muted">Welcome to React World !</p>
      <NavBar navItems={navItems} isHidden={isHidden} mobileMenuHandler={mobileMenuHandler}/>
      <div className="content-wrapper" style={wrapperStyle}>
        <Switch>
          <Route path="/" exact component={() => <HomePage/>}/>
          <Route path="/Counter"  exact component={() => <CounterPage/>}/>
        </Switch>
      </div>
    </div>
  );
}

export default App;
