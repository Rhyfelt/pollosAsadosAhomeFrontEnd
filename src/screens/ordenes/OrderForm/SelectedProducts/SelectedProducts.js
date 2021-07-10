import React from 'react'
import SelectedProductsItem from './SelectedProductsItem/SelectedProductsItem'
import './SelectedProducts.css'

const SelectedProducts = ({productos , onRemove}) => {
  return (
    <div className="selected-products-container">
      {productos !== undefined
        ? productos.map((producto) => {
            return (
              <SelectedProductsItem
                key={producto.id}
                id={producto.id}
                name={producto.nombre}
                quantity={producto.cantidad}
                totalPrice={producto.precioTotal}
                onRemove={onRemove}
                precioUnitario={producto.precio_unitario}
              />
            );
          })
        : null}
    </div>
  );
}

export default SelectedProducts;