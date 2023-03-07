import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

// components
import Navbar from './components/Navbar'
import { useAuthContext } from './hooks/useAuthContext'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {

  const {user} = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
          <>
          {!user && <Navigate to='/login'/>}
          {user && <Home />}
          </>
          } />
          <Route path="/signup" element={
            <>
            {user && <Navigate to='/'/>}
            {!user && <Signup />}
            </>
          } />
          <Route path="/login" element={
            <>
            {user && <Navigate to='/'/>}
            {!user && <Login />}
            </>
          } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App