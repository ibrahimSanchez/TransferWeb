import axios from 'axios';



// post

export const getLimitesCuenta = (tokenAccess, id) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/limites/', id, config)
}

export const postSaldoCuenta = (tokenAccess, cuenta) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/saldo/', cuenta, config)
}


export const postUltimasOperaciones = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/ultimasOperaciones/', data, config)
}


export const postRealiazarTransferencia = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/transferencia/', data, config)
}


export const postRecargarSaldoMovil = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/recargarMovil/', data, config)
}


export const postRecargarNauta = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/recargarNauta/', data, config)
}


export const postDetallesOperaciones = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/detalleOperaciones/', data, config)
}



export const postResumenOperaciones = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/resumenOperaciones/', data, config)
}


export const postConsultarServicio = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/consultarServicio/', data, config)
}