import axios from 'axios';
import { decodeToken } from 'react-jwt';

export const getAllUsers = () => {
    return axios.get('http://localhost:8000/usuario/gestionar/')
}


export const createUsuario = (usuario) => {
    console.log(usuario)
    return axios.post('http://localhost:8000/usuario/registrar/', usuario)
}


// export const iniciarSesion = (usuario) => {
//     console.log(usuario)
//     return axios.post('http://localhost:8000/usuario/login/', usuario)
// }


export const iniciarSesion = (usuario) => {
    // console.log(usuario)
    return axios.post('http://localhost:8000/sesion/login/', usuario)
}


export const cerrarSesion = (usuario) => {
    return axios.post('http://localhost:8000/usuario/logout/', usuario)
}


export const getCargarUsuario = (usuario) => {
    return axios.get('http://localhost:8000/usuario/modForm/', usuario)
}

export const modificarUsuario = (tokenAccess, cargar, usuario = {}) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };

    return cargar ?
        axios.get('http://localhost:8000/usuario/formulario/', config) :
        axios.put('http://localhost:8000/usuario/modificar/', usuario, config);
};
