import { PagoFormComponent } from "../../components/PagoFormComponent"





export const PagarMultaContravension = () => {


  const inputMostrar = {
    idMulta: true,
    ci: true,
    monto: true
  }

  return (
    <>
      <PagoFormComponent
        titulo='Pagar Multa de Contravensión'
        formName='pagarMultaContravension'
        inputMostrar={inputMostrar}
      />
    </>
  )
}
