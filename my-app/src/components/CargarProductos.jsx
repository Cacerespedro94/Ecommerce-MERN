import React, { useState } from 'react'
import  { useForm } from 'react-hook-form'



const CargarProductos = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [Productos, setProductos] = useState([]);
   
   
    const onSubmit = (data,e) => {
    
        console.log(data)
        fetch('http://localhost:3001/api/products', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => console.error(err));
    e.target.reset();
}
  return (
 <div className="container mt-5">
     <h1 className="text-center">Ingreso de stock</h1>
     <form onSubmit={handleSubmit(onSubmit)}>
         
         <div className="row mt-4">
             <div className="col-6">
                <input name="name" className="form-control" type="text" placeholder="Nombre del producto"
            
                {
                    ...register("name",{ required: true} )
                }
                />
                {errors.name && "Ingresar el nombre"}
             </div>
             <div className="col-6">
                <input name="description" className="form-control" type="text" placeholder="Descripcion"
                {
                    ...register("description",{ required: true, message: 'Campo obligatorio' } )
                }
                />
                {errors.name && "Complete la descripción"}
             </div>
         </div>
         <div className="row mt-4">
             <div className="col-6">
                <input name="stock" className="form-control" type="text" placeholder="Cantidad"
                {
                    ...register("stock",{ required: true, message: 'Campo obligatorio' } )
                }
                />
                {errors.name && "Complete el stock"}
             </div>
             <div className="col-6">
                <input type="number" name="price" className="form-control" type="text" placeholder="Precio"
                    {
                        ...register("price",{ required: true, min: 0 , max: 10, message: 'Campo obligatorio' } )
                    }
                />
                {errors.name && "Complete el precio"}
                
             </div>
         </div>
         <div className="row mt-4"> 
             <div className="col-6">
                <input name="category" className="form-control" type="text" placeholder="Categoria"
                {
                    ...register("category",{ required: true, message: 'Campo obligatorio' } )
                }
                />
                {errors.name && "Complete la categoria"}
             </div>
             <div className="col-6">
               <input name="imageUrl" className="form-control" type="text" placeholder="Imágen"
                {
                    ...register("imageUrl",{ required: true, message: 'Campo obligatorio' } )
                }
               />
               {errors.name && "Complete la imagen."}
             </div>
         </div>
         <button type='submit' width="100%" className='btn btn-primary mt-3 '>Aceptar</button>
     </form>

 </div>
  )
}

export default CargarProductos
