import { PagoFormComponent } from "../../components/PagoFormComponent"




export const PagarMultaTransito = () => {
  

  const inputMostrar = {
    idMulta: true,
    articulo: true,
    inciso: true,
    montoinciso: true,
    provincia: true,
    municipio: true,
    fecha: true
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
