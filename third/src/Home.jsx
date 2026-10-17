import products from "./data/product"
import ProductCard from "./components/ProductCard"
import { useNavigate } from "react-router-dom"


const Home = () => {

    const navigate = useNavigate();

    function handleClick() {
        navigate("/Profile");
    }
  return (
    <div>
      <h1>My Store </h1>
      <section>
        <h2>Our Products </h2>
        <div >
          {products.map((product) => (
            <ProductCard 
            key= {product.id}
            product= {product}
            />
          ))}
        </div>

        <button onClick={handleClick}> Go to profile page </button>
      </section>
    </div>
  )
}

export default Home
