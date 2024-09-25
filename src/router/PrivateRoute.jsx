import { Navigate } from 'react-router-dom';

export  const PrivateRoute = ({ element }) => {
    const token = sessionStorage.getItem('token');  // O localStorage.getItem si usas localStorage

    return token ? element : <Navigate to="/login" />;
};
