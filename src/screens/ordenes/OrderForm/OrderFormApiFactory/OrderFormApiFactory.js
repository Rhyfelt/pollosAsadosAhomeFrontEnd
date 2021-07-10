const orderFormApiFactory = ({ state, setState }) => {
  const cliente = state.cliente;
  const order = state.order;
  const orders = state.orders;
  const searchableProducts = state.searchableProducts;
  const selectedProducts = state.selectedProducts;
  const repartidor = state.repartidor;
  const sucursal = state.sucursal;
  const comentarios = state.comentarios;
  const clientes = state.clientes;
  const sucursales = state.sucursales;
  const productos = state.productos;
  const nuevaDireccion = state.cliente.nuevaDireccion;
  const direccionSeleccionada = state.cliente.direccionSeleccionada;
  const isEditing = state.isEditing;
  const orderFormTitle = state.orderFormTitle;
  const orderIdOnEditing = state.orderIdOnEditing;

  const setPhoneNumberState = (phoneNumber) => {
    setState((prevState) => {
      return {
        ...prevState,
        cliente: {
          ...prevState.cliente,
          key: phoneNumber,
        },
      };
    });
  };

  const setClientNameState = (name) => {
    setState((prevState) => {
      return {
        ...prevState,
        cliente: {
          ...prevState.cliente,
          nombre: name,
        },
      };
    });
  };

  const setRepartidorState = (deliveryMan) => {
    setState((prevState) => {
      return {
        ...prevState,
        repartidor: deliveryMan,
      };
    });
  };

  const setColoniaState = (colonia) => {
    setState((prevState) => {
      return {
        ...prevState,
        cliente: {
          ...prevState.cliente,
          nuevaDireccion: {
            ...prevState.cliente.nuevaDireccion,
            colonia: colonia,
          },
        },
      };
    });
  };

  const setCalleNumeroState = (calleNumero) => {
    setState((prevState) => {
      return {
        ...prevState,
        cliente: {
          ...prevState.cliente,
          nuevaDireccion: {
            ...prevState.cliente.nuevaDireccion,
            calleNumero: calleNumero,
          },
        },
      };
    });
  };

  const setEntreCallesState = (entreCalles) => {
    setState((prevState) => {
      return {
        ...prevState,
        cliente: {
          ...prevState.cliente,
          nuevaDireccion: {
            ...prevState.cliente.nuevaDireccion,
            entreCalles: entreCalles,
          },
        },
      };
    });
  };

  const setSucursalState = (sucursal) => {
    setState((prevState) => ({ ...prevState, sucursal: sucursal }));
  };

  const setSelectedAddressState = (direccionSeleccionada) => {
    setState((prevState) => ({
      ...prevState,
      cliente: {
        ...prevState.cliente,
        direccionSeleccionada: direccionSeleccionada,
      },
    }));
  };

  const setComentariosState = (commentaries) => {
    setState((prevState) => ({ ...prevState, comentarios: commentaries }));
  };

  const setOrderKeyState = () => {
    setState((prevState) => {
      return {
        ...prevState,
        order: {
          ...prevState.order,
          key: prevState.order.key + 1,
        },
      };
    });
  };

  const setOrderIdState = () => {
    setState((prevState) => {
      return {
        ...prevState,
        order: {
          ...prevState.order,
          id: prevState.order.id + 1,
        },
      };
    });
  };

  const setOrderIdOnEditing = (id) => {
    setState((prevState) => {
      return {
        ...prevState,
        orderIdOnEditing: id,
      };
    });
  };

  const addOrder = (order) => {
    setState((prevState) => {
      return {
        ...prevState,
        orders: [...prevState.orders, order],
      };
    });
  };

  const makeSomethingBasedOnResultWithParams = (actions) => {
    const newFunction = (result, param) => {
      let actionsMap = new Map(Object.entries(actions));
      let action = actionsMap.get(result);
      return action(param);
    };
    return newFunction;
  };

  const makeSomethingBasedOnResultWithoutParams = (actions) => {
    const newFunction = (result) => {
      let actionsMap = new Map(Object.entries(actions));
      let action = actionsMap.get(result);
      return action();
    };
    return newFunction;
  };

  const searchProductByName = (search) => {
    let unselectedProducts = getUnselectedProducts();
    let filteredProductsByName = filterProductsByName(
      unselectedProducts,
      search
    );
    setState((prevState) => ({
      ...prevState,
      searchableProducts: filteredProductsByName,
    }));
  };

  const getUnselectedProducts = () => {
    let unselectedProducts = productos.filter((product) =>
      selectedProducts.every(
        (selectedProduct) => selectedProduct.nombre != product.nombre
      )
    );
    return unselectedProducts;
  };

  const filterProductsByName = (unselectedProducts, search) => {
    let result = unselectedProducts.filter((producto) => {
      let ifProductMatchWithSearch = producto.nombre
        .toLocaleLowerCase()
        .includes(search.toLocaleLowerCase());
      if (ifProductMatchWithSearch) return producto;
    });
    return result;
  };

  const searchClientByPhone = (phoneNumber) => {
    let isPhoneHasTenDigits = validateNumberOfDigitsInPhoneNumber(phoneNumber);
    let searchResult = getClientByPhoneIfIitsLengthIsValidated(
      isPhoneHasTenDigits,
      phoneNumber
    );
    setClientIfIsFoundAndPhoneLengtIsValidated(
      isPhoneHasTenDigits,
      searchResult
    );
    setPhoneNumberState(phoneNumber);
  };

  const getClientByPhone = (phone) => {
    let result = filterClientByPhone(phone);
    return validateIfClientWasFound(result);
  };

  const setClientState = (cliente) => {
    setState((prevState) => {
      return {
        ...prevState,
        cliente: {
          ...prevState.cliente,
          nombre: cliente.nombre,
          key: cliente.key,
          direcciones: cliente.direcciones,
        },
      };
    });
  };

  const getClientByPhoneIfIitsLengthIsValidated = makeSomethingBasedOnResultWithParams(
    {
      true: getClientByPhone,
      false: () => {
        cleanClientState();
      },
    }
  );
  const setClientIfIsFoundAndPhoneLengtIsValidated = makeSomethingBasedOnResultWithParams(
    {
      true: setClientState,
      false: () => {
        return;
      },
    }
  );

  const validateNumberOfDigitsInPhoneNumber = (phoneNumber) => {
    return phoneNumber.length == 10 ? "true" : "false";
  };

  const filterClientByPhone = (phone) => {
    return clientes.filter((cliente) => cliente.key == phone);
  };

  const validateIfClientWasFound = (searchResult) => {
    return searchResult.length > 0
      ? searchResult[0]
      : {
          key: "",
          nombre: "",
          nuevaDireccion: { colonia: "", calleNumero: "", entreCalles: "" },
          direcciones: [],
          direccionSeleccionada: "",
          comentarios: "",
        };
  };

  const addSelectedProduct = (product) => {
    console.log("productoSeleccionado",product)
    let isQuantityLargerThanCero = validateQuantityOnSelectedProduct(product);
    if (isQuantityLargerThanCero) {
      let unselectedProducts = searchableProducts.filter(
        (producto) => producto.id != product.id
      );
      setSearchableProducts(unselectedProducts)
      setState((prevState) => ({
        ...prevState,
        selectedProducts: [...selectedProducts, product],
      }));
    }
    console.log(selectedProducts)
  };

  const validateQuantityOnSelectedProduct = (product) => {
    let isQuantityLargerThanCero = true;
    if (product.cantidad <= 0) isQuantityLargerThanCero = false;
    return isQuantityLargerThanCero;
  };

  const removeSelectedProduct = (producto) => {
    let listOfProductsSelectedAfterRemove = selectedProducts.filter(
      (product) => product.id != producto.id
    );
    setState((prevState) => ({
      ...prevState,
      selectedProducts: listOfProductsSelectedAfterRemove,
    }));
    setState((prevState) => {
      return{
        ...prevState,
        searchableProducts: [...searchableProducts, producto],
      }
    });
  };

  const save = () => {
    saveOrderOrSaveEditedOrderDependingOnIsEdit(isEditing);
  };

  const getOrderObject = () => {
    if (!clientOrderValidation()) return false;
    let orderObj = fillClientOrderObjectOnAddNewOrder();
    return orderObj
  };

  const saveEditOrder = () => {
    if (!clientOrderValidation()) return false;
    let orderObject = fillClientOrderObjectOnEditing();
    let indexOfTheEditingOrder = orders.map((order, index) => order.id == orderIdOnEditing).indexOf(true);
    let ordersArray = orders;
    ordersArray[indexOfTheEditingOrder] = orderObject;
    setState((prevState) => {
      return {
        ...prevState,
        orders: [...ordersArray]
      };
    });
    setOrderIdOnEditing(null);
    setFormOrderTitle("Agregar Nueva Orden");
    setIsEditing("false");
    cleanOrderForm();
  };

  const deleteOrder = (id) => {
    let ordersAfterDelete = orders.filter((order) => order.id != id)
    setState((prevState) => {
      return {
        ...prevState,
        orders: [...ordersAfterDelete]
      }
    })
  }

  const fillClientOrderObjectOnEditing = () => {
    let cliente = getClientOrderObject();
    let totalPrice = getTotalPrice(selectedProducts);
    let currentDate = getCurrentDate();
    let orderObj = {
      key: orderIdOnEditing,
      id: orderIdOnEditing,
      fechaInfo: currentDate,
      productos: selectedProducts,
      searchableProducts: searchableProducts,
      cliente: cliente,
      repartidor: repartidor,
      sucursal: sucursal,
      comentarios: comentarios,
      totalPrice: totalPrice,
    };
    return orderObj;
  };

  const saveOrderOrSaveEditedOrderDependingOnIsEdit = makeSomethingBasedOnResultWithoutParams(
    { true: saveEditOrder, false: getOrderObject }
  );

  const clientOrderValidation = () => {
    if (!validateSelectedProducts()) {
      return false;
    }
    if (
      !validateNameAndPhoneFields({
        cliente: cliente.nombre,
        phone: cliente.key,
      })
    ) {
      return false;
    }

    if (
      !validateNewAddressFields(cliente.nuevaDireccion) &&
      !validateIfThereIsSelectedAddress()
    ) {
      return false;
    }
    if (!validateSucursal()) return false;
    return true;
  };

  const validateSelectedProducts = () => {
    return selectedProducts.length > 0 ? true : false;
  };

  const validateSucursal = () => {
    return sucursal != "" ? true : false;
  };

  const validateNonEmptyFields = () => {
    const newFunction = (obj) => {
      let objArray = [...Object.values(obj)];
      let areFieldsFilled = objArray.every((fieldValue) => fieldValue != "");
      return areFieldsFilled;
    };
    return newFunction;
  };

  const validateNameAndPhoneFields = validateNonEmptyFields();

  const validateNewAddressFields = validateNonEmptyFields();

  const validateRepartidorField = () => {
    return sucursal != "" ? true : false;
  };

  const validateIfThereIsSelectedAddress = () => {
    return direccionSeleccionada != "" ? true : false;
  };

  const getClientOrderObject = () => {
    let client = {
      nombre: cliente.nombre,
      telefono: cliente.key,
      direccion: getAddressOrder(),
    };
    return client;
  };

  const fillClientOrderObjectOnAddNewOrder = () => {
    setOrderKeyState();
    setOrderIdState();
    let cliente = getClientOrderObject();
    let totalPrice = getTotalPrice(selectedProducts);
    let currentDate = getCurrentDate();
    let orderObj = {
      key: state.order.key + 1,
      id: state.order.key + 1,
      fechaInfo: currentDate,
      productos: selectedProducts,
      searchableProducts: searchableProducts,
      cliente: cliente,
      repartidor: repartidor,
      sucursal: sucursal,
      comentarios: comentarios,
      totalPrice: totalPrice,
    };
    return orderObj;
  };

  const getTotalPrice = (productos) => {
    let totalPrice = 0;
    productos.map((producto) => {
      totalPrice += producto.precioTotal;
    });
    return totalPrice;
  };

  const getAddressOrder = () => {
    return cliente.nuevaDireccion.colonia &&
      cliente.nuevaDireccion.entreCalles &&
      cliente.nuevaDireccion.calleNumero
      ? {
          colonia: cliente.nuevaDireccion.colonia,
          calleNumero: cliente.nuevaDireccion.calleNumero,
          entreCalles: cliente.nuevaDireccion.entreCalles,
        }
      : convertDireccionSeleccionadaToNuevaDireccionObject();
  };

  const convertDireccionSeleccionadaToNuevaDireccionObject = () => {
    let coloniaCalleNumeroEntreCallesArray = direccionSeleccionada.split(",");
    return {
      colonia: coloniaCalleNumeroEntreCallesArray[0],
      calleNumero: coloniaCalleNumeroEntreCallesArray[1],
      entreCalles: coloniaCalleNumeroEntreCallesArray[2],
    };
  };

  const getCurrentDate = () => {
    let today = new Date();
    let date =
      today.getDate() +
      "/" +
      (today.getMonth() + 1) +
      "/" +
      today.getFullYear();
    let time =
      today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let fechaInfo = { fecha: date, hora: time };
    return fechaInfo;
  };

  const cleanOrderForm = () => {
    cleanClientState();
    cleanSelectedProductsState();
    loadProductsInSearchableState();
    cleanRepartidorState();
    cleanSucursalState();
  };

  const cleanClientState = () => {
    setState((prevState) => ({
      ...prevState,
      cliente: {
        key: "",
        nombre: "",
        nuevaDireccion: { colonia: "", calleNumero: "", entreCalles: "" },
        direcciones: [],
        direccionSeleccionada: "",
        comentarios: "",
      },
    }));
  };

  const loadProductsInSearchableState = () => {
    setState((prevState) => ({ ...prevState, searchableProducts: productos }));
  };

  const cleanSelectedProductsState = () => {
    setState((prevState) => ({ ...prevState, selectedProducts: [] }));
  };

  const cleanRepartidorState = () => {
    setState((prevState) => ({ ...prevState, repartidor: "" }));
  };

  const cleanSucursalState = () => {
    setState((prevState) => ({ ...prevState, sucursal: "" }));
  };

  const beginEditOrder = (order) => {
    setOrderIdOnEditing(order.id);
    setClientNameState(order.cliente.nombre);
    setPhoneNumberState(order.cliente.telefono);
    setColoniaState(order.cliente.direccion.colonia);
    setCalleNumeroState(order.cliente.direccion.calleNumero);
    setEntreCallesState(order.cliente.direccion.entreCalles);
    setSelectedProductsOnEditing(order.productos);
    setSearchableProducts(order.searchableProducts);
    setSucursalState(order.sucursal);
    setRepartidorState(order.repartidor);
    setIsEditing("true");
    setFormOrderTitle(`Editar Orden ${order.id}`);
  };

  const setSelectedProductsOnEditing = (productos) => {
    setState((prevState) => {
      return {
        ...prevState,
        selectedProducts: productos,
      };
    });
  };

  const setSearchableProducts = (productos) => {
    setState((prevState) => {
      return {
        ...prevState,
        searchableProducts: productos,
      };
    });
  };

  const setFormOrderTitle = (title) => {
    setState((prevState) => {
      return {
        ...prevState,
        orderFormTitle: title,
      };
    });
  };

  const setIsEditing = (isEditing) => {
    setState((prevState) => {
      return {
        ...prevState,
        isEditing: isEditing,
      };
    });
  };

  return {
    ACTION: {
      setPhoneNumberState: setPhoneNumberState,
      setClientNameState: setClientNameState,
      setRepartidorState: setRepartidorState,
      setSucursalState: setSucursalState,
      setSelectedAddressState: setSelectedAddressState,
      setComentariosState: setComentariosState,
      setColoniaState: setColoniaState,
      setCalleNumeroState: setCalleNumeroState,
      setEntreCallesState: setEntreCallesState,
      searchProductByName: searchProductByName,
      searchClientByPhone: searchClientByPhone,
      addSelectedProduct: addSelectedProduct,
      removeSelectedProduct: removeSelectedProduct,
      beginEditOrder: beginEditOrder,
      deleteOrder:deleteOrder,
      setSearchableProducts:setSearchableProducts,
      save: save,
    },
    ORDER_FORM_FIELDS: {
      cliente: cliente,
      order: order,
      searchableProducts: searchableProducts,
      selectedProducts: selectedProducts,
      repartidor: repartidor,
      sucursal: sucursal,
      sucursales: sucursales,
      comentarios: comentarios,
      clientes: clientes,
      nuevaDireccion: nuevaDireccion,
      direccionSeleccionada: direccionSeleccionada,
      orders: orders,
      orderFormTitle: orderFormTitle,
    },
  };
};

export default orderFormApiFactory;
