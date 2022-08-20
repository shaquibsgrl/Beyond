import "./App.css";
import HomePage from "./components/homePage/homePage";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useState } from "react";


function App() {
  const [user, setLoginUser] = useState({});
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {
            user && user._id ?  <HomePage setLoginUser={setLoginUser} /> : 
              <Login setLoginUser={setLoginUser} />
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser} />
          </Route>
          <Route path="/signup">
            <SignUp />
          
          </Route>
           
        </Switch>
      </Router>
    </div>
  );
}

export default App;
