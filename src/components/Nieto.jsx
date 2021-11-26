import React, { useContext } from 'react'
import { myContext } from '../Context/ContextProvider'

const Nieto = ()=>{
    const {mensaje} = useContext(myContext)

    return (
    <>
    <h3>
        Componente Nieto
    </h3>
    <p>{ mensaje }</p>
   
    </> 
        )
}

export default Nieto;