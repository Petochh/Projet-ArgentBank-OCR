import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import NavBar from './components/navbar/navbar';
import Home from './pages/home/home';
import Signin from './pages/signin/signin';
import UserProfile from './pages/profil/profil';
import Error from './pages/error/error';
import Footer from './components/footer/footer';


function App() {
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path='/signin' element={ <Signin /> } />
        <Route path='profil' element={isConnected ? <UserProfile /> : <Navigate to="/signin" />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;