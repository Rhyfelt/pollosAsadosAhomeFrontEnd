import DataProductos from "../../../../components/DataProductos";
import DataClientes from "../../../../components/DataClientes";
import DataSucursales from "../../../../components/DataSucursales";
const orderFormInitialState = {
  cliente: {
    key: "",
    nombre: "",
    nuevaDireccion: { colonia: "", calleNumero: "", entreCalles: "" },
    direcciones: [],
    direccionSeleccionada: "",
    comentarios: "",
  },
  order: {
    key: -1,
    id:-1,
    sucursal: "",
    fechaInfo: { fecha: "", hora: "" },
    repartidor: "",
    cliente: {
      key: "",
      nombre: "",
      direccion: { colonia: "", calleNumero: "", entreCalles: "" },
    },
    productos: [],
    searchableProducts:[],
    totalPrice: 0,
  },
  orders: [],
  selectedProducts: [],
  productos: DataProductos,
  searchableProducts: [],
  repartidor: "",
  sucursales: DataSucursales,
  comentarios: "",
  clientes: DataClientes,
  sucursal: "",
  orderFormTitle:"Agruegue una orden",
  isEditing:"false",
  orderIdOnEditing:0
};

export default orderFormInitialState;
