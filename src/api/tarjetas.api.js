import axios from 'axios';

export const getAllTarjetas = () => {
    return axios.get('URL de las tarjetas')
}


export const getTarjeta = (claveDeTarjeta) => {
    return axios.get('URL de las tarjetas', claveDeTarjeta)
}


export const addTarjeta = (tarjeta) => {
    console.log(tarjeta)
    return axios.post('URL de las tarjetas', tarjeta)
}



export const updateTarjeta = (tarjeta) => {
    console.log(tarjeta)
    return axios.post('URL de las tarjetas', tarjeta)
}


export const deleteTarjeta = (tarjeta) => {
    console.log(tarjeta)
    return axios.get('URL de las tarjetas', tarjeta)
}