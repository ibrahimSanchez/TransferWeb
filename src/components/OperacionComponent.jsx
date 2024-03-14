



export const OperacionComponent = ({data = []}) => {

    const { fecha, moneda, informacion, monto, servicio } = data;

    return (
        <div className="mt-5 d-flex justify-content-between">

            <div className="d-flex ">
                <div className="circulo">
                    ${monto}
                </div>

                <div className="d-flex justify-content-between flex-column">
                    <p className="mt-0 mb-0">{informacion}</p>
                    <p className="mt-0 mb-0">{ fecha.slice(0, 10) }</p>
                </div>
            </div>

            <div>
                <p>{servicio}</p>
            </div>

            <div className="d-flex align-items-center">
                <h4>{moneda}</h4>
            </div>



            <hr />

        </div>
    )
}
