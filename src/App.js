import './App.css';
import Header from './components/Header/Header';
import Home from './Screens/Home/Home';
import Signin from './Screens/SignIn/Signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signup from './Screens/Signup/Signup';
import Checkout from './Screens/Checkout/Checkout2';
import Details from './Screens/Details/Details';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { auth } from './firebase';


function App() {
  const user = useSelector(state => state.loginReducer)
  const dispatch = useDispatch()


  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(userAuth => {
      console.log('asdasdasdaklsdas1231l', userAuth)
      if (userAuth) {
        dispatch({ type: 'LOGIN', payload: [userAuth.uid, userAuth.email] })
        console.log(userAuth)
      } else {
        dispatch({ type: 'LOGOUT', payload: false })
      }
    })
    return unSubscribe
  }, [dispatch]
  )


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/details/:id">
            <Details />
          </Route>
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
