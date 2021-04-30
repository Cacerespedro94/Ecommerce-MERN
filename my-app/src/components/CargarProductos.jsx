import React from 'react'

const CargarProductos = () => {
  return (
 <div className="container mt-5">
     <h1 className="text-center">Ingreso de stock</h1>
     <form>
         
         <div className="row mt-4">
             <div className="col-6">
                <input name="title" className="form-control" type="text" placeholder="Nombre del producto"/>
             </div>
             <div className="col-6">
                <input name="title" className="form-control" type="text" placeholder="Descripcion"/>
             </div>
         </div>
         <div className="row mt-4">
             <div className="col-6">
                <input name="title" className="form-control" type="text" placeholder="Cantidad"/>
             </div>
             <div className="col-6">
                <input name="title" className="form-control" type="text" placeholder="Precio"/>
             </div>
         </div>
         <div className="row mt-4">
             <div className="col-6">
                <input name="title" className="form-control" type="text" placeholder="Categoria"/>
             </div>
             <div className="col-6">
               <input name="title" className="form-control" type="text" placeholder="Imágen"/>
             </div>
         </div>
     </form>

 </div>
  )
}

export default CargarProductos
