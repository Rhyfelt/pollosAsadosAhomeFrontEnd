import React from 'react'
import './Productos.css'
import ProductosForm from './ProductosForm'
import { ProductosStoreProvider } from './productosStore'
import './Productos.css'
import ProductosListView from './ProductosListView'
const Productos = () => {
    return (
      <ProductosStoreProvider>
        <div className="productos-container">
          <h1 className="productos-title">Productos</h1>
          <div>
            <ProductosForm />
            <ProductosListView/>
          </div>
        </div>
      </ProductosStoreProvider>
    );
}

export default Productos
