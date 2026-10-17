
// const App = () => {

// import { useState } from "react"
// import { ThemeContext } from "./context/ThemeContext";
// import Navbar from "./Navbar";
// import Profile from "./Profile";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ProductDeatils from "./ProductDeatils";
import Profile from "./Profile";





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



// import { useState } from "react"
// import Filter from "./Filter"


// const App = () => {
//   const [category , setCategory] = useState("All");

// const products = [
//   {
//     id : 1,
//     name : "laptop",
//     category : "electronics",
//     price : 80000
//   },
//    {
//     id : 2,
//     name : "Mobile",
//     category : "electronics",
//     price : 40000
//   },
//    {
//     id : 3,
//     name : "Shirt",
//     category : "clothing",
//     price : 3000
//   },
//    {
//     id : 4,
//     name : "sunscreen",
//     category : "beauty",
//     price : 1000
//   },
// ]

// const filteredProduct  = products.filter((product) => {
//   return category === "All" || product.category === category;
// })

// const [ cart , setCart]=  useState([]);

// function addToCart(product) {
//   const existingProduct = cart.find((item) => item.id === product.id
//   );

//   if (existingProduct) {
//     setCart (
//       cart.map((item) => item.id === product.id ? {...item , quantity: item.quantity+1} : item )
//     );
//   } else {
//     setCart([
//       ...cart , {...product , quantity:1}
//     ]);
//   }
// }



//   return (
//     <div>
//       <h1>my shopping shop </h1>
//       <Filter category={category} setCategory={setCategory} />
//       <div>
//        {filteredProduct.map((product) => (
//         <div key={product.id}>
//           <h2>{product.name}</h2>
//           <p>Category : {product.category}</p>
//           <p>Price : {product.price}</p>
//           <button onClick={() => addToCart(product)}>Add to Cart</button>
//            </div>
//        ))}
//       </div>

//       <div>
        
//         <h2>My Cart</h2>
//         {cart.map((item) => (
//           <div key={item.id}>
//             <h3>{item.name}</h3>
//             <p>Price : {item.price}</p>
//             <p> Quantity : {item.quantity}</p>
//              </div>
//         ))}

//         {cart.length === 0 && (
//           <p> Your cart is empty ..</p>
//         )}
//       </div>


//     </div>
//   )
// }

// export default App

// import { useEffect, useState } from "react"



// const App = () => {
//   // const [count , setCount] = useState(0);

//   // useEffect(() => {
//   //   console.log("count changed ",    count);
//   // } , [count]);



//   const [seconds , setSeconds] = useState(0);

//   useEffect(() => {
//     const timer = setInterval(() => {
//       setSeconds(s => s+1);
//     } , 1000);

//     return () => {
//       clearInterval(timer);
//     };
//   } , []);

//   return (
//     <div>
//       <button onClick={() => setCount(count+1)}>Count : {count} </button>

//       <h1>Seconds : {seconds}</h1>
//     </div>
//   )
// }

// export default App



// // useEffect(() => {
// //    effect logic 

// //    return
// // } , [dependecies]);



// import ProductCard from './components/ProductCard'
// import products from './data/product'

// const App = () => {
//   return (
//     <div>
//      {products.map((product) => {
//        <ProductCard  key={product.id} 
//       product={product}/>
//      })}
//     </div>
//   )
// }

// export default App



// import { useRef } from "react";

// const App = () => {

    // const inputRef = useRef(null);

    // function handleClick() {=
    //     inputRef.current.focus();
    // }


//     const countRef = useRef(0);

//     function handleClick () {
//         countRef.current++;
//         console.log(countRef.current);
//     }

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="enter your name" />
//       <button onClick={handleClick}>Foucs input</button>


//       <button onClick={handleClick}>Increase Count</button>
//     </div>
//   )
// }

// export default App

// import { UserContext } from "./context/UserContext";
// import Dashboard from "./Dashboard";
// import Navbar from "./Navbar";
// import Profile from "./Profile";



// const App = () => {

//     const user = {
//         name : "suman",
//         email : "suman@gmail.com",
//         role : "admin",
//     }

//     // const userName = "suman";
//   return (
//     // <UserContext.Provider value={userName}>
//     //     <Navbar />
//     // </UserContext.Provider>

//     <UserContext.Provider value={user}>
//         <Navbar />
//         <Profile />
//         <Dashboard />
//     </UserContext.Provider>
//   )
// }

// export default App






// const App = () => {

//     const [darkMode , setDarkmode] = useState(true);

//     function toggle () {
//         setDarkmode(prev => !prev);
//     }
//   return (
  
//       <ThemeContext.Provider value={{darkMode , toggle }}>

//         <div className={darkMode ? "bg-gray-900 text-white min-h-screen" : "bg-white text-black min-h-screen"}>
//             <Navbar />
//             <Profile />




//         </div>

//       </ThemeContext.Provider>
  
//   )
// }

// export default App




const App = () => {
  return (
    <BrowserRouter>

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/products/:id" element={ <ProductDeatils/>} />
    </Routes>
    </BrowserRouter>

  )
}

export default App










