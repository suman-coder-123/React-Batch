
// const App = () => {

import { useState } from "react"


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






const App = () => {
const [showPass , setShowPass] = useState(false);

  return (
    <div>
      <input type={showPass ? "text" : "password"} placeholder="enter your password"  />
      <button onClick={() => setShowPass(!showPass)}>{showPass ? "Hide" : "Show"}</button>
    </div>
  )
}

export default App
