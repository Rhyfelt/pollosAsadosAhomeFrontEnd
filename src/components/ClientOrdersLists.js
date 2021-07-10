import React from 'react'
import ClientOrderItem from '../screens/ordenes/ClientOrdersList/ClientOrderItem/ClientOrderItem'
import '../assets/style/ClientOrderList.css'
import PropTypes from 'prop-types'

const ClientOrdersLists = ({orders,beginEditOrder, deleteOrder}) => {
    return (
        <div className="clientorderlist-container">
            {orders.map((order,index) => 
                <ClientOrderItem
                    key={order.key}
                    id={order.id}
                    {...order}
                    onEditHandler={() => beginEditOrder({...order})}
                    onDeleteHandler={() => deleteOrder(order.id)}
                />
            )}
        </div>
    )
}

ClientOrdersLists.propTypes = {
    orders: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.number.isRequired,
        id: PropTypes.number.isRequired,
    sucursal: PropTypes.string.isRequired,
    fechaInfo: PropTypes.shape({fecha:PropTypes.string.isRequired,hora:PropTypes.string.isRequired}),
    repartidor: PropTypes.string.isRequired,
    cliente: PropTypes.shape({
        key:PropTypes.string.isRequired,
        nombre:PropTypes.string.isRequired,
        direccion:PropTypes.shape({
            colonia:PropTypes.string.isRequired,
            numeroCalle:PropTypes.string.isRequired,
            entreCalles:PropTypes.string.isRequired
        })
    }),
    productos: PropTypes.array.isRequired,
    totalPrice: PropTypes.number.isRequired,
    }))
}

export default ClientOrdersLists
