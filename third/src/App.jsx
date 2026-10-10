
// const App = () => {



//   let count = 0;

//   function increase() {
//     count++;
//     console.log(count);
//   }

//   return (
//     <div>
//       <h1>Counter :{count}</h1>
//       <button onClick={increase}>Increase</button>
//     </div>
//   )
// }

// export default App


// import { useState } from "react"


// const App = () => {

//   const [count , setCount] = useState(0);



//   function increase() {
//     setCount(count+1);
//   }

//   function decrease() {
//     setCount(count-1);
//   }

//   function reset() {
//     setCount(0);
//   }
//   return (
//     <div>
//       <h1>Counter : {count}</h1>
//       <button onClick={increase}>Increase</button>
//       <button onClick={decrease}>Decrease</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   )
// }

// export default App



// to update the ui or re-render the compoenent 

// [which variable ,  set on which variable ] = useState(initial condition )






// const App = () => {
// const [showPass , setShowPass] = useState(false);

//   return (
//     <div>
//       <input type={showPass ? "text" : "password"} placeholder="enter your password"  />
//       <button onClick={() => setShowPass(!showPass)}>{showPass ? "Hide" : "Show"}</button>
//     </div>
//   )
// }

// export default App



import { useState } from "react"
import Filter from "./Filter"


const App = () => {
  const [category , setCategory] = useState("All");

const products = [
  {
    id : 1,
    name : "laptop",
    category : "electronics",
    price : 80000
  },
   {
    id : 2,
    name : "Mobile",
    category : "electronics",
    price : 40000
  },
   {
    id : 3,
    name : "Shirt",
    category : "clothing",
    price : 3000
  },
   {
    id : 4,
    name : "sunscreen",
    category : "beauty",
    price : 1000
  },
]

const filteredProduct  = products.filter((product) => {
  return category === "All" || product.category === category;
})

const [ cart , setCart]=  useState([]);

function addToCart(product) {
  const existingProduct = cart.find((item) => item.id === product.id
  );

  if (existingProduct) {
    setCart (
      cart.map((item) => item.id === product.id ? {...item , quantity: item.quantity+1} : item )
    );
  } else {
    setCart([
      ...cart , {...product , quantity:1}
    ]);
  }
}



  return (
    <div>
      <h1>my shopping shop </h1>
      <Filter category={category} setCategory={setCategory} />
      <div>
       {filteredProduct.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <p>Category : {product.category}</p>
          <p>Price : {product.price}</p>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
           </div>
       ))}
      </div>

      <div>
        
        <h2>My Cart</h2>
        {cart.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Price : {item.price}</p>
            <p> Quantity : {item.quantity}</p>
             </div>
        ))}

        {cart.length === 0 && (
          <p> Your cart is empty ..</p>
        )}
      </div>


    </div>
  )
}

export default App
