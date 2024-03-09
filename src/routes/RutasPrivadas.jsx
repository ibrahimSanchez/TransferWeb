import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { isExpired } from "react-jwt";





export const RutasPrivadas = ({ children }) => {

    const { usuario } = useContext(AuthContext);

    const tokenExpired = isExpired(usuario.tokenAccess);

    return !tokenExpired ? children : <Navigate to='/inicio' />;
}
