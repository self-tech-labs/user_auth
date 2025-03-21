import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import {auth} from './firebase'
import {onAuthStateChanged} from 'firebase/auth'
import {AuthProvider} from './AuthContext'
import Profile from './Profile'
import Register from './Register'
import VerifyEmail from './VerifyEmail';
import Login from './Login'
import PrivateRoute from './PrivateRoute'

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  useEffect (() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  const [timeActive, setTimeActive] = useState(false)

  return (
    <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
      <Switch>
        <PrivateRoute exact path="https://iterator-dashboard.netlify.app/" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path='/verify-email' component={VerifyEmail} /> 
      </Switch>
      </AuthProvider>
  </Router>
  );
}

export default App;
