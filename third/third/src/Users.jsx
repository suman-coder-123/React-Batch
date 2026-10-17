import  { useState  , useEffect} from 'react'

const Users = () => {
    const [users , setUsers] = useState([]);

    const [ loading , setLoading] = useState(true);

    const [ error , setError] = useState("");

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("failed to fetch user");
                }

                const data =  await response.json();
                setUsers(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchUsers();
    } , []);


    if(loading) {
        return <h2>Loading Users.........</h2>
    }

    if (error) {
        return <h2>Error : {error}</h2>
    }
  return (
    <div>
      <h1>User list </h1>

      <div> {users.map((user) => (
        <div key={user.id}> 
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        </div>
      ))}</div>
    </div>
  )
}

export default Users
