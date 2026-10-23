// import { useEffect, useState } from "react"
// import axios from "axios";



// import { useMemo, useReducer, useRef, useState } from "react"

// const App = () => {

//   const [products , setProducts] = useState([]);
//   const [ error , setError] = useState("");
//   const [loading , setLoading] = useState(true);

//   useEffect (() => {
//     async function fetchProduct() {
//       try {
//         const response = await axios.get("https://fakestoreapi.com/products");

//         setProducts(response.data);
//       } catch (err) {
//         setError("failed to load products .")
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProduct();
//   }, []);


//   if (loading) {
//     return <h2> Loading..........</h2>
//   }
//   if (error) {
//     return <h2>{error}</h2>
//   }
//   return (
//     <div className="min-h-screen bg-gray-100 p-6">
//      <h1 className="text-3xl font-bold mb-6">Our Product </h1>

//      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"> {products.map((product) => (
//       <div className="bg-white p-4 rounded-xl shadow" key={product.id}>
//         <img  className="h-40 w-full object-contain" src={product.image} alt={product.title} />
//         <h2 className="font-bold mt-3">{product.title}</h2>
//         <p className="text-green-600 font-semibold mt-2">{product.price}</p>
//         <p className="text-gray-600 text-sm mt-2">{product.category}</p>
//         <p className="text-gray-800 mt-2"><small>{product.description}</small></p>
//          </div>
//      ))}

 
//      </div>
//     </div>
//   )
// }

// export default App





// const App = () => {


//   const initialState = 0;

//   function reducer (state , action) {
//     switch (action.type){
//       case "increment" :
//         return state + 1;

//        case "decrement" :
//         return state - 1;

//         case "reset":
//           return initialState;
         
//       default:
//         return state  
//     }
//   }



//   const [count , dispatch] = useReducer(reducer , initialState);
//   return (
//     <div>
//       <h1>Count : {count}</h1>

//       <button onClick={() => dispatch({type : "increment"})}>Increment</button>

//       <button onClick={() => dispatch({type : "decrement"})}>Decrement</button>

//       <button onClick={() => dispatch({type : "reset"})}>Reset</button>
//     </div>
//   )
// }

// export default App


// const products = [
//   {id : 1 , name : "Laptop" , price : 50000},
//   {id : 2 , name : "watch" , price : 2000},
//   {id : 3 , name : "mobile" , price : 40000},
//   {id : 4  , name : "keyboard" , price : 2000},
//   {id : 5 , name : "earbuds" , price : 1000},
// ];

// const App = () => {


//   const [maxPrice , setMaxPrice] = useState(20000);


//   const filterProducts = useMemo(() =>{
//     console.log("filtering product.........");

//     return products.filter((product) => product.price <= maxPrice);
//   } , [maxPrice]);
//   return (
//     <div>
//       <h1>Product filter</h1>

//       <label > Maximum price : {}</label>
//       <input type="range"
//       min="1000"
//       max="50000"
//       step = "1000"
//       value={maxPrice}
//       onChange={(e) => setMaxPrice(Number(e.target.value))}
//       />



//        <h2>Filtered Product</h2>

//        {filterProducts.map((product) => (
//         <p key={product.id}>{product.name} - ${product.price}</p>
//        ))}


      
//     </div>

   
//   )
// }

// export default App





// const App = () => {

//   const inputRef = useRef(null);

//   function focusInput() {
//     inputRef.current.focus();
//   }
//     return (
//     <div>
//       <input ref={inputRef} 
//       placeholder="enter your name"/>


//       <button onClick={focusInput}> Foucs Input </button>
//     </div>
//   )
// }

// export default App

import { lazy, Suspense, useState } from "react"
import Home from "./Home"

const About = lazy(() => import("./About"));


const App = () => {

  const [pages , setPages]  = useState("home");
  return (
    <div>
      <div>
      <button onClick={() => setPages("home")}>Home</button>
      <button onClick={() => setPages("about")}>About</button>
  </div>

    <hr />


    {pages === "home" ? (<Home />) : (<Suspense fallback={<h2>Loading About Page ...</h2>}>
     <About />
    </Suspense>
    )}

      </div>
  )
}

export default App






