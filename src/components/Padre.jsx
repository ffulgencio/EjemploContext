import React, { useContext } from 'react';
import { myContext } from '../Context/ContextProvider';
import Hijo from './Hijo';

function Padre() {
    const {mensaje, setMensaje} = useContext(myContext)
    return ( 
        <>
        <h1>Componente Padre</h1>
        <button onClick={()=>setMensaje('EL estado ha cambiado')}>Click me</button>
        {mensaje}
        <Hijo/>
        </>
     );
}

export default Padre;
