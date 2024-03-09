import { useContext } from "react"
import { AuthContext } from "../auth/authContext"
import { Navigate } from "react-router-dom";
import { isExpired } from "react-jwt";



export const RutasPublicas = ({ children }) => {

    const { usuario } = useContext(AuthContext);


    // console.log()
    const tokenExpired = isExpired(usuario.tokenAccess);

    return !tokenExpired ? <Navigate to='/' /> : children;
}
