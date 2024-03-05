import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        // Redirect to login page after logout
        navigate('/login');
    };

    return (
        <button onClick={logout}>Logout</button>
    );
};

export default Logout;
