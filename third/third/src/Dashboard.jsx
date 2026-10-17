import { useContext } from "react"
import { UserContext } from "./context/UserContext"

const Dashboard = () => {
    const user = useContext(UserContext);
  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome , {user.name}</p>
      <p>Your role is : {user.role}</p>
    </div>
  )
}

export default Dashboard
