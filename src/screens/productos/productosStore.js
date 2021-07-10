import createStore from "../../shared/createStore";

let [ProductosStoreProvider, useProductosStore] = createStore(
  ({ state, setState }) => {
    const producto = state.producto;
    const validationErrors = state.validationErrors
    const addProducto = () => {
      if (!validateProductoForm()) {
        return false;
      }
      return {
        nombre: producto.nombre,
        precio_unitario: producto.precioUnitario,
      };
    };

    const removeProduct = () => {};

    const onBeginEditProduct = () => {};

    const setProductoNombre = (productoNombre) => {
      let productName = validateProductoNameIsAlphabetic(productoNombre)
      if(productName != ""){
        setErrorProductNameField(false)
      }
      setState((prevState) => {
        return {
          ...prevState,
          producto: {
            ...prevState.producto,
            nombre: productName,
          },
        };
      });
    };

    const getProducto = () => {
      return state.producto;
    };

    const setProductoPrecioUnitario = (productoPrecioUntario) => {
      let precioUnitario = validateProductoPrecioUnitarioIsNumber(productoPrecioUntario)
      setErrorProductPriceField(false)
      setState((prevState) => {
        return {
          ...prevState,
          producto: {
            ...prevState.producto,
            precioUnitario: precioUnitario,
          },
        };
      });
    };

    const getValidationErrors = () => {
        return validationErrors
    }

    const setErrorProductNameField = (value) => {
      setState((prevState) => {
        return {
          ...prevState,
          validationErrors:{
            ...prevState.validationErrors,
            productNameField:{
              ...prevState.validationErrors.productNameField,
              errorType:{
                ...prevState.validationErrors.productNameField.errorType,
                isEmpty:{
                  ...prevState.validationErrors.productNameField.errorType.isEmpty,
                  value:value
                }
              }
            }
          }
        }
      })
    }

    const setErrorProductPriceField = (value) => {
      setState((prevState) => {
        return {
          ...prevState,
          validationErrors:{
            ...prevState.validationErrors,
            productPriceField:{
              ...prevState.validationErrors.productPriceField,
              errorType:{
                ...prevState.validationErrors.productPriceField.errorType,
                isEmpty:{
                  ...prevState.validationErrors.productPriceField.errorType.isEmpty,
                  value:value
                }
              }
            }
          }
        }
      })
      console.log(validationErrors)
    }

    const validateProductoForm = () => {
      let validate = true
      if (state.producto.nombre == "") {
        setErrorProductNameField(true)
        validate = false;
      }

      if (state.producto.precioUnitario == "") {
        setErrorProductPriceField(true)
        validate = false;
      }
      return validate;
    };

    const clearProductForm = () => {
      setState((prevState) => {
        return {
          ...prevState,
          producto: { nombre: "", precioUnitario: "" },
        };
      });
    };

    const validateProductoPrecioUnitarioIsNumber = (precioUnitario) => {
      let regex = /[0-9]+\.?[0-9]*/g;
      let checkIfIsNumber = precioUnitario.match(regex);
      if(checkIfIsNumber != null && checkIfIsNumber != undefined){
        return checkIfIsNumber.join('')
      }else{
        return ""
      }
    };

    const validateProductoNameIsAlphabetic = (productoNombre) => {
      let regex = /[A-Za-z]/g;
      let checkIfIsAlphabetic = productoNombre.match(regex)
      if(checkIfIsAlphabetic != null && checkIfIsAlphabetic != undefined){
        return checkIfIsAlphabetic.join('')
      }else{
        return ""
      }}
    
      

    return {
      setProductoNombre,
      setProductoPrecioUnitario,
      getProducto,
      addProducto,
      getValidationErrors,
      clearProductForm
    };
  },
  {
    producto: {
      nombre: "",
      precioUnitario: "",
    },
    validationErrors:{
      productNameField:{
        errorType:{
          isEmpty:{
            value:false,
            message:"Porfavor ingrese el nombre del producto"
          }
        }
      },
      productPriceField:{
        errorType:{
          isEmpty:{
            value:false,
            message:"Porfavor ingrese el valor del producto"
          }
        }
      }
    }
  }
);

export { ProductosStoreProvider, useProductosStore };
