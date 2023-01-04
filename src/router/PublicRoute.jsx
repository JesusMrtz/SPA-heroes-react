import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../modules/auth/context";


export const PublicRoute = ({ children }) => {
    const { authState } = useContext(AuthContext);
    return ( !authState.logged ) ? children : <Navigate to='/' />
}
