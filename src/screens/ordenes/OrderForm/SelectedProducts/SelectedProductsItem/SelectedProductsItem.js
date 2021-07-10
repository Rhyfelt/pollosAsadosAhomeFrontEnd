import React from 'react'
import { IoIosClose } from 'react-icons/io'
import "./SelectedProductsItem.css"

const SelectedProductsItem = ({name, precioUnitario, quantity, imgSource, totalPrice, onRemove, id}) => {
    const PRODUCT_ITEM = {
      id:id,
      nombre: name,
      cantidad: quantity,
      precioTotal: totalPrice,
      source: imgSource,
      precio_unitario: precioUnitario,
    };
    return (
        <div className="selected-products-item-container">
            <button onClick={()=>onRemove(PRODUCT_ITEM)} className="selected-products-item-button"><IoIosClose/></button>
            <img className="selected-products-item-image" src={imgSource}/>
            <small>{name}</small>
            <small className="selected-products-item-badge-quantity">{quantity}</small>
            <p><small>$</small>{`${totalPrice}.`}<small>00</small></p>
        </div>
    )
}

export default SelectedProductsItem
