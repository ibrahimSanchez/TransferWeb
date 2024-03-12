import axios from 'axios';



export const getSaldoCuenta = (tokenAccess) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.get('http://127.0.0.1:8000/operaciones/transferencia', config )
}
