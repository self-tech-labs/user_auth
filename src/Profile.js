import './profile.css'
import {useAuthValue} from './AuthContext'
import { signOut } from 'firebase/auth' 
import { auth } from './firebase'
import {Route, Redirect} from "react-router-dom";
import Register from './Register';


function Profile() {
  const {currentUser} = useAuthValue()

  return (
  <Route exact path="/">
    {currentUser ? <Redirect to="/iterator-dashboard.netlify.app" /> : <Register />}
  </Route>

  )
}

export default Profile