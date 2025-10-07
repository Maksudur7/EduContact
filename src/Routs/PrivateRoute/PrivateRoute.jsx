import React, { useContext } from 'react';

import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Authintication/AuthProvider file/AuthProvider';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useContext(AuthContext);

    if (user) {
        return children;
    }

    // Pass the current location in state.from
    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default PrivateRoute;