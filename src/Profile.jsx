import  { useContext } from 'react'
// import { UserContext } from './context/UserContext'
import { ThemeContext } from './context/ThemeContext';

const Profile = () => {
    // const user = useContext(UserContext);
    const {darkMode} = useContext(ThemeContext);
  return (
    <div>
      <h1>User Profile </h1>
      {/* <p>Name : {user.name}</p>
      <p>Email : {user.email}</p>
      <p>Role : {user.role}</p> */}


      <p>{darkMode ? "Darkmode mode is enabled" : "light mode is enabled "}</p>
    </div>
  )
}

export default Profile
