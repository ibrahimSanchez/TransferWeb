import { PagoFormComponent } from "../../components/PagoFormComponent"





export const PagarElectricidad = () => {


  const inputMostrar = {
    idServicio: true,
    tipoCuenta: true
  }

  return (
    <>
      <PagoFormComponent
        titulo='Pagar Electricidad'
        formName='pagarElectricidad'
        inputMostrar={inputMostrar}
      />
    </>
  )
}
