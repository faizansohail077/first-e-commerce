import './App.css';
import Header from './components/Header/Header';
import Home from './Screens/Home/Home';
import Signin from './Screens/SignIn/Signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signup from './Screens/Signup/Signup';
import Checkout from './Screens/Checkout/Checkout';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
