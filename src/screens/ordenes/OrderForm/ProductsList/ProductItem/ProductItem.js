import React, { useState } from 'react'
import { AiOutlinePlus } from "react-icons/ai"
import NumberPicker from '../../../../../components/NumberPicker'
import './ProductItem.css'

const ProductItem = ({ nombre, id, precioUnitario, onAddSelectedProduct, imgSource }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [quantity, setQuantity] = useState(0);
  
    const onChangeQuantity = (cantidad) => {
      if(isNaN(cantidad)){
        setQuantity(0)
        setTotalPrice(0)
      }else{
        setQuantity(parseInt(cantidad));
        setTotalPrice(Math.round(precioUnitario * cantidad *100)/100);
      }
    };
  
    const onAddQuantity = () => {
      console.log('cantidad', quantity,precioUnitario)
      console.log((Math.round((parseInt(quantity) + 1) * precioUnitario*100))/100)
      if (isNaN(quantity)) {
        setQuantity(0);
        setTotalPrice(0);
      } else {
        setQuantity(parseInt(quantity) + 1);
        setTotalPrice((Math.round((parseInt(quantity) + 1) * precioUnitario*100))/100);
      }
    };
  
    const onSubstractQuantity = () => {
      if (quantity > 0) {
        setTotalPrice((prevTotalPrice) => Math.round((prevTotalPrice - precioUnitario)*100)/100);
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
  
    const PRODUCT_SELECTED = {
      id:id,
      nombre:nombre,
      cantidad:quantity,
      precioTotal:totalPrice,
      source:imgSource,
      precio_unitario:precioUnitario
    }

    return (
      <div className="productoItem-container">
        <button onClick={() => {onAddSelectedProduct(PRODUCT_SELECTED)}} className="producto-item-add-button">
          <AiOutlinePlus />
        </button>
        <p className="producto-item-text-size product-item-nombre-producto">
          <strong>{nombre}</strong>
        </p>
        <NumberPicker
          cantidad={quantity}
          onAddQuantity={onAddQuantity}
          onSubstractQuantity={onSubstractQuantity}
          onChangeQuantity={onChangeQuantity}
        />
        <p className="producto-item-text-size"><small>$</small>{`${totalPrice}`}</p>
      </div>
    );
  };

export default ProductItem
