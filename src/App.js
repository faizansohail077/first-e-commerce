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
import { auth,createUserProfileDocument } from './firebase';


function App() {
  const value = useSelector(state => state.CartReducer)
  let { user } = useSelector(state => state.CartReducer)

 


  const dispatch = useDispatch()
  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        createUserProfileDocument(userAuth)
        console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaa',userAuth)
        dispatch({ type: 'LOGIN', payload: { name: userAuth.displayName, email: userAuth.email } })
        // console.log(userAuth, userAuth.displayName,userAuth.email)
      } else {
        dispatch({ type: 'LOGOUT' })
        alert('no account')
      }
    })
    return unSubscribe
  }, [dispatch])


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
