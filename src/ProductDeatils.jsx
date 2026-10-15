
import {useParams} from "react-router-dom";
import products from "./data/product";
import { Link } from "react-router-dom";

const ProductDeatils = () => {

    const { id } = useParams();

    console.log(id);
    console.log(products);

    const product = products.find(
        (item) => item.id === Number(id)
    );


    if (!product) {
        return (
            <div>
            <h1> Product not found!</h1>
            <Link to="/">Back to home </Link>
            </div>
        )
    }
  return (
    <div>
      <h1>Product details</h1>


      <Link to="/"> Back to product</Link>

      <div>
        <p>{product.category}</p>
        <h1>{product.name}</h1>
        <p>{product.price}</p>
     
      <p>Product ID : {id}</p>

      <button onClick={() => alert("product add to cart ")}>Add to cart </button>
       </div>
    </div>
  )
}

export default ProductDeatils
