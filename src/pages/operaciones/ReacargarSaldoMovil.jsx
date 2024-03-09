import { FormOperacionesComponent } from "../../components/FormOperacionesComponent"



export const ReacargarSaldoMovil = () => {

    const inputMostrar = {
        tipoCuenta: true,
        monto: true,
        // tipoRecarga: true,
        telefono: true
      }
    
      return (
        <>
          <FormOperacionesComponent
            titulo='Recargar Saldo Móvil'
            formName='recargarSaldo'
            inputMostrar={inputMostrar}
          />
        </>
      )
}