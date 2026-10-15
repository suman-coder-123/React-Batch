import { Outlet , Link } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <nav>
        <Link to="profile"> Profile</Link>
        <br />
        <Link to="setting"> Setting</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  )
}

export default Dashboard
