import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateCurrentUser, updateProfile } from "firebase/auth"
import { useState } from "react"
import { auth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"


export const useAuth = () => {
  
  const {dispatch} = useAuthContext();

  const [error, setError] = useState(null);

  const signup = async (email, password, displayName) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
      .then((res)=>{
        updateProfile(auth.currentUser, {
          displayName,
        })
        dispatch({type: 'LOGIN', payload: res.user})
      }).catch((err)=>{setError(err.message)});
  }

  const login = async (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((res)=>{
        dispatch({type: 'LOGIN', payload: res.user});
      }).catch((err)=>setError(err.message));
  }

  const logout = async () => {
    setError(null);
    signOut(auth)
      .then(()=>{
        dispatch({type: 'LOGOUT'});
      })
        .catch((err)=>setError(err.message));
  }

  return {error, signup, logout, login}
}