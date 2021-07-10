import React from "react";
import Input from "../../components/Input";
import withHooks from "../../shared/withHooks";
import { postRequest } from "../../shared/requestApiService";
import { useProductosStore } from "./productosStore";
import ErrorMessage from "../../components/ErrorMessage";
import endpoints from "../../shared/urls";

import "./ProductosForm.css";

const ProductosForm = ({
  producto,
  setProductoNombre,
  setProductoPrecioUnitario,
  addProducto,
  clearProductForm,
  validationErrors,
}) => {
  return (
    <form className="productos-form-container">
      <h2 className="productos-form-h2">Agruegue Nuevo Producto</h2>
      <div className="productos-form-inputs-container">
        <div>
          <Input
            value={producto.nombre}
            margin={"1em 0 0 1em"}
            onChangeText={setProductoNombre}
            label={"Nombre del producto"}
          />
          {validationErrors.productNameField.errorType.isEmpty.value && (
            <ErrorMessage
              message={
                validationErrors.productNameField.errorType.isEmpty.message
              }
            />
          )}
        </div>
        <div>
          <Input
            value={producto.precioUnitario}
            onChangeText={setProductoPrecioUnitario}
            label={"Precio unitario"}
            margin={"1em 0 0 1em"}
          />
          {validationErrors.productPriceField.errorType.isEmpty.value && (
            <ErrorMessage
              message={
                validationErrors.productPriceField.errorType.isEmpty.message
              }
            />
          )}
        </div>
      </div>
      <div className="productos-form-guardar-btn-container">
        <button
          onClick={(e) => {
            e.preventDefault();
            let producto = addProducto();
            postRequest(endpoints.productosCreate, producto);
            clearProductForm();
          }}
          className="productos-form-guardar-btn"
        >
          Guardar
        </button>
      </div>
    </form>
  );
};

const useMapHooksToProps = (props) => {
  let {
    setProductoPrecioUnitario,
    setProductoNombre,
    getProducto,
    addProducto,
    clearProductForm,
    getValidationErrors,
  } = useProductosStore();
  return {
    producto: getProducto(),
    validationErrors: getValidationErrors(),
    setProductoNombre,
    setProductoPrecioUnitario,
    addProducto,
    clearProductForm,
    getValidationErrors,
  };
};

export default withHooks(useMapHooksToProps)(ProductosForm);
