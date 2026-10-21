import { useEffect, useState } from "react"
import axios from "axios";

const App = () => {

  const [products , setProducts] = useState([]);
  const [ error , setError] = useState("");
  const [loading , setLoading] = useState(true);

  useEffect (() => {
    async function fetchProduct() {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");

        setProducts(response.data);
      } catch (err) {
        setError("failed to load products .")
      } finally {
        setLoading(false);
      }
    }
    fetchProduct();
  }, []);


  if (loading) {
    return <h2> Loading..........</h2>
  }
  if (error) {
    return <h2>{error}</h2>
  }
  return (
    <div className="min-h-screen bg-gray-100 p-6">
     <h1 className="text-3xl font-bold mb-6">Our Product </h1>

     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"> {products.map((product) => (
      <div className="bg-white p-4 rounded-xl shadow" key={product.id}>
        <img  className="h-40 w-full object-contain" src={product.image} alt={product.title} />
        <h2 className="font-bold mt-3">{product.title}</h2>
        <p className="text-green-600 font-semibold mt-2">{product.price}</p>
        <p className="text-gray-600 text-sm mt-2">{product.category}</p>
        <p className="text-gray-800 mt-2"><small>{product.description}</small></p>
         </div>
     ))}

 
     </div>
    </div>
  )
}

export default App
