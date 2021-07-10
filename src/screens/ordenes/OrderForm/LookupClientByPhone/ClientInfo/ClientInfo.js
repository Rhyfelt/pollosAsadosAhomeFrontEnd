import React from "react";
import SelectPicker from "../../../../../components/SelectPicker";
import SelectPickerHelper from '../../../../../helpers/SelectPickerHelper'
import "./ClientInfo.css";

const ClientInfo = ({
  nombreCliente,
  phoneCliente,
  direccionesCliente,
  direccionSeleccionada,
  setSelectedAddressState,
}) => {
  const direcciones = SelectPickerHelper.convertListOfAdressObjectsIntoString(direccionesCliente)
  return (
    <div className="clientinfo-container">
      <p className="clientinfo-nombre">{nombreCliente}</p>
      <p className="clientinfo-phone">{phoneCliente}</p>
      <SelectPicker
        itemType={"Direcciones"}
        changeSelect={setSelectedAddressState}
        value={direccionSeleccionada}
        data={direcciones}
      />
    </div>
  );
};

export default ClientInfo;
