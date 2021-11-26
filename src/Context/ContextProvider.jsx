import React,{useState,createContext} from 'react';

export const myContext = createContext({});

const ContextProvider = ({ children })=>{
    const [mensaje, setMensaje] = useState('Hola Mundo');
    return (
        <myContext.Provider value={{mensaje,setMensaje}}>
            { children }
        </myContext.Provider>
    )
}

export default ContextProvider;