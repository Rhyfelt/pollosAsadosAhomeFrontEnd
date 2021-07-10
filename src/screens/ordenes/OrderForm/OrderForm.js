import React from "react";
import SearchBar from "../../../components/SearchBar";
import SelectedProducts from "./SelectedProducts/SelectedProducts";
import Input from "../../../components/Input";
import LookupClientByPhone from "./LookupClientByPhone/LookupClientByPhone";
import SelectPicker from "../../../components/SelectPicker";
import ProductsList from "./ProductsList/ProductsList";
import { useOrderStore } from "../OrdersStore/orderStore";
import { postRequest } from "../../../shared/requestApiService";
import endPoints from "../../../shared/urls";
import "./OrderForm.css";

const OrderForm = () => {
  const orderFormApi = useOrderStore();
  const {
    setPhoneNumberState,
    setClientNameState,
    setRepartidorState,
    setColoniaState,
    setEntreCallesState,
    setCalleNumeroState,
    setSucursalState,
    setSelectedAddressState,
    setComentariosState,
    searchProductByName,
    searchClientByPhone,
    addSelectedProduct,
    removeSelectedProduct,
    save,
  } = {...orderFormApi.ACTION};
  const {
    cliente,
    searchableProducts,
    selectedProducts,
    repartidor,
    sucursal,
    sucursales,
    comentarios,
    direccionSeleccionada,
    orderFormTitle
  } = {...orderFormApi.ORDER_FORM_FIELDS};
  

  return (
    <div className="order-form-container">
      <h2 className="order-form-h2">{orderFormTitle}</h2>
      <div className="order-form-search-container">
        <SearchBar
          placeholder={"Buscar productos..."}
          onSearch={searchProductByName}
        />
        <div>
          <label>Sucursal</label>
          <SelectPicker
            itemType={"Sucursales"}
            changeSelect={setSucursalState}
            value={sucursal}
            data={sucursales}
          />
        </div>
      </div>
      <div>
        <SelectedProducts
          productos={selectedProducts}
          onRemove={removeSelectedProduct}
        />
        <div>
          <h3 className="order-form-h3">Seleccione los productos del menu</h3>
        </div>
        <ProductsList />
        <hr className="order-form-separator" />
        <p className="order-form-h3">Formulario del cliente</p>
        <LookupClientByPhone
          searchClientByPhone={searchClientByPhone}
          cliente={cliente}
          setPhoneNumberState={setPhoneNumberState}
          setColoniaState={setColoniaState}
          setCalleNumeroState={setCalleNumeroState}
          setEntreCallesState={setEntreCallesState}
          setSelectedAddressState={setSelectedAddressState}
          setComentariosState={setComentariosState}
          comentarios={comentarios}
          setClientNameState={setClientNameState}
          direccionSeleccionada={direccionSeleccionada}
        />
        <hr className="order-form-separator" />
        <div>
          <Input
            onChangeText={setRepartidorState}
            width={"fit-content"}
            label={"Repartidor"}
            value={repartidor}
            margin={"1em 1em 1em 1em"}
          />
        </div>
        <div className="order-form-saveorder-btn-container">
          <button 
          onClick={() => {
            let orderObject = save()
            postRequest(endPoints.ordersCreate,orderObject)
          }}
          className="order-form-saveorder-btn">
            Guardar Orden
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
