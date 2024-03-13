import { FormOperacionesComponent } from "../../components/FormOperacionesComponent"


export const RecargarNauta = () => {
 

    const inputMostrar = {
        tipoCuenta: true,
        monto: true,
        nombreUsuario: true,
        telefono: true,
        cuenta: true
      }
    
      return (
        <>
          <FormOperacionesComponent
            titulo='Recargar Nauta'
            formName='recargarNauta'
            inputMostrar={inputMostrar}
          />
        </>
      )
}
