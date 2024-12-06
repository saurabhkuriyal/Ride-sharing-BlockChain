import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    
    const token = useSelector((state) => state.auth.token);
    console.log("this is token",token);
    

    if (!token) {
        return <Navigate to="/login" replace />;
    }
    return <Outlet/>;
};

export default ProtectedRoute;
