import React from 'react'
import { Link } from "react-router-dom";
import { Button, Card, CardDeck, CardGroup } from 'react-bootstrap';
const ListarProductos = () => {
  
  const [Productos, setProductos] = React.useState([])
React.useEffect(() => {
  fetchData()
}, [])

const fetchData = async () => {
  const data = await fetch('http://localhost:3001/api/products')
  const productos = await data.json()
   console.log(productos)
   setProductos(productos)
}

  return (
    
    <div className="container">
       <CardGroup >
      {
      
     
        Productos.map( producto => {
            return(
             
              <Card style={{ width: '20rem', height: '30rem' }}>
              <Card.Img variant="top" src="https://www.dexter.com.ar/on/demandware.static/-/Sites-dabra-catalog/default/dw02406892/products/NI_CD5432-100/NI_CD5432-100-1.JPG" />
              <Card.Body>
                <Card.Title>{producto.name}</Card.Title>
                <Card.Text>
                {producto.description}
                </Card.Text>
                <Button className="bg-success" variant="primary">Agregar al carrito</Button>
              </Card.Body>
            </Card>
            
            
            )
         
        })
      
     
       
      }
      </CardGroup>
      </div>
  )
}

export default ListarProductos
