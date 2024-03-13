import { FormOperacionesComponent } from "../../components/FormOperacionesComponent"



export const RealizarTransferencia = () => {
 

    const inputMostrar = {
        tipoCuenta: true,
        monto: true,
        cuenta: true,
        numeroCuenta: true,
        // telefono: true
      }
    
      return (
        <>
          <FormOperacionesComponent
            titulo='Realizar Transferencia'
            formName='realizarTransferencia'
            inputMostrar={inputMostrar}
          />
        </>
      )
}
