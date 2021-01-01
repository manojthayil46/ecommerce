import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Order from './Components/Orders/Order';
import Register from './Components/Register/Register';
import Login from './Components/Login/Login';

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
    <Route path = "/login" exact>
        <Login /> 
      </Route>
      
          <Route path="/Dashboard" exact>
          <Header />
          <Home />
          </Route>

          <Route path="/checkout" exact>
            <Checkout />
          </Route>
          <Route path="/orders" exact>
            <Order />
          </Route>
        <Route path = "/register" exact>
        <Register /> 
      </Route>
      <Route path = "/" exact>
        <Redirect to = "/login" />
      </Route>
     </Switch>
    </div>
    </Router>
  );
}

export default App;
