import React from 'react'
import ClientOrdersLists from "../../../components/ClientOrdersLists";
import { useOrderStore } from "../OrdersStore/orderStore";
import withHooks from "../../../shared/withHooks";

const useMapHooksToProps = props => {
    const orderApi = useOrderStore()
    const { orders } = {...orderApi.ORDER_FORM_FIELDS}
    const { beginEditOrder, deleteOrder } = { ...orderApi.ACTION}
    return {
        beginEditOrder,
        deleteOrder,
        orders
    }
}

export default withHooks(useMapHooksToProps)(ClientOrdersLists)