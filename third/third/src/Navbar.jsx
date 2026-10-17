import { useContext } from "react"
// import { UserContext } from "./context/UserContext"
import { ThemeContext } from "./context/ThemeContext";

const Navbar = () => {

    // const username = useContext(UserContext);
    const {darkMode , toggle} = useContext(ThemeContext);
  return (
    <div>
      {/* <h1>Login as :  , {username.name}</h1> */}

      <p>Current theme : {darkMode? "Dark" : "Light"}</p>

      <button onClick={toggle} className="ng-blue-600 text-white px-4 py-2 rounded "> change theme </button>

    </div>
  )
}

export default Navbar
