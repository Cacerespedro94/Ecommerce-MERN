import React from 'react'
//import { Link } from "react-router-dom";
import { Button, Card } from 'react-bootstrap';
const ListarProductos = () => {
  
  const [Productos, setProductos] = React.useState([])
  React.useEffect(() => {
  fetchData()
}, [])

const fetchData = async () => {
  const data = await fetch('http://localhost:3001/api/products')
  const productos = await data.json()
   console.log(productos+ 'hola')
   setProductos(productos)
  }
const renderCard = (Productos, index) => {
  return(
    <Card style={{ width: '18rem', height: '26rem', marginLeft: '1rem', marginRight: '1rem'}} key={Productos._id}  className='col-4 mt-3 bg-light' onClick={()=> alert('Hola')} >
    <Card.Img className='mt-2' style={{width:'16rem', height: '15rem'}} variant="top" src={Productos.imageUrl} />
    <Card.Body>
      <Card.Title>{Productos.name}</Card.Title>
      <Card.Text>
          {Productos.description}
      </Card.Text>
        <Button className="bg-success" variant="primary">Agregar al carrito</Button>
    </Card.Body>
  </Card>
  )
}   
  return (
    <div className="container"> 
    <div className="row mt-3"> 
  
     {Productos.map(renderCard)} 
     
    </div>
    </div>
  )
}

export default ListarProductos
