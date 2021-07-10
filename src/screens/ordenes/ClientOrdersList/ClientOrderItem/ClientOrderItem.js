import React from 'react'
import IdInfo from './IdInfo/IdInfo'
import FechaInfo from './FechaInfo/FechaInfo'
import SucursalInfo from './SucursalInfo/SucursalInfo'
import RepartidorInfo from './RepartidorInfo/RepartidorInfo'
import ClientGroupInfo from './ClientGroupInfo/ClientGroupInfo'
import ProductListGroupInfo from './ProducListGroupInfo/ProductListGroupInfo'
import PrecioTotalInfo from './PrecioTotalInfo/PrecioTotalInfo'
import {MdDelete,MdEdit} from 'react-icons/md'
import './ClientOrderItem.css'



const ClientOrderItem = ({
  id,
  fechaInfo,
  cliente,
  sucursal,
  productos,
  repartidor,
  totalPrice,
  onEditHandler,
  onDeleteHandler
}) => {
  const dataProductListGroupInfo = productos.map((item, index) => {
    return {
      key: index,
      title: item.nombre,
      data: [item.cantidad, `$${item.precioTotal}`],
    };
  });

  return (
    <div className="clientorderitem-container">
      <div className="clientorderitem-header-container">
        <p className="clientorderitem-order-title">Orden {id}</p>
        <div>
          <button onClick={onEditHandler} className="clientorderitem-btn-editar">
            <MdEdit className="clientorderitem-logo-edit" />
          </button>
          <button onClick={onDeleteHandler} className="clientorderitem-btn-delete">
            <MdDelete className="clientorderitem-logo-delete" />
          </button>
        </div>
      </div>
      <hr className="clientorderitem-separator" />
      <div className="clientorderitem-body-container">
        <FechaInfo title="Fecha" data={[fechaInfo.hora, fechaInfo.fecha]} />
        <SucursalInfo title={"Sucursal"} data={[sucursal]} />
        <RepartidorInfo title={"Repartidor"} data={[repartidor]} />
        <ClientGroupInfo
          title={"Info del Cliente"}
          data={[
            cliente.nombre,
            cliente.telefono,
            cliente.direccion.colonia,
            cliente.direccion.calleNumero,
            cliente.direccion.entreCalles,
            cliente.comentarios,
          ]}
        />
        <ProductListGroupInfo items={dataProductListGroupInfo} />
        <PrecioTotalInfo title={"Precio total"} data={[`$${totalPrice}`]} />
      </div>
    </div>
  );
};

export default ClientOrderItem
