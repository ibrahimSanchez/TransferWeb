import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { ModalGrafComponent } from "../../components/ModalGrafComponent";
import { AuthContext } from "../../auth/authContext";
import { CuentaContext } from "../../context/CuentaContext";
import { anios, meses } from "../../data/data";
import { postResumenOperaciones } from "../../api/operaciones.api";
import { Alert } from "react-bootstrap";



export const ListResumenComponent = () => {

    const [show, setShow] = useState(false);
    const [data, setData] = useState([]);

    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    const {
        cuentas
    } = useContext(CuentaContext);


    const {
        register,
        // formState: { errors },
        handleSubmit
    } = useForm();


    const onSubmit = handleSubmit(async data => {
        const resp = await postResumenOperaciones(tokenAccess, data)
        // console.log(resp);

        const { transferencia, recarga_movil, recarga_nauta } = resp.data;
        let d = [];

        transferencia > 0 && d.push({ id: 1, label: "Transferencia", value: transferencia });
        recarga_movil > 0 && d.push({ id: 2, label: "Recarga saldo móvil", value: recarga_movil });
        recarga_nauta > 0 && d.push({ id: 3, label: "Recarga nauta", value: recarga_nauta });

        setData(d)
        setShow(true);
    });


    return (
        <>
            <ModalGrafComponent data={data} show={show} setShow={setShow} />
            <div className="formContenedor row sesion">

                <h2 className="mb-5 col">Resumen de Operaciones</h2>

                <form
                    method="POST"
                    name='resumenOperaciones'
                    className="d-flex flex-column"
                    onSubmit={onSubmit}
                >

                    {
                        cuentas.length > 0 ?
                            <div className="mb-2">
                                <label className="form-label">Cuenta</label>
                                <select
                                    className="form-select"
                                    aria-label="Default select example"
                                    {...register("id", { required: true })}
                                >
                                    {
                                        cuentas.map(({ nombre, id }) => (
                                            <option
                                                key={nombre}
                                                value={id}>
                                                {nombre}
                                            </option>))
                                    }

                                </select>
                            </div>

                            : <Alert variant='success'>
                                No hay cuentas asociadas
                            </Alert>
                    }

                    <div className="mb-3 form-group" >
                        <label className='form-label'>Mes</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("mes", { required: true })}
                        >
                            {
                                meses.map((mes, id) => <option value={id + 1} key={mes} >{mes}</option>)
                            }
                        </select>
                    </div>

                    <div className="mb-3 form-group" >
                        <label className='form-label'>Año</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("anio", { required: true })}
                        >
                            {
                                anios.map(anio => <option value={anio} key={anio} >{anio}</option>)
                            }
                        </select>
                    </div>

                    <div className="mb-3 form-group" >
                        <label className='form-label'>Moneda</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("moneda", { required: true })}
                        >
                            <option value='CUP'>CUP</option>
                            <option value='MLC'>MLC</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-success mt-4"
                        disabled={cuentas.length === 0}
                    >
                        Aceptar
                    </button>

                </form>

            </div>
        </>
    );
};


