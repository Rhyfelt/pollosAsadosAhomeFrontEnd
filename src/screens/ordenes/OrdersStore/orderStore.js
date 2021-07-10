import createStore from "../../../shared/createStore"
import orderFormApiFactory from "../OrderForm/OrderFormApiFactory/OrderFormApiFactory"
import orderFormInitialState from "../OrderForm/OrderFormApiFactory/OrderFormInitialState"

let [OrderStoreProvider, useOrderStore] = createStore(orderFormApiFactory, orderFormInitialState)

export { OrderStoreProvider, useOrderStore };
   
