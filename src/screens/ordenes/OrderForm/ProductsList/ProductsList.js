import React, { useEffect } from "react";
import ProductItem from "./ProductItem/ProductItem";
import withHooks from "../../../../shared/withHooks";
import { getRequest } from "../../../../shared/requestApiService";
import endPoints from "../../../../shared/urls";
import { useOrderStore } from "../../OrdersStore/orderStore";
import "./ProductsList.css";

const ProductsList = ({
  searchableProducts,
  addSelectedProduct,
  setSearchableProducts,
}) => {
  useEffect(async () => {
    let products = await getRequest(endPoints.productosList);
    setSearchableProducts(products);
  }, []);
  return (
    <div className="product-list-container">
      {searchableProducts.map((product) => {
        return (
          <ProductItem
            key={product.id}
            id={product.id}
            nombre={product.nombre}
            precioUnitario={product.precio_unitario}
            onAddSelectedProduct={addSelectedProduct}
          />
        );
      })}
    </div>
  );
};

const useMapHooksToProps = (props) => {
  const useOrderApi = useOrderStore();
  const { addSelectedProduct, setSearchableProducts } = {
    ...useOrderApi.ACTION,
  };

  const { searchableProducts } = { ...useOrderApi.ORDER_FORM_FIELDS };

  return {
    searchableProducts,
    addSelectedProduct,
    setSearchableProducts,
  };
};

export default withHooks(useMapHooksToProps)(ProductsList);
