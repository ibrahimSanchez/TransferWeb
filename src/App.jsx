import { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import AppRouter from './routes/AppRouter';
import { authReducer } from './auth/authReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './css/forms.css';



const init = () => {
  return JSON.parse( localStorage.getItem('usuario') ) || { logged: false, tokenAccess: '' };
}


function App() {

  const [ usuario, dispatch ] = useReducer( authReducer, {}, init )

  useEffect( () => {
    if( !usuario ) return;


    localStorage.setItem( 'usuario', JSON.stringify( usuario) );
  }, [usuario]);


  return (
    <AuthContext.Provider value={{
      usuario,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App;