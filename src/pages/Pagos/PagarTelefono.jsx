import { PagoFormComponent } from "../../components/PagoFormComponent"




const PagarTelefono = () => {
  

  const inputMostrar = {
    idServicio: true,
    monto: true,
  }

  return (
    <>
      <PagoFormComponent
        titulo='Pagar Teléfono'
        formName='pagarTelefono'
        inputMostrar={inputMostrar}
      />
    </>
  )
}

export default PagarTelefono