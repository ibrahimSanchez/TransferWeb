import { useForm } from "react-hook-form";
import { articulos, incisos, municipios, provincias, tributos } from "../data/data";
import { useContext, useEffect, useState } from "react";
import { CuentaContext } from "../context/CuentaContext";
import { AuthContext } from "../auth/authContext";
import { getServicios } from "../api/servicios.api";
import { postPagarservicio } from "../api/pagos.api";
import ModalComponent from "./Modal";
import { Alert } from "react-bootstrap";



export const PagoFormComponent = ({ titulo, formName }) => {

    // Importacion de los context
    const { cuentas } = useContext(CuentaContext);

    const { usuario } = useContext(AuthContext);
    const { tokenAccess } = usuario;

    // useState
    const [arrList, setArrList] = useState([]);

    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('');


    const {
        register,
        formState: { errors },
        handleSubmit,
        setValue,
        reset
    } = useForm({
        defaultValues: {
            nombre: formName
        }
    });

    const onSubmit = handleSubmit(async data => {
        try {
            const resp = await postPagarservicio(tokenAccess, data);
            respuesta(resp.data[0]);
            // console.log(resp)
        } catch (error) {
            // console.log(error);
            respuesta(error.response.data.error)
        }
    });


    const cargarData = async () => {
        try {
            let temp = [];

            const resp = await getServicios(tokenAccess);
            temp = resp.data.filter(item => item.nombre === formName);
            setArrList(temp);

        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        cargarData();

        (formName === 'Multa de tránsito' || formName === 'ONAT') &&
            setValue("provincia", provSelec)
    }, []);

    const respuesta = (mensaje) => {
        setMensaje(mensaje);
        setShow(true);
        reset();
        cargarData();
    }


    // Para las Provincias y los Municipios 
    const [provSelec, setProvSelec] = useState('Pinar del Río');

    const handleInput = (e) => {
        setProvSelec(e.target.value)
        setValue("provincia", e.target.value)
    }


    // Para los articulos y los incisos
    const [articuloSelec, setArticuloSelec] = useState('61');

    const handleInputArticulo = (e) => {
        setArticuloSelec(e.target.value)
        setValue("articulo", e.target.value)
    }


    return <>

        {
            show &&
            <ModalComponent show={show} setShow={setShow} mensaje={mensaje} />
        }

        <div className="formContenedor row sesion">

            <h2 className="mb-5 col"> {titulo} </h2>

            <form
                method="POST"
                name={formName}
                className="d-flex flex-column"
                onSubmit={onSubmit}
            >

                {
                    arrList.length > 0 ?
                        <div className="mb-3 form-group" >
                            <label className='form-label'>Identificador</label>
                            <select
                                className="form-select"
                                aria-label="Default select example"
                                {...register("identificador", { required: true })}
                            >
                                {
                                    arrList.length > 0 &&
                                    arrList.map(({ id, identificador }) =>
                                        <option key={id} value={identificador}>{identificador}</option>
                                    )
                                }
                            </select>
                        </div>
                        : <Alert variant='success'>
                            No hay servicios asociados
                        </Alert>

                    //no se de que color poner el alert 
                }
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

                {
                    formName === 'Multa de tránsito' &&
                    <div className="mb-2">
                        <label className="form-label">Artículo</label>
                        <select
                            onInput={handleInputArticulo}
                            className="form-select"
                            aria-label="Default select example"
                            required
                            value={articuloSelec}
                        >
                            {articulos.map(art => <option key={art} value={art}>{art}</option>)}
                        </select>
                    </div>
                }

                {
                    formName === 'Multa de tránsito' &&
                    <div className="mb-2">
                        <label className="form-label">Inciso</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("inciso", { required: true })}
                        >
                            {incisos[articuloSelec].map(inc => <option key={inc} value={inc}>{inc}</option>)}
                        </select>
                    </div>
                }

                {
                    (formName === 'Multa de tránsito' || formName === 'ONAT') &&
                    <div className="mb-3 form-group" >
                        <label className='form-label'>Provincia</label>
                        <select
                            onInput={handleInput}
                            className="form-select"
                            aria-label="Default select example"
                            required
                            value={provSelec}
                        >
                            {provincias.map(prov => <option key={prov} value={prov}>{prov}</option>)}
                        </select>
                    </div>
                }

                {
                    (formName === 'Multa de tránsito' || formName === 'ONAT') &&
                    <div className="mb-3 form-group" >
                        <label className='form-label'>Municipio</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("municipio", { required: true })}
                        >
                            {municipios[provSelec].map(muni => <option key={muni} value={muni}>{muni}</option>)}
                        </select>
                    </div>
                }

                {
                    (formName === 'Multa de tránsito' || formName === 'ONAT') &&
                    <div className="mb-2">
                        <label className="form-label">Fecha</label>
                        <input
                            type="date"
                            className={"form-control " + (errors.fecha && "errorInput")}
                            {...register("fecha", { required: true })}
                            aria-invalid={errors.fecha ? "true" : "false"}
                        />
                        {errors.fecha?.type === "required" && (
                            <p className="text-danger">El campo es requerido</p>
                        )}
                    </div>
                }

                {
                    formName === 'Multa de contravención' &&
                    <div className="mb-3 form-group" >
                        <label className='form-label'>Moneda</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("moneda", { required: true })}
                        >
                            <option value="CUP">CUP</option>
                            <option value="MLC">MLC</option>
                        </select>
                    </div>
                }

                {
                    formName === 'ONAT' &&
                    <div className="mb-2">
                        <label className="form-label">Tributo</label>
                        <select
                            className="form-select"
                            aria-label="Default select example"
                            {...register("tributo", { required: true })}
                        >
                            {tributos.map(trib => <option key={trib} value={trib}>{trib}</option>)}
                        </select>
                    </div>
                }

                <button
                    type="submit"
                    className="btn btn-success mt-4"
                    disabled={(arrList.length > 0 && cuentas.length > 0) ? false : true}
                >
                    Aceptar
                </button>

            </form >

        </div >
    </>
}

