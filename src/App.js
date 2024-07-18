import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginSuccess } from './app/actions/auth.actions';

import NavBar from './components/navbar/navbar';
import Home from './pages/home/home';
import Signin from './pages/signin/signin';
import UserProfile from './pages/profil/profil';
import Error from './pages/error/error';
import Footer from './components/footer/footer';

function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);
  const dispatch = useDispatch();

  useEffect(() => {
    const getTokenFromStorage = () => {
      const token = sessionStorage.getItem('token') || localStorage.getItem('token');
      return token;
    };

    const token = getTokenFromStorage();

    if (token) {
      dispatch(loginSuccess(token));
    }
  }, []);

  const AuthGuard = ({ element }) => {
    return isConnected ? <Navigate to="/profile" /> : element;
  };

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/signin' element={<AuthGuard element={<Signin />} />} />
        <Route path='/profile' element={isConnected ? <UserProfile /> : <Navigate to="/signin" />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
