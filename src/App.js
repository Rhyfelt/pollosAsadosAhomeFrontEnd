import Ordenes from "./screens/ordenes/Ordenes";
import { OrderStoreProvider } from "./screens/ordenes/OrdersStore/orderStore"
import Home from "./screens/home/Home"
import './assets/style/App.css'
import NavBar from "./components/NavBar";
import RouterComponent from "./components/RouterComponent";

function App() {
  return (
    <div>
      <NavBar/>
      <RouterComponent/>
    </div>
  );
}

export default App;
