import { useContext, useEffect, useState } from "react";
import { List1MUI } from "../../components/List1MUI";
import AddIcon from '@mui/icons-material/Add';
import { ServiciosFormComponent } from "../../components/ServiciosFormComponent";
import { deleteServicio, getServicios } from "../../api/servicios.api";
import { AuthContext } from "../../auth/authContext";




export const ListServicios = () => {


    const [trabajarForm, setTrabajarForm] = useState({
        show: false,
        accion: 'Añadir',
        // values: {}
    });


    const [updateService, setUpdateService] = useState({
        nombre: '',
        identificador: '',
        monto: 0
    })


    const [arrList, setArrList] = useState([]);


    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;


    const cargarData = async () => {
        try {
            const resp = await getServicios(tokenAccess);
            // console.log(resp)
            setArrList(resp.data);

        } catch (error) {
            console.log(error)
        }
    }


    const borrarServicio = async (data) => {
        try {
            const resp = await deleteServicio(tokenAccess, data);
            // console.log(resp)

            cargarData();

        } catch (error) {
            console.log(error)
        }
    }


    const prepararUpdate = id => {

        const [servicio] = arrList.filter(serv => serv.id === id);
        // const {identificador, monto, nombre} = servicio;
        
        setUpdateService(servicio)
        // console.log(updateService)

        setTrabajarForm({
            accion: 'Modificar',
            // values:  updateService,
            show: true
        })
    }



    useEffect(() => cargarData, []);



    return (
        <>

            <ServiciosFormComponent
                cargarData={cargarData}
                trabajarForm={trabajarForm}
                setTrabajarForm={setTrabajarForm}
                values={updateService}
            />

            <h1 className="mt-4">Lista de servicios</h1>

            <List1MUI
                arrList={arrList}
                handleDelete={borrarServicio}
                handleUpdate={prepararUpdate}
            />

            <button
                className="btn btn-success mb-5"
                onClick={() => setTrabajarForm({
                    ...trabajarForm,
                    show: true
                })}
            >
                Añadir
                <AddIcon />
            </button>


        </>
    )
}
