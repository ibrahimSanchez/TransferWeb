import axios from 'axios';



export const getSaldoCuenta = () => {
    return axios.get('http://localhost:8000/DIME_LA_RUTA_COBIO/' )
}

export const getLimiteCuenta = () => {
    return axios.get('http://localhost:8000/DIME_LA_RUTA_COBIO/')
}

export const getServicio = () => {
    return axios.get('http://localhost:8000/DIME_LA_RUTA_COBIO/')
}

