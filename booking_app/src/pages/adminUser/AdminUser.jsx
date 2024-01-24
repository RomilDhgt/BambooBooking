import axios from "axios"
import "./adminUser.css"
import React, {useEffect, useState} from "react"
import {useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"
import Update from "../../components/update/Update";

const AdminUser = ()=>{

    const [users, setUsers] = useState([])
    const [add, setAdd] = useState()
    const [updating, setUpdating] = useState(false)
    const [userId, setId] = useState(undefined)
    const [error, setError] = useState()
    const [credentials, setCredentials] = useState({
        username:undefined,
        email:undefined,
        password:undefined,
        isAdmin:undefined,
    })

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:8800/users').then(result => setUsers(result.data)).catch(err => console.log(err))
    })

    const handleDelete = (id) =>{
        axios.delete(`http://localhost:8800/users/${id}`).then(res => console.log(res)).catch(err => console.log(err))
    }

    const handleChange = (e) =>{
        
        setCredentials(prev=>({...prev, [e.target.id]: e.target.value}));
        
    }

    const handleRegister = async e =>{
        console.log(credentials)
        try {
            await axios.post("http://localhost:8800/auth/register", credentials);
        } catch (err) {
            console.log(err)
            setError(err)
        }
    }
    
    return (
        <div className="aUser">
            <div className="hotel">
                    Access Hotel Table:
                    <button className="adminButton" onClick={()=>navigate("/adminHotel")}>Hotel</button>
                    Add User:
                    <button className="adminButton" onClick={()=>setAdd(true)}>Add User</button>
            </div>
            <div className="adminColumn">
                <table className="userTable">
                    <thead className="heading">
                        <tr className="row">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Admin</th>
                        </tr>
                    </thead>
                    <tbody className="body">
                        {
                            users.map((user,i)=>{
                                return ( 
                                    <tr className="row" key={i}>
                                        <td>{user.username}</td>
                                        <td>{user.email}</td>
                                        <td>{user.password}</td>
                                        <td>{user.isAdmin.toString()}</td>
                                        <td><button className="adminButton" onClick={()=>{setUpdating(true); setId(user._id)}}>Update</button></td>
                                        <td><button className="adminButton" onClick={()=>handleDelete(user._id)}>Delete</button></td>
                                    </tr>
                                    
                                )
                        })}
                    </tbody>
                </table>
            </div>
            {add && 
                <div className="addUser">
                    <div className="addContainer">
                        <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setAdd(false)}/>
                        <b>Username</b>
                        <input type="text" placeholder="username" id='username' onChange={handleChange} className="registerInput"/>
                        <b>Email</b>
                        <input type="text" placeholder="email" id='email' onChange={handleChange} className="registerInput"/>
                        <b>Password</b>
                        <input type="password" placeholder='password' id='password' onChange={handleChange} className="registerInput" />
                        <b>Admin</b>
                        <select id='isAdmin' placeholder='select' onChange={handleChange} className="registerInput">
                            <option value={false}>False</option>
                            <option value={true}>True</option>
                        </select>
                        <button onClick={handleRegister} className="registerButton">Add User</button>
                        {error && <span>{error.message}</span>}
                    </div>
                </div>
            }
            {updating && 
                <Update setUpdating={setUpdating} id={userId}/>
            }
        </div>
    )
}

export default AdminUser