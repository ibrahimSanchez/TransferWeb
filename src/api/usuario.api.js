import axios from 'axios';

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
    // console.log(usuario)
    return (
        cargar ?
            axios.get('http://localhost:8000/usuario/modificar/', tokenAccess) :
            axios.put('http://localhost:8000/usuario/modificar/', usuario)
    );
}
