import React, {useState} from 'react'
import OrderForm from './OrderForm/OrderForm';
import VisibleOrdersList from './ClientOrdersList/VisibleOrdersList'
import './Ordenes.css'
import { OrderStoreProvider } from './OrdersStore/orderStore';


const Ordenes = () => {
    return (
      <OrderStoreProvider>
          <div className="ordenes-container">
        <h1 className="ordenes-title">Ordenes</h1>
        <div className="ordenes-bodycontainer">
          <OrderForm />
          <VisibleOrdersList />
        </div>
      </div>
      </OrderStoreProvider>
    
    );
}

export default Ordenes
