import { useEffect, useState } from "react"

const Grid  = ()=>{
    const [users,setUsers]=useState([]);
    
    const loadUsers = async ()=>{
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const results = await response.json();
            setUsers(results);
        } catch (error) {
            console.error(error);
        }
       
    }
    useEffect(()=>{
        loadUsers();
    },[]);

    return(
        <div className="grid">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                </tr>
                </thead>
                <tbody>
                    {users.map((user,index)=>{
                        return (<tr key={index}><td>{user.id}</td><td>{user.name}</td><td>{user.username}</td></tr>)
                    })}
                </tbody>
            </table>
        </div>
    )

}
export default Grid;