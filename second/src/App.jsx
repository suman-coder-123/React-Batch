// import {BrowserRouter, Route, Routes} from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Login from "./pages/Login";
// import MainLayout from "./layouts/MainLayout";
// import Register from "./pages/Register";


// const App = () => {
//   return (
//    <BrowserRouter>
//     <Routes>
//       <Route element={<MainLayout />} >
//       <Route path="/" element= {<Home />} />
//       <Route path="/about" element= {<About />} />
//       <Route path="/login" element = {<Login />} />

//       </Route>
//       <Route path="/register" element= {<Register />} />
//     </Routes>


//    </BrowserRouter>
//   )
// }

// export default App



import { Route, Routes} from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Setting from "./pages/Setting";

const App = () => {
  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} >
      {/* <Route index element={<Profile />} /> */}
      <Route path="profile" element={<Profile />}/>
      <Route path="setting" element={<Setting />} />
      </Route>
    </Routes>
  )
}

export default App
