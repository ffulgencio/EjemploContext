import React, { useState } from "react";


function ProductForm() {
  const [product, setProduct] = useState({
    codigo: "1",
    descripcion: "TV Samsung",
    precio: "20000",
    urlFoto:"",
    unitStock:0
  });

  const handleChangeForm = (e)=>{
      setProduct(
          prev => ({
              ...prev,
              [e.target.name]: e.target.value
          })
      )
  }


  return (
    <React.Fragment>
      <form onSubmit={(e) => e.preventDefault()}>
          { Object.keys(product).map(p =>  <input
          onChange={ handleChangeForm}
          value={product[p]}
          type="text"
          name={p}
          placeholder="p"
        />)}
       
        <button
          onClick={() => {
            console.log(product);
          }}
        >
          Ver datos
        </button>
      </form>
      <pre>{JSON.stringify(product, null, 2)}</pre>
    </React.Fragment>
  );
}

export default ProductForm;
