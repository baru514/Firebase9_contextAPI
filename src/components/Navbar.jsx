import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { auth } from '../firebase/config';
import {useAuthContext} from '../hooks/useAuthContext';

export default function Navbar() {

  const {user} = useAuthContext();

  const navigate = useNavigate();
  const {logout} = useAuth();
  const handleLogout = () => {
    logout()
  }
  return (
    <nav>
      <h1>My Reading List</h1>
      <ul>
        {user ? 
        <>
          hey {user.displayName},
          <li><NavLink to="/">Home</NavLink></li>
          <li onClick={()=>handleLogout()}>Logout</li>
        </> :
        <>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/signup">Signup</NavLink></li>
        </>}
      </ul>
    </nav>
  )
}
