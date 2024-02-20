import { PagoFormComponent } from "../../components/PagoFormComponent"




const PagarImpuestos = () => {
 

  const inputMostrar = {
    nit: true,
    provincia: true,
    municipio: true,
    tributo: true,
    periodo: true, 
    monto: true,
    tipoCuenta: true
  }

  return (
    <>
      <PagoFormComponent
        titulo='Pagar Multa de Tránsito'
        formName='pagarMultaTransito'
        inputMostrar={inputMostrar}
      />
    </>
  )
}

export default PagarImpuestos