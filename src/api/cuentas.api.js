import axios from 'axios';

export const getCuentas = (tokenAccess) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.get('http://127.0.0.1:8000/cuenta/gestionar/', config)
}


export const postAddCuenta = (tokenAccess, cuenta) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };

    return axios.post('http://127.0.0.1:8000/cuenta/gestionar/',cuenta, config)
}


export const putModifCuenta = (tokenAccess, cuenta) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };

    return axios.put('http://127.0.0.1:8000/cuenta/gestionar/',cuenta, config)
}



export const deleteCuenta = (tokenAccess, id) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };

    // console.log(`http://127.0.0.1:8000/cuenta/gestionar/?id=${id}`)

    return axios.delete(`http://127.0.0.1:8000/cuenta/gestionar/?id=${id}`, config)
}
