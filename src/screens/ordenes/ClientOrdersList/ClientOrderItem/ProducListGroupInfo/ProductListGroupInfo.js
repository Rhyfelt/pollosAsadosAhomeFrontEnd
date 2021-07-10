import RenderList from '../../../../../components/RenderList'
import ProductGroupInfo from '../ProductGroupInfo/ProductGroupInfo'
import './ProductListGroupInfo.css'
const ProductListGroupInfo = RenderList({
  Component: ProductGroupInfo,
  classNameContainer: "product-list-group-container",
});

export default ProductListGroupInfo
