
import React from 'react';
import Padre from './components/Padre';
import ProductForm from './components/ProductForm';
import ContextProvider from './Context/ContextProvider';


function App() {
  return (
    <>
    <ContextProvider>
      <Padre />
    </ContextProvider>
    </>
  );
}

export default App;
