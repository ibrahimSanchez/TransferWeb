import { useContext } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";
import { isExpired } from "react-jwt";
import PropTypes from 'prop-types';





export const RutasPrivadas = ({ children }) => {

    const { usuario } = useContext(AuthContext);

    const tokenExpired = isExpired(usuario.tokenAccess);

    return !tokenExpired ? children : <Navigate to='/inicio' />;
}



RutasPrivadas.propTypes = {
    children: PropTypes.element
}
