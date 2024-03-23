import axios from "axios";



export const postPagarservicio = (tokenAccess, data) => {
    const config = {
        headers: {
            'Authorization': 'Bearer ' + tokenAccess
        }
    };
    return axios.post('http://127.0.0.1:8000/operaciones/pagarServicio/', data, config)
}


// export const postPagarMultaContravencion = (tokenAccess, data) => {
//     const config = {
//         headers: {
//             'Authorization': 'Bearer ' + tokenAccess
//         }
//     };
//     return axios.post('http://127.0.0.1:8000/operaciones/pagarServicio/', data, config)
// }