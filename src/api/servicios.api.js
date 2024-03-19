import axios from "axios";



export const getServicios = (tokenAccess) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };

    return axios.get('http://127.0.0.1:8000/servicio/gestionar/', config)
}


export const postAddServicio = (tokenAccess, servicio) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };

    return axios.post('http://127.0.0.1:8000/servicio/gestionar/', servicio, config)
}


export const putServicio = (tokenAccess, servicio) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };

    return axios.put('http://127.0.0.1:8000/servicio/gestionar/', servicio, config)
}



export const deleteServicio = (tokenAccess, servicios) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        },
        data: {
            id: servicios
        }
    };

    return axios.delete('http://127.0.0.1:8000/servicio/gestionar/', config)
}
