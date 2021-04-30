import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (

    <nav className="navbar navbar-dark bg-primary justify-content-end">
  <ul className="nav">
  <li className="nav-item">
  <Link to="/" className="nav-link text-light">Inicio</Link>
  </li>
  <li className="nav-item">
  <Link to="/CargarStock" className="nav-link text-light">Cargar Stock</Link>
  </li>
  <li className="nav-item">
  <NavLink to="/Productos" className="nav-link text-light" activeClassName="active">Productos</NavLink>
  </li>
</ul>
</nav>
    /*<div className="btn-group">
    <Link to="/" className="btn btn-dark">Inicio</Link>
    <Link to="/CargarStock" className="btn btn-dark">Cargar Stock</Link>
    <NavLink to="/Productos" className="btn btn-dark" activeClassName="active">Productos</NavLink>
  </div>*/
  )
}

export default Navbar
