import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../app/actions/auth.actions';

import './navbar.scss'
import logo from "../../assets/imgs/argentBankLogo.png";

function Header(){
    const isConnected = useSelector((state) => state.auth.token);
    const firstname = useSelector((state) => state.user.userData.firstname);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const logoutHandler = () => {
        dispatch(logout());
        sessionStorage.removeItem('token');
        localStorage.removeItem('token');
        navigate('/');
    }

    return(
        <header className="header">
            <nav className="main-nav">
                <NavLink className="main-nav-logo" to="/">
                    <img src={logo} alt="Logo de la banque" className="main-nav-logo-image"/>
                    <h1 class="sr-only">Argent Bank</h1>
                </NavLink>
                {isConnected ? (
                    <div className='connected'>
                        <NavLink className="main-nav-item" to='/profile'>
                            <i class="fa fa-user-circle"></i>
                            <p>{firstname}</p>
                        </NavLink>
                        <NavLink className="main-nav-item" to='/' onClick={logoutHandler}>
                            <i class="fa fa-sign-out"></i>
                            <p> Sign Out </p>
                        </NavLink>
                    </div>
                ) : (
                    <div className='not-connected'>
                        <NavLink className="main-nav-item" to='/signin' >
                            <i class="fa fa-user-circle"></i>
                            <p>Sign In</p>
                        </NavLink>
                    </div>
                )}
            </nav>

        </header>
    );
}

export default Header;