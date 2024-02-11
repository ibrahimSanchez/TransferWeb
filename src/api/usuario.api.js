import axios from 'axios';

export const getAllUsers = () => {
    return axios.get('http://localhost:8000/usuario/gestionar/')
}

export const createUsuario = (usuario) => {
    console.log(usuario)
    return axios.post('http://localhost:8000/usuario/gestionar/', usuario)
}


export const iniciarSesion = (usuario) => {
    console.log(usuario)
    return axios.post('http://localhost:8000/usuario/login/', usuario)
}

export const cerrarSesion = () => {
    return axios.post('http://localhost:8000/usuario/loggout/')
}

