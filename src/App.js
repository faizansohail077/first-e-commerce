import './App.css';
import Header from './components/Header/Header';
import Home from './Screens/Home/Home';
import Signin from './Screens/SignIn/Signin';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Signup from './Screens/Signup/Signup';
import Checkout from './Screens/Checkout/Checkout2';
import Details from './Screens/Details/Details';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { auth, createUserProfileDocument } from './firebase';
import db from './firebase';


import Dashboard from './Screens/Dashboard/Dashboard';
import { data } from './data';


function App() {
  const value = useSelector(state => state.CartReducer)
  let { user } = useSelector(state => state.CartReducer)
  let user2 = user
  console.log('this is new user', user2)
  console.log('this is user id', user2?.id)
  let [userdata, setUserData] = useState({ user2 })
  const dispatch = useDispatch()



  useEffect(() => {
    const unSubscribe = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth)
        dispatch({ type: 'LOGIN', payload: { name: userAuth.displayName, email: userAuth.email, id: userAuth.uid, userAuth } })
        userRef.onSnapshot(async snapshot => {
          await setUserData({
            id: snapshot.id,
            ...snapshot.data()
          }
          )
        })

        console.log('this is userAuth', userAuth, userAuth.email)

      } else {
        dispatch({ type: 'LOGOUT' })
      }
    })
    return unSubscribe
  }, [dispatch])

  // useEffect(() => {
  // }, [])

  const sendData = () => {
    db.collection('products').doc().set(data)
  }


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
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/">
            {/* <button onClick={() => sendData()}>Send data</button> */}
            <Home />
          </Route>

        </Switch>
      </Router>

    </div>
  );
}

export default App;
