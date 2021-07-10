import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const ProductoItemView = ({ nombre, precioUnitario, onDeleteHandler, onEditHandler }) => {
  return (
    <div className="producto-item-view-container">
      <p>{nombre}</p>
      <p>
        <small>$</small>`${precioUnitario}`
      </p>
      <div className="producto-item-actions-container">
        <button onClick={onEditHandler} className="producto-item-view-btn-editar">
          <MdEdit className="producto-item-view-logo-edit" />
        </button>
        <button
          onClick={onDeleteHandler}
          className="producto-item-view-btn-delete"
        >
          <MdDelete className="producto-item-view-logo-delete" />
        </button>
      </div>
    </div>
  );
};

export default ProductoItemView;
