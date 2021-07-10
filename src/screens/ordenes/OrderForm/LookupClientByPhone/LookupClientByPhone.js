import React from 'react'
import AddComponent from '../../../../components/AddComponent'
import SearchBar from '../../../../components/SearchBar'
import ClientInfo from './ClientInfo/ClientInfo'
import './LookupClientByPhone.css'

const LookupClientByPhone = ({
  searchClientByPhone,
  cliente,
  setPhoneNumberState,
  setColoniaState,
  setEntreCallesState,
  setCalleNumeroState,
  setSelectedAddressState,
  setComentariosState,
  comentarios,
  setClientNameState,
  nuevaDireccion,
  direccionSeleccionada
}) => {
  return (
    <div className="lookupclient-container">
      <div className="lookupclient-header-container">
        <SearchBar
          onSearch={searchClientByPhone}
          placeholder={"Buscar cliente por telefono"}
        />
        {cliente.direcciones.length > 0 || cliente.direcciones.length == undefined ? 
        <ClientInfo
            direccionesCliente={cliente.direcciones}
            phoneCliente={cliente.key}
            nombreCliente={cliente.nombre}
            setSelectedAddressState={setSelectedAddressState}
            direccionSeleccionada={direccionSeleccionada}
          />
         : null}
      </div>
      <div className="lookupclient-newclient-container">
        {cliente.direcciones.length == 0 || cliente.direcciones.length == undefined ? <AddComponent
          label={""}
          propertyName={"Telefono"}
          onChangeText={setPhoneNumberState}
          value={cliente.key}
        />: null}
        {cliente.direcciones.length == 0 || cliente.direcciones.length == undefined ?<AddComponent
          label={""}
          propertyName={"Nombre"}
          onChangeText={setClientNameState}
          value={cliente.nombre}
        />:null}
         {cliente.direcciones.length == 0 || cliente.direcciones.length == undefined ? <AddComponent
          label={""}
          propertyName={"Colonia"}
          onChangeText={setColoniaState}
          value={cliente.nuevaDireccion.colonia}
        />:null}
        {cliente.direcciones.length == 0 || cliente.direcciones.length == undefined ? <AddComponent
          label={""}
          propertyName={"Calle y número"}
          onChangeText={setCalleNumeroState}
          value={cliente.nuevaDireccion.calleNumero}
        />:null}
        {cliente.direcciones.length == 0 || cliente.direcciones.length == undefined? <AddComponent
          label={""}
          propertyName={"Entre calles"}
          onChangeText={setEntreCallesState}
          value={cliente.nuevaDireccion.entreCalles}
        />:null}
      </div>

      <div className="lookupclient-footer-container">
        <textarea
          value={comentarios}
          onChange={(e) => setComentariosState(e.target.value)}
          style={{ resize: "none" }}
          rows="5"
          cols="30"
          placeholder="Comentarios"
          className="lookupclient-textarea"
        />
      </div>
    </div>
  );
};

export default LookupClientByPhone
