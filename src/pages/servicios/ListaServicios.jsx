import { useContext, useEffect, useState } from "react";
import { List1MUI } from "../../components/List1MUI";
import AddIcon from '@mui/icons-material/Add';
import { ServiciosFormComponent } from "../../components/ServiciosFormComponent";
import { deleteServicio, getServicios } from "../../api/servicios.api";
import { AuthContext } from "../../auth/authContext";
import ModalComponent from '../../components/Modal';



export const ListaServicios = () => {

    const [trabajarForm, setTrabajarForm] = useState({
        show: false,
        accion: 'Añadir'
    });


    const [updateService, setUpdateService] = useState({})
    const [arrList, setArrList] = useState([]);

    const [showResp, setShowResp] = useState(false);
    const [mensaje, setMensaje] = useState('');

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
            // const resp = 
            await deleteServicio(tokenAccess, data);
            // console.log(resp)
            cargarData();

        } catch (error) {
            console.log(error)
        }
    }


    const prepararUpdate = id => {

        arrList.map(serv => {
            if (serv.id === id) {
                setUpdateService(serv)
                setTrabajarForm({
                    accion: 'Modificar',
                    show: true
                })
            }
        });
    }


    useEffect(() => cargarData, []);


    return (
        <>

            {
                showResp &&
                <ModalComponent show={showResp} setShow={setShowResp} mensaje={mensaje} />
            }

            <ServiciosFormComponent
                cargarData={cargarData}
                trabajarForm={trabajarForm}
                setTrabajarForm={setTrabajarForm}
                values={updateService}
                setMensaje={setMensaje}
                setShowResp={setShowResp}
            />

            <h1 className="mt-4">Gestionar Servicios</h1>

            <List1MUI
                arrList={arrList}
                handleDelete={borrarServicio}
                handleUpdate={prepararUpdate}
            />

            <button
                className="btn btn-success mb-5"
                onClick={() => setTrabajarForm({
                    accion: 'Añadir',
                    show: true
                })}
            >
                Añadir
                <AddIcon />
            </button>


        </>
    )
}
